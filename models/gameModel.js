var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var gameModel = new Schema({
    gameNumber: {type: Number},
    playerOne: {type: String},
    playerTwo: {type: String},
    playerOneScore: {type: Number},
    playerOneThrows: {type: Array},
    playerTwoScore: {type: Number},
    playerTwoThrows: {type: Array},
    gameType: {type: String},
    gameWinner: {type: String},
    gameLoser: {type: String}
    });

module.exports = mongoose.model('Game', gameModel);