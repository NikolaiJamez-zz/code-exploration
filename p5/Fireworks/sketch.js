// Simulation Constants
const SPAWNCHANCE = 0.01;
let GRAVITY;

// Big Fireworks Constants
const BIGSIZE = 5;
const BIGMINFUSE = 50;
const BIGMAXFUSE = 300;

// Small Fireworks Constants
const SMALLSIZE = 1;
const SMALLMINFUSE = 40;
const SMALLMAXFUSE = 200;
const MINSMALL = 10;
const MAXSMALL = 100;

//Global Variables
let fireworks;

function setup() {
	createCanvas(windowWidth, windowHeight);
	GRAVITY = createVector(0, 0.01);
	fireworks = [];
}

function mouseClicked() {
	fireworks.push(new Firework());
}

function updateFireworks() {
	if (random() < SPAWNCHANCE) {
		fireworks.push(new Firework());
	}
	for (let f = fireworks.length - 1; f >= 0; f--) {
		fireworks[f].applyForce(GRAVITY);
		fireworks[f].update();
		fireworks[f].show();
		if (fireworks[f].done) {
			if (fireworks[f].canExplode) {
				fireworks[f].explode();
			}
			fireworks.splice(f, 1);
		}
	}
}

function draw() {
	colorMode(RGB);
	background(0, 50);
	colorMode(HSB);
	updateFireworks();
}