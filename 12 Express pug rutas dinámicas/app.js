var express = require('express');
var fs = require('fs');
const pug = require('pug');


var app = express();

app.use(express.static(__dirname + '/public')); // para indicar cual sera la carpeta root www


var camisetasLista = [
	{color: "naranja", imagen: "/images/camiseta1.png"},
	{color: "roja", imagen: "/images/camiseta2.png"},
	{color: "azul", imagen: "/images/camiseta3.png"},
	{color: "verde", imagen: "/images/camiseta4.png"}
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

app.get('/tienda/comprar/:color', (peticion, respuesta) => {

	let datosDeCamiseta = camisetasLista.filter((item)=>{//filtramos en el arreglo
		//la informacion tal  que  la info del color q nos llega es igual a el item q se debe filtrar
		if( peticion.params.color == item.color ){
			return item;
		}
	})[0]

	respuesta.render('detalles.pug', {
		color : peticion.params.color,
		datos : datosDeCamiseta
	});
})

app.use((peticion,respuesta)=>{
	respuesta.status(400);

	let URLerror = peticion.originalUrl;

	respuesta.render('404.pug', {
		textoError: URLerror
	});
})

app.listen(3000, ()=>{
	console.log('Escuchando en el puerto 3000');

})