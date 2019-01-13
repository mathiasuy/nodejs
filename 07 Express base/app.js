var express = require('express');
var app = express();

app.get('/', (peticion, respuesta) => {
	respuesta.send('Hola mundo con express');
})

app.listen(3000, ()=>{
	console.log('Escuchando en el puerto 3000');
})