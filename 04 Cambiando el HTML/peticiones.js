function inicio(){
	console.log("Has entrado a la página de inicio");
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

