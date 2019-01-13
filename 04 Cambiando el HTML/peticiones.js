function inicio(){
	console.log("Has entrado a la página de inicio");

	/*	ESTO ES UN CÓDIGO BLOQUEANTE	*/
	var ahora = new Date().getTime(); //recibo el tiempo ahora en milisengundos
	while (new Date().getTime() < ahora + 5000);//paralizo el programa por 5 segundos

	return "Inicio";
}

function pagina1(){
	console.log("Has entrado a la página 1");
	return "Página 1";
}

function pagina2(){
	console.log("Has entrado a la página 2");
	return "Página 2";
}

function favicon(){
	console.log("Se ha pedido el favicon");
	return "";
}

exports.inicio = inicio;
exports.pagina1 = pagina1;
exports.pagina2 = pagina2;
exports.favicon = favicon;

