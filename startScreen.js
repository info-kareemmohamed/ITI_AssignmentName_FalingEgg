class StartScreen {
    static backgroundSoundAudio = null;
    #Levels = {
        loopSpeed: 2400,
        eggSpeed: 20,
        toString() { return "LoopSpeed: " + this.loopSpeed + "  EggSpeed: " + this.eggSpeed }
    };

    constructor() {


    }

    set levelOfGame(level) {
        if (level == "Easy") {
            this.#Levels.loopSpeed = 2400;
            this.#Levels.eggSpeed = 20;
        } else if (level == "Medium") {
            this.#Levels.loopSpeed = 1500;
            this.#Levels.eggSpeed = 10;
        } else {
            this.#Levels.loopSpeed = 1000;
            this.#Levels.eggSpeed = 7;
        }

    }

    get levelOfGame() {
        return this.#Levels;
    }


    startScreen() {

        let mydiv = document.getElementsByClassName("container")[0];
        let username = mydiv.querySelector("input[type=text]");

        mydiv.querySelector(" input[type=submit]").onclick = (event) => {
            event.preventDefault();
            let checkedRadio = document.querySelector('input[name="level"]:checked');

            if (checkText(username.value)) {
                displayErrorMessage(usernameError, "Enter name", 2000);

            } else {
                mydiv.style.display = "none";
                StartScreen.backgroundSoundAudio = playAudio("Audio/BackgroundSound.wav");
                this.levelOfGame = checkedRadio.value;
                new FallingEgg().startGame(this.levelOfGame.eggSpeed, this.levelOfGame.loopSpeed);
                myusername.textContent = "HI " + username.value.toUpperCase();
            }
        }

    }


}