const path = require('path');

module.exports = {
  entry: './App.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'fisiocare-api.js'
  },
  target: 'node',
  externals: ['pg', 'sqlite3', 'tedious', 'pg-hstore'],
  optimization: {
    minimize: false
  }
};