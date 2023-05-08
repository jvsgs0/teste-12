song = "";
song2 = "";

PeX = 0;
PeY = 0;
PdX = 0;
PdY = 0;

function preload()
{
    song = loadSound("music.mp3");
    song2 = loadSound("music.mp3") 
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet foi inicializado');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        PdX = results[0].pose.rightWrist.x;
        PdY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + PdX + " rightWristY = " + PdY);

        PeX = results[0].pose.leftWrist.x;
        PeY = results[0].pose.leftWrist.y;
        console.log("leftwristX = " + PeX + " leftWristY = " + PeY);
    }
}

function draw()
{
    image(video, 0, 0, 600, 500);
}