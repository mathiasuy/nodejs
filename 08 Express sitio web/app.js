var express = require('express');
var fs = require('fs');

var app = express();
app.use(express.static(__dirname + '/public')); // para indicar cual sera la carpeta root www

app.get('/', (peticion, respuesta) => {
	respuesta.send('Hola mundo con express');
})

app.listen(3000, ()=>{
	console.log('Escuchando en el puerto 3000');
})