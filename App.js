const session = require('express-session');
const mysqlStore = require('express-mysql-session')(session);
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const bodyParser = require('body-parser');
const database = require('./src/config/database');
const configs = require('./src/config/configuration');
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');

var mysqlSessionStore = new mysqlStore(configs.store_sessions);
var app = express();

global.console_warning = '\x1b[33m%s\x1b[0m';

// pasta public com cache
let seteDias = 60 * 1000 * 60 * 24 * 7;
app.use(express.static('public', { maxAge: seteDias }));

// SESSION

// set sessions and cookie parser
app.use(cookieParser());
app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: mysqlSessionStore,
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 }, // 7 dias
    resave: true,    // forces the session to be saved back to the store
    saveUninitialized: true,  // dont save unmodified
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(flash());
app.use(cors());

app.use(morgan('dev'));

//Global variables
app.use(function(req, res, next){
    res.locals.success_msg = req.flash('success');
    res.locals.error_msg = req.flash('error');
    res.locals.alert_msg = req.flash('alert');
    next();
})

app.use(function(req, res, next) {
    req.session.menu_ativo = '';
    next();
})

global.id_empresa = 1;

// Rotas
const colaboradorRoute = require('./src/routes/ColaboradorRoute');
const pacienteRoute = require('./src/routes/PacienteRoute');
const visitaRoute = require('./src/routes/VisitaRoute');

// Uso das Rotas
app.use('/colaborador', colaboradorRoute);
app.use('/paciente', pacienteRoute);
app.use('/visita', visitaRoute);

try {
    conn = database.connect();
    database.disconnect(conn);

    require('./src/api/database/index');

    // tempo para carregamento de uma tela (antes estava dando ERR_CONTENT_LENGTH_MISMATCH)
    app.timeout = 120000 * 5;
    app.listen(configs.conexao.app_port, function() {
        console.log(`Aplicação disponível em http://localhost:${configs.conexao.app_port}`)
    })
} catch (error) {
    console.log(error);
    return null;
}

module.exports = app;