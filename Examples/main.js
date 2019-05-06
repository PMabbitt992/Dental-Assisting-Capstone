"use strict";

// global variables used to search the "images" array for a certain image 
var locationImg1 = 0;
var locationImg2 = 0;
var locationImg3 = 0;
var locationImg4 = 0;

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

    // Calls the next image(top right) to three quarters of a second after this function runs 
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
if (document.getElementById("topLeft")) {
    window.setInterval(topLeftImg, 7500);
}

//=========================================================
// Functions for the form on the CTSO page 
// custom validity 