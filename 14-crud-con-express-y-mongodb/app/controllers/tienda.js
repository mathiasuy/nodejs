var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    Camisetas = mongoose.model('camisetas');//modelo
    console.log("Dir: "+ __dirname);
    
    var app = express();
    app.use(express.static(__dirname + '/public')); // para indicar cual sera la carpeta root www

module.exports = function(app){
    app.use('/', router);
};

router.get('/tienda', function(req, res, next){

    //err??
    Camisetas.find((err,camisetas)=>{
        if (err) return next(err);

        res.render('tienda', {
            titulo : 'Tienda de Camisetas',
            camisetas : camisetas
        })
    })

});