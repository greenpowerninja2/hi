song="";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreRightWrist = 0;
status = 0;

function preload() {
    song1=loadSound("song1.mp3");
    song2=loadSound("song2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('pose net is initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +"left wrist y = " + leftWristY);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +"right wrist y = " + rightWristY);
    }
}

function draw() {
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("#8B0000");

    circle(rightWristX,rightWristY,20);


    if(rightWristY >0 && rightWristY <=500){
        song1.play();
        document.getElementById("song").innerHTML = "Increase Volume: Metal Pipe";
    }

    else if(leftWristY >0 && leftWristY <=500){
        song2.play();
        document.getElementById("song").innerHTML = "Increase Volume: :)";
    }
}


function play(){
    song1.play();
song2.play();
}