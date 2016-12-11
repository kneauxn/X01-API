var express = require('express');

var app = express();

var port = process.env.PORT || 3000;

var gameRouter = express.Router();

gameRouter.route('/Games')
    .get(function(req, res){
        var responseJson = {hello: "This is my API!!!"};

        res.json(responseJson);
    });

app.use('/api', gameRouter);



app.get('/', function(req, res){
    res.send('welcome to my API!!!');
});

app.listen(port, function(){
    console.log('running on PORT:' + port);
});