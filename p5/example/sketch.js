function setup() {
  createCanvas(640,480);
}

function draw() {
	if(mouseIsPressed){
		fill(255,0,255);
	} else {
		fill(0,153,153);
	}
	ellipse(mouseX, mouseY, 80, 80);
}

