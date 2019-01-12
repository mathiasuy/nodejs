var servidor = require('./servidor3'); //ya que nodejs trabaja con javascript, no hace falta poner la extension
var enrutador = require('./enrutador');

servidor.iniciar(enrutador.enrutar);// le paso por parametro la funcion enrutar del otro archivo