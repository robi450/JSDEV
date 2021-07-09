//Game.js
class Game {
    constructor(name) {
        this.name = name;
    }
    play() {
        const lostFortune = require("./lost_fortune_40.js")
        return lostFortune;
    }  
};
module.exports = Game;


