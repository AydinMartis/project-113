function preload ()
{

}

function setup ()
{
   canvas= createCanvas(640,480);
   canvas.position(110,250);
   webcam=createCapture(VIDEO);
   webcam.hide();
   tint_color="";
   
}

function draw ()
{
    image(webcam,0,0,640,480);
    tint(tint_color);
    
}


function filter_tint()
{
   tint_color= document.getElementById("color").value;
}


function take_snapshot()
{
    save('my_selfie.png');
}