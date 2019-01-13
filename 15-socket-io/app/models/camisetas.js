var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//Mapeo la base de datos
var Camisetas = new Schema({
    color: String,
    precio: String,
    descripcion: String,
    imagen: String
},{collection: 'camisetas'})

//defino el modelo sobre el que voy a trabajar
mongoose.model('camisetas', Camisetas);