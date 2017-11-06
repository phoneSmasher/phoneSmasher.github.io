function setup() {
  createCanvas(640,480);
}

x = 70
y = 70

one = 0
two = 153
three = 153


function draw() {
	if(mouseIsPressed){
		if (mouseButton == LEFT){
			++x;
			++y;
			
			if ((Math.floor((Math.random() * 6) + 1)) == 3){
				fill(Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1))
			}	
		}
		if (mouseButton == RIGHT){
			--x;
			--y;
			
			if ((Math.floor((Math.random() * 6) + 1)) == 3){
				fill(Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1),Math.floor((Math.random() * 255) + 1))
			}
			
		}
		if (mouseButton == CENTER){
		
		}
	}
	triangle(mouseX-x, mouseY-y, mouseX+x, mouseY+y, mouseX+x, mouseY-y);
	
}

