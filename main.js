Canvas = document.getElementById('MyCanvas');
ctx = canvas.getContext("2d");

funtion add()
{
    backgroundimg_imgTag = new Image ();
    backgroundimg_imgTag.onload = uploadbackground;
    backgroundimg_imgTag.src = car1.Image;
    
    car1_imageTag = new image ();
    car1_imageTag.onload = uploadcar1;
    car1_imageTag.src = car1_image;

    backgroundimg_imgTag = new Image ();
    backgroundimg_imgTag.onload = uploadbackground;
    backgroundimg_imgTag.src = car2.Image;
    
    car2_imageTag = new image ();
    car2_imageTag.onload = uploadcar1;
    car2_imageTag.src = car2_image;
}

function uploadbackground()
{
    ctx.drawImage(car1_imageTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1()
{
    ctx.drawImage(car1_imageTag, car1_x, car1_y, car1_width, car1_height );
}

window.addEventlistener ("keydown", my_keydown);

function my_keydown()
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38');
    {
        car1_up();
        console.log("up arrow key");
    }
    if(keyPressed == '40');
    {
        car1_down();
        console.log("down arrow key");
    }
    if(keyPressed == '37');
    {
        car1_left();
        console.log("left arrow key")
    }
    if(keyPressed == '39')
    {
        car1_right();
        console.log("right arrow key")
    }
    if(keyPressed == '87')
    {
        car2_up();
        console.log("key w")
    }
    if(keyPressed == '83')
    {
        car2_down();
        console.log("key s")
    }
    if(keyPressed == '65')
    {
        car2_left();
        console.log("key a")
    }
    if(keyPressed == '68')
    {
        car2_right();
        console.log("key d")
    }
}