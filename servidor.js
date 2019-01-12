var servidor = requiere('http'); //modulo http que contiene todos los metodos para hacer funcinoar un servidor web a traves de http

function arrancaServidor(requiere, respuesta){
	console.log("Hola consola, alguien se ha conectado");  // cada vez que alguien se conecte al servidor  web se verá este mensaje en la consola
	//ese mensaje aparecerá 2 veces en la consola, porque el navegador suele enviar 2 peticiones, una para el favicon y otra para la página web en sí.
	respuesta.writeHead(200, {"Content-Type":"text/html"});
	respuesta.write("<h1>El servidor funciona correctamente</h1>"); // Se verá en el navegador
	respuesta.end();
}

servidor.createServer(arrancaServidor).listen(8888); //crea un servidor arrancaServidor y se queda escuchando peticiones en el puerto 8888
