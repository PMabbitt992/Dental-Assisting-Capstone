"use strict";

// global variables used to search the "images" array for a certain image 
var locationImg1 = 0;
var locationImg2 = 0;
var locationImg3 = 0;
var locationImg4 = 0;

function gradientShow() {
    // Shows the gradient 
    var currentDiv = document.getElementById("topLeftDiv");
    currentDiv.style.transition = "opacity, 2s";
    currentDiv.style.opacity = "1";

    // Changes the gradient covering the image before changing it
    setTimeout(gradient1(), 4000);
    setTimeout(gradient2(), 6000);
    // Changes the img
    topLeftImg();

    // Hides the gradient after new image 
    setTimeout(gradientHide1(), 8000);
    setTimeout(gradientHide2(), 10000);

    // currentDiv.style.opacity = "0";
}

function gradient1() {
    // Change the gradient to slightly cover the image 
    var currentDiv = document.getElementById("topLeftDiv");
    currentDiv.style.background = "linear-gradient(322deg, rgba(255, 255, 255, .65) 0%, rgba(125, 125, 125, .8) 50%, rgba(0, 0, 0, 1) 100%)";
}

function gradient2() {
    // Change the gradient to  cover the image 
    var currentDiv = document.getElementById("topLeftDiv");
    currentDiv.style.background = "linear-gradient(322deg, rgba(255, 255, 255, .8) 0%, rgba(125, 125, 125, .95) 20%, rgba(0, 0, 0, 1) 100%)";
}

function gradientHide1() {
    // Change the gradient to "move" off the image 
    var currentDiv = document.getElementById("topLeftDiv");
    currentDiv.style.background = "linear-gradient(322deg, rgba(255, 255, 255, .65) 0%, rgba(125, 125, 125, .8) 50%, rgba(0, 0, 0, 1) 100%)";
}

function gradientHide2() {
    var currentDiv = document.getElementById("topLeftDiv");
    currentDiv.style.background = "linear-gradient(322deg, rgba(255, 255, 255, .5) 0%, rgba(125, 125, 125, .7) 80%, rgba(0, 0, 0, .9) 100%)";
}

// Changes the top left image on the index 
function topLeftImg() {
    // Gets the image element of the top left image 
    var currentImg = document.getElementById("topLeft");

    // Array of images to cycle through 
    var images = ["timer_images/check-up.jpg", "timer_images/dental.jpg", "0049_Dental_8.jpg", "timer_images/lady_dentist.jpg", "timer_images/retainer.jpg"];

    // Changes the src attribute of the image element to a different image in the array of "images"
    currentImg.src = images[locationImg1];

    // Changes the value of the variable to go to the next item in the index 
    locationImg1++;

    // Once the images have cycles to the last one in the array, resets to the first image 
    if (locationImg1 >= images.length) {
        locationImg1 = 0;
    }

    // Calls the next image(bottom left) to change half a second after the function runs 
    window.setTimeout(botLeftImg, 500);
}





// Changes the bottom left image in the index page 
function botLeftImg() {
    var currentImg = document.getElementById("botLeft");
    var images = ["timer_images/retainer.jpg", "timer_images/3_peopleLooking.jpg", "0048_Dental_15.jpg", "timer_images/floating_retainer.jpeg", "timer_images/blue_doctor_man.jpg"];

    currentImg.src = images[locationImg2];
    locationImg2++;

    if (locationImg2 >= images.length) {
        locationImg2 = 0;
    }

    // Calls the next image(top right) to change half a second after this function runs 
    window.setTimeout(topRightImg, 750);
}

// Changes the top right image on the index
function topRightImg() {
    var currentImg = document.getElementById("topRight");
    var images = ["timer_images/lady_check-up.jpg", "timer_images/grey-haired_doctor.jpg", "CTE_53.jpg", "timer_images/blonde_doctor.jpg", "timer_images/toothbrush.jpg"];

    currentImg.src = images[locationImg3];
    locationImg3++;

    if (locationImg3 >= images.length) {
        locationImg3 = 0;
    }

    // Calls the next image(bottom right) to change half a second after this function runs 
    window.setTimeout(botRightImg, 500);
}

// Changes the bottom right image on the index 
function botRightImg() {
    var currentImg = document.getElementById("botRight");
    var images = ["timer_images/red-dentist-table.jpeg", "timer_images/2-dentist-people.jpg", "0050_Dental_5.jpg", "timer_images/dental-office.jpg", "timer_images/x-ray.jpg"];

    currentImg.src = images[locationImg4];
    locationImg4++;

    if (locationImg4 >= images.length) {
        locationImg4 = 0;
    }
}

// Only runs the functions on the index page 
if (document.location.href === "file:///Users/cwebdale006/www/capstone/Dental-Assisting-Capstone/Examples/index.html") {
    // change to 5000
    window.setInterval(gradientShow, 20000);
}