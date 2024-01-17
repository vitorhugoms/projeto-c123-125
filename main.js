let noseY = 0;
let noseX = 0;
let clownNose;
let valor = 800;
function preload() {
//    clownNose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
    clownNose = loadImage('https://i.postimg.cc/4ytD7mR1/mascara-homem-de-ferro-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(valor, valor);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(valor, valor);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet foi inicializado');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 110;
        noseY = results[0].pose.nose.y - 20;
    }
}vi
function draw() {
    image(video, 0, 100, valor, valor);
    image(clownNose, noseX, noseY, 200, 250);
}

function takeSnapshot() {
    save('myFilterImage.png');
}