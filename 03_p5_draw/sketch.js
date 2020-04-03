function setup(){
    let c = createCanvas(windowWidth, windowHeight);
    c.position(0,0);
    clear();
    console.log("Setup running");
}

function draw(){
    console.log("Draw running");
    stroke(0);
    strokeWeight(4);
    if(mouseIsPressed){
        line(mouseX,mouseY,pmouseX,pmouseY);
    }
}

