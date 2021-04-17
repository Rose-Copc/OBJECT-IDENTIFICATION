function preload() {
    img = loadImage('dog_cat.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 320);
    FileList("#FF0000");
    Text("Dog", 45, 75);
    noFill();
    stroke("#FF0000")
    rec(30, 60, 450, 350 );
}

