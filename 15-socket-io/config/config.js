const path = require('path');
const rootPath = path.normalize(__dirname + '/..');
const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: '14-crud-con-express-y-mongodb'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/miBaseDeDatosMongo'
  },

  test: {
    root: rootPath,
    app: {
      name: '14-crud-con-express-y-mongodb'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/14-crud-con-express-y-mongodb-test'
  },

  production: {
    root: rootPath,
    app: {
      name: '14-crud-con-express-y-mongodb'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/14-crud-con-express-y-mongodb-production'
  }
};

module.exports = config[env];
