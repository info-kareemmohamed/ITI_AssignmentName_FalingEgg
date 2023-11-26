
const SettingsEgg = {
    audiocount: 5,
    textScor: document.getElementById("Scor"),
    textNumberOfEggs: document.getElementById("Number_of_Eggs")
}



// Function to check if the two images overlap
function checkImagesOverlap(image1, image2) {
    // Calculate the absolute horizontal distance between the centers of the two images
    let horizontalDistance = Math.abs(image1.offsetLeft + image1.width / 2 - (image2.offsetLeft + image2.width / 2));

    // Calculate the absolute vertical distance between the centers of the two images
    let verticalDistance = Math.abs(image1.offsetTop + image1.height / 2 - (image2.offsetTop + image2.height / 2));


    // Check if the images overlap within a certain threshold (e.g., 50 pixels) in both directions
    if (horizontalDistance <= 50 && verticalDistance <= 50) {
        // Hide the image 
        image1.hidden = true;
        Egg.incrementScor();
        SettingsEgg.textScor.textContent = "Scor " + Egg.getScor();


        if (Egg.getScor() >= SettingsEgg.audiocount) {
            SettingsEgg.audiocount += 10;
            playAudio("Congratulation.MP4").loop = false;
        }

    }
    SettingsEgg.textNumberOfEggs.textContent = "Number of eggs " + Egg.getCount();
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






function Question_in_Prompt(question) {
    let UserName = "";
    do {
        UserName = prompt(question);


    } while (!isNaN(UserName))
    return UserName;
}


