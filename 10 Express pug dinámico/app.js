var express = require('express');
var fs = require('fs');
const pug = require('pug');


var app = express();
app.use(express.static(__dirname + '/public')); // para indicar cual sera la carpeta root www


app.get('/', (peticion, respuesta) => {
	respuesta.render('index.pug', {
		titulo : "este es el nombre de mi app",
		textoParrafo : "Nuestra tienda de camisetas ofrece lo mejor, satisfacción 100% garantizada"
	});
})

app.listen(3000, ()=>{
	console.log('Escuchando en el puerto 3000');
})