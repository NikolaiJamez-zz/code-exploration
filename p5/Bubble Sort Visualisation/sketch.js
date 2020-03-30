const WIDTH = 500;
const HEIGHT = 500;
const TIMESTEP = 5;

let arr;
let outerLoop;
let innerLoop;
let comparisons;
let p;

function setup() {
	createCanvas(WIDTH, HEIGHT);
	outerLoop = 0;
	innerLoop = 0;
	comparisons = 0;
	p = createP(comparisons);
	arr = [];
	for (let i = 0; i < WIDTH; i++) {
		arr[i] = i;
	}
	shuffle(arr, true);
}

function step() {
	if (arr[innerLoop] > arr[innerLoop + 1]) {
		let temp = arr[innerLoop];
		arr[innerLoop] = arr[innerLoop + 1];
		arr[innerLoop + 1] = temp;
	}
	comparisons++;
}

function drawArr() {
	for (let l = 0; l < WIDTH; l++) {
		stroke(255);
		if (l == innerLoop) {
			stroke(255, 0, 0);
		}
		if (l > WIDTH - outerLoop - 1) {
			stroke(0, 255, 0);
		}
		line(l, HEIGHT, l, HEIGHT - arr[l]);
	}
}

function draw() {
	background(0);
	drawArr();
	if (outerLoop < WIDTH) {
		for (let i = 0; i < TIMESTEP; i++) {
			step();
			p.html(comparisons);
			innerLoop++;
			if (innerLoop >= WIDTH - outerLoop - 1) {
				innerLoop = 0;
				outerLoop++;
			}
		}
	} else {
		noLoop();
		console.log("Finished");
	}
}