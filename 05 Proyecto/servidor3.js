var servidor = require('http'); //modulo http que contiene todos los metodos para hacer funcinoar un servidor web a traves de http
var url = require('url');
var fs = require('fs'); //file system de nodejs, preparo al servidor para poder leer y escribir archivos

function iniciar(enrutar, manejador){// recibo la funcion que esta en enrutador.js que me pasaron en inicio.js 
	function arrancaServidor(requiere, respuesta){
		var ruta = url.parse(requiere.url).pathname; //capturar aquello que ponga en la url e introducirlo en una variable 'ruta'

		console.log("Hola consola, alguien se ha conectado");  // cada vez que alguien se conecte al servidor  web se verá este mensaje en la consola
		//ese mensaje aparecerá 2 veces en la consola, porque el navegador suele enviar 2 peticiones, una para el favicon y otra para la página web en sí.

		//var contenido = enrutar(ruta, manejador, respuesta);	//le paso a la funcion el path de la url donde estoy parado

		var index = fs.readFileSync("www/"+ruta+".html");

		var registro = fs.createWriteStream('registro.txt',{'flags':'a'});//pongo una bandera para indicar que quiero agregar (append) contenido
		registro.write(ruta + '\n');

		respuesta.writeHead(200, {"Content-Type":"text/html"});
		respuesta.write(index); // Se verá en el navegador
		respuesta.end();
	}
	servidor.createServer(arrancaServidor).listen(8080); //crea un servidor arrancaServidor y se queda escuchando peticiones en el puerto 8080
}



exports.iniciar = iniciar;