var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
    cors = require('cors');

var db = mongoose.connect('mongodb://localhost/gamesdb');

var Game = require('./models/gameModel');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var gameRouter = express.Router();
 
 // Game history CRUD
gameRouter.route('/Games')
    .post(function(req, res){
            var game = new Game(req.body);
            game.save();
            console.log(game);
            res.send(game);

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

app.use(cors());

app.use('/api', gameRouter);



app.get('/', function(req, res){
    res.send('welcome to my API!!!');
});

app.listen(port, function(){
    console.log('running on PORT:' + port);
});