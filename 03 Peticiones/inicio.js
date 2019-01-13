var servidor = require('./servidor3'); //ya que nodejs trabaja con javascript, no hace falta poner la extension
var enrutador = require('./enrutador');
var peticiones = require('./peticiones');

var manejador = {}; // set de funciones para las paginas
manejador['/'] = peticiones.inicio;
manejador['/pagina1'] = peticiones.pagina1;
manejador['/pagina2'] = peticiones.pagina2;


servidor.iniciar(enrutador.enrutar, manejador);// le paso por parametro la funcion enrutar del otro archivo