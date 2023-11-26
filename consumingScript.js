
playAudio("BackgroundSound.wav");

document.getElementById("username").textContent = "HI " + Question_in_Prompt("Enter your name").toUpperCase();
new FallingEgg().startGame();

