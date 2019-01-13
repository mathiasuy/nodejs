var express = require('express');
var fs = require('fs');
const pug = require('pug');


var app = express();

app.use(express.static(__dirname + '/public')); // para indicar cual sera la carpeta root www


var camisetasLista = [
	{color: "naranja", imagen: "images/camiseta1.png"},
	{color: "roja", imagen: "images/camiseta2.png"},
	{color: "azul", imagen: "images/camiseta3.png"},
	{color: "verde", imagen: "images/camiseta4.png"}
]

app.get('/', (peticion, respuesta) => {
	respuesta.render('index.pug', {
		titulo : "este es el nombre de mi app",
		textoParrafo : "Nuestra tienda de camisetas ofrece lo mejor, satisfacción 100% garantizada"
	});
})

app.get('/tienda.html', (peticion, respuesta)=>{
	respuesta.render('tienda.pug', {
		camisetas :  camisetasLista
	})
})

app.listen(3000, ()=>{
	console.log('Escuchando en el puerto 3000');
})