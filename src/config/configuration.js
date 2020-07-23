var conexao = {
    server: 'localhost',
    porta: 3306,
    usuario: 'root',
    password: '123456',
    database: 'cartplace_2',
    app_port: 4000,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
}

var store_sessions = {
    host: conexao.server,
    port: conexao.porta,
    user: conexao.usuario,
    password: conexao.password,
    database: conexao.database,
    // Whether or not to automatically check for and clear expired sessions:
    clearExpired: true,
    // How frequently expired sessions will be cleared; milliseconds:
    checkExpirationInterval: 900000,
    // The maximum age of a valid session; milliseconds:
    expiration: 86400000,
    // Whether or not to create the sessions database table, if one does not already exist:
    createDatabaseTable: true,
    // Number of connections when creating a connection pool:
    connectionLimit: 1,
    // Whether or not to end the database connection when the store is closed.
    // The default value of this option depends on whether or not a connection was passed to the constructor.
    // If a connection object is passed to the constructor, the default value for this option is false.
    endConnectionOnClose: true,
    charset: 'utf8mb4_bin',
    schema: {
        tableName: 'sessao_web',
        columnNames: {
            session_id: 'id_sessao_web',
            expires: 'expires',
            data: 'data'
        }
    }
};

var my_session = {
    codigo_usuario: '',
    nome_usuario: ''
}

module.exports = {
    conexao,
    store_sessions,
    my_session
}