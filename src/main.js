// PHASERE & PIXI REQUIRE
let PIXI = require( 'phaser/build/custom/pixi' ),
    p2 = require( 'phaser/build/custom/p2' ),
    Phaser = require( 'phaser/build/custom/phaser-split' );
// GAME OBJECT
let game = new Phaser.Game(
	800,
	600,
	Phaser.AUTO,
	'game'
);
let boot = require('game-states/boot'),
	mainmenu = require('game-states/mainmenu');

// Game States
game.state.add('Boot', boot.BootGameState);
game.state.add('MainMenu', mainmenu.MainMenuGameState);
game.state.start('Boot');
