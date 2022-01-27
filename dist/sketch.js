let angleSlider;
let speedSlider;
let distanceSlider;

// will be replaced when module is loaded
window.drawTesseract = () => { };

let inconsolata;

function preload() {
    inconsolata = loadFont('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/webfonts/fa-regular-400.ttf');
}

function setup() {
    // Load the module when p5 initialized
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', 'bootstrap.js');
    document.body.appendChild(script);

    createCanvas(800, 600, WEBGL);

    angleSlider = createSlider(100, 300, 200);
    angleSlider.position(100, 10);
    angleSlider.style('width', '80px');

    speedSlider = createSlider(300, 500, 400);
    speedSlider.position(100, 30);
    speedSlider.style('width', '80px');

    distanceSlider = createSlider(150, 300, 200);
    distanceSlider.position(100, 50);
    distanceSlider.style('width', '80px');

    textFont(inconsolata);
    textSize(10);
}

function draw() {
    let angle = angleSlider.value() / 100;
    let distance = distanceSlider.value() / 100;
    let speed = speedSlider.value() / 100 / 100;

    stroke("rgba(255, 255, 255, 0.5)");
    strokeWeight(20);
    background(0);
    noFill();

    fill(255);
    text('Angle', -width / 2 + 50, -height / 2 + 15);
    text('Speed', -width / 2 + 50, -height / 2 + 35);
    text('Zoom', -width / 2 + 50, -height / 2 + 55);

    push();
    rotateX(-PI / angle);
    window.drawTesseract(distance, speed);
    pop();
}
