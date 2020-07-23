module.exports = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '123456',
  database: 'fisiocare',
  define: {
    timestamps: true,
    underscored: true
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};