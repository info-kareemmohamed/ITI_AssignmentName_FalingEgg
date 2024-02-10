


// Function to check if the two images overlap
function checkImagesOverlap(image1, image2, imageType) {
    // Calculate the absolute horizontal distance between the centers of the two images
    let horizontalDistance = Math.abs(image1.offsetLeft + image1.width / 2 - (image2.offsetLeft + image2.width / 2));
    // Calculate the absolute vertical distance between the centers of the two images
    let verticalDistance = Math.abs(image1.offsetTop + image1.height / 2 - (image2.offsetTop + image2.height / 2));

    // Check if the images overlap within a certain threshold (e.g., 50 pixels) in both directions
    if (horizontalDistance <= 70 && verticalDistance <= 50) {
        return true;
    }
    return false;
}



function getRandomNumbers(min, max) {
    // Using an infinite loop to generate random numbers until a condition is met
    while (true) {
        // Generate a random number within the specified range
        let number = Math.floor(Math.random() * (max - min + 1)) + min;

        // Check if the number is divisible by 10
        if (number % 10 == 0)
            return number;
    }
}



function playAudio(nameAudio) {
    let audio = new Audio(nameAudio);
    audio.loop = true;
    audio.play();
    return audio;
}


function getUserInput(question) {
    // Initialize the user input variable
    let userInput = "";

    // Continue prompting until a non-numeric input is received
    do {
        userInput = prompt(question);
    } while (!isNaN(userInput)); // Check if the input is numeric

    // Return the valid non-numeric user input
    return userInput;
}


function displayErrorMessage(errorObject, text, time = 2000) {
    // Show the error message
    errorObject.style.display = "block";
    // Set the error message text
    errorObject.textContent = text;
    // Hide the error message after a specified time
    setTimeout(() => {
        errorObject.style.display = "none";
    }, time);
}



function checkText(text) {
    return text == "" || !isNaN(text);
}