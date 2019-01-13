

const express = require('express');
const config = require('./config/config');
const glob = require('glob');
const mongoose = require('mongoose');

mongoose.connect(config.db);
const db = mongoose.connection;
db.on('error', () => {
  throw new Error('unable to connect to database at ' + config.db);
});

const models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});
const app = express();

module.exports = require('./config/express')(app, config);

var server = app.listen(config.port, () => {
  console.log('Express server listening on port ' + config.port);
});

//importo socketio
var io = require('socket.io').listen(server);

//creo un evento para cada vez que alguien se conecte (nueva 'connection')
io.on('connection',(socket)=>{
  socket.on('chat message', (msg)=>{ //vamos a enviar un mensaje de chat que lo vean todos los clientes
    io.emit('chat mesage',msg)
  })
})
