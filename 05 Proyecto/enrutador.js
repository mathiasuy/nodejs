function enrutar(ruta, manejador, respuesta){
	console.log("Voy a rutear algo para " + ruta);
	if (typeof manejador[ruta] === 'function'){
		//console.log(manejador[ruta]());
		manejador[ruta](respuesta);
	}else{
		console.log("No existe una función para esa ruta");
	}
}

exports.enrutar = enrutar; //el  contenido de la función será exportado para ser accesible a otros archivos