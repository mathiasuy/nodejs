function inicio(respuesta){
	console.log("Has entrado a la página de inicio");

	/*	ESTO ES UN CÓDIGO BLOQUEANTE	*/
	/*
	var ahora = new Date().getTime(); //recibo el tiempo ahora en milisengundos
	while (new Date().getTime() < ahora + 5000);//paralizo el programa por 5 segundos
	*/
	/*
		Como se comparte un mismo hilo, si varios usuarios ejecutan funciones y una de ellas demora, las peticiones siguentes no se podrán atender hasta que la demorada termine.
	*/
	/* FIN Código bloqueante */

	respuesta.writeHead(200, {"Content-Type":"text/html"});
	respuesta.write("Esta es la página de inicio");
	respuesta.end();

	return "Inicio";
}

function pagina1(respuesta){
	console.log("Has entrado a la página 1");
	respuesta.writeHead(200, {"Content-Type":"text/html"});
	respuesta.write("Esta es la página 1");
	respuesta.end();	
	return "Página 1";
}

function pagina2(respuesta){
	console.log("Has entrado a la página 2");
	respuesta.writeHead(200, {"Content-Type":"text/html"});
	respuesta.write("Esta es la página 2");
	respuesta.end();		
	return "Página 2";
}

function favicon(respuesta){
	console.log("Se ha pedido el favicon");
	respuesta.writeHead(200, {"Content-Type":"text/html"});
	respuesta.write("");
	respuesta.end();		
	return "";
}

exports.inicio = inicio;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
exports.favicon = favicon;

