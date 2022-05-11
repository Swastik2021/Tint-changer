function preload(){
//We have used a lot of assets (like images, video, sound files etc.) in our webpage
//till now. Whenever we had to use any asset eg. Image we simply used the name
//of the image along with its extension in the src of the image tag. But that is not the
//case when we want to use assets in p5.js we have to first define the asset and
//store it in a variable and then we can use that variable when we to use the
//asset(eg. image, sound, video etc)
}

//its a pre-defined function which is called only once
//createCanvas is a pre-defined function which adds canvas
function setup(){
    canvas= createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function take_snapshot(){
    save('student_name.png');
}

//- This is a predefined function of p5.js, in this function you
//need to write all the codes related to drawing things on canvas. For example code
//for drawing a circle on the canvas. This function is called continuously by p5.js,
//and therefore whatever code you write inside the draw() function is continuously
//executed until we stop the program.

 function draw(){
     image(video, 0, 0, 640, 480);
     tint(tint_color);
 }
  function filter_tint(){
      tint_color = document.getElementById("color_name").value;
  }