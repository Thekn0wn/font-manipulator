var leftHand = "";
var rightHand = "";
var difference = "";

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Model has been loaded");
}

function draw() {
    image(video, 0, 0, 600, 500);

    background('grey');
    textSize(difference);
    fill('#FF0000');
    text('/dev/unknown', 100, 300);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.x;
        difference = Math.floor(leftWrist - rightWrist);
    }
}

