var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var db = mongoose.connect('mongodb://localhost/gamesdb');

var Game = require('./models/gameModel');

var app = express();

var port = process.env.PORT || 3000;

var gameRouter = express.Router();

gameRouter.route('/Games')
    .get(function(req, res){
        
        var query = {};

        if(req.)

app.use('/api', gameRouter);



app.get('/', function(req, res){
    res.send('welcome to my API!!!');
});

app.listen(port, function(){
    console.log('running on PORT:' + port);
});