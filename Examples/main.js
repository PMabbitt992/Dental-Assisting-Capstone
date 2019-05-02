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
    // console.log(locationImg)
}

// Changes the bottom left image in the index page 
function botLeftImg() {
    var currentImg = document.getElementById("botLeft");

    var images = ["timer_images/retainer.jpg", "timer_images/3_peopleLooking.jpg", "0048_Dental_15.jpg", "timer_images/floating_retainer.jpeg", ""];

    currentImg.src = images[locationImg2];

    locationImg2++;

    if (locationImg2 >= images.length) {
        locationImg2 = 0;
    }



}

// Changes the top right image on the index
function topRightImg() {

}

// Changes the bottom right image on the index 
function botRightImg() {

}

// Only runs the functions on the index page 
if (document.location.href === "file:///Users/cwebdale006/www/capstone/Dental-Assisting-Capstone/Examples/index.html") {
    window.setInterval(topLeftImg, 5000);
    window.setInterval(botLeftImg, 5500);
    window.setInterval(topRightImg, 7000);
    window.setInterval(botRightImg, 7500);
}