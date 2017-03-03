var express = require('express');
var cors = require('cors');


var Game = require('./models/gameModel');

var routes = function(){
var gameRouter = express.Router();
 
 // Game history CRUD
gameRouter.route('/Games')
    .post(function(req, res){
            var game = new Game(req.body);
            game.save();
            console.log(game);
            res.status(201).send(game);

        })
    .get(function(req, res){
        Game.find(function(err, games){
            if(err){
                res.status(500).send(err);
            } else {
                res.json(games);
            }
        });

});

app.use('/api', gameRouter);
}

module.exports = routes;