function preload () {

}

function setup () {
    var canvas = createCanvas(300,300)
    canvas.position(540,200)
  video = createCapture(VIDEO)
    video.hide()
    
}

function draw () {
image(video,50,50,200,200)
fill("yellow")
stroke("green")
circle(30,30,40)
circle(270,30,40)
circle(30,270,40)
circle(270,270,40)
fill("green")
stroke("yellow")
rect(50,25,200,10)
rect(50,265,200,10)
rect(25,50,10,200)
rect(265,50,10,200)
}

function takesnapshot () {
    save("identified.png")
}