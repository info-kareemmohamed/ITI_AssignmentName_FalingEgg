
class Egg extends FallingEgg {
    static #count = 0;
    static #scor = 0;
    static #audiocount = 5;
    #top = 0;
    #id = null;
    #arrayImageSrc = [];


    constructor(eggImage) {
        super(eggImage);
        if (this.constructor == Egg)
            Egg.#count++;
    }

    startEgg() {
        //Random Image Src
        this.setImgsrc(this.#arrayImageSrc[Math.floor(Math.random() * ((this.#arrayImageSrc.length - 1) - 0 + 1)) + 0]);
        //The egg starts its descent from a different horizontal position each time
        this.getImage().style.marginLeft = (getRandomNumbers(10, window.innerWidth - this.getImage().width) - 8) + "px";

    }
    set top(top) {
        this.#top = top;
    }

    get top() {
        return this.#top;
    }
    setArrayImageSrc(arraySrc) {
        this.#arrayImageSrc = arraySrc;
    }

    static getCount() {
        return Egg.#count;
    }


    static setScor(value) {
        Egg.#scor = value > 0 ? value : 0;
    }

    static getScor() {
        return Egg.#scor;
    }
    static incrementScor() {
        Egg.#scor++;
    }

    static decrement() {
        if (Egg.#scor >= 5) Egg.#scor -= 5;
        else if (Egg.#scor > 0) Egg.#scor = 0;
    }
    // Function to move the image down
    moveDown(basketImage, speedEgg) {
        let image = this.getImage();
        let textScor = document.getElementById("Scor");
        let textNumberOfEggs = document.getElementById("Number_of_Eggs");


        this.#id = setInterval(() => {
            this.#top += 5;

            // Check if the image is still within the vertical boundaries
            if (this.#top < (window.innerHeight - (image.height - 5))) {
                image.style.top = this.#top + "px";
                this.setX(image.offsetLeft);
                this.setY(image.offsetTop);
            } else {
                // Stop the animation when the image reaches the bottom
                clearInterval(this.#id);

                this.setImgsrc("images/Uovo_sorridente.png");

                setTimeout(function () {
                    image.hidden = true;
                }, 1000);

            }
            if (checkImagesOverlap(this.getImage(), basketImage))
                this.eggOverlap(image, textScor);

            textNumberOfEggs.textContent = "Number of eggs " + Egg.getCount();


        }, speedEgg);
    }




    eggOverlap(image, textScor) {
        // Hide the image 
        image.hidden = true;
        Egg.incrementScor();
        textScor.textContent = "Scor " + Egg.getScor();

        if (Egg.getScor() >= Egg.#audiocount) {
            Egg.#audiocount += 10;
            playAudio("Audio/Congratulation.MP4").loop = false;
        }

    }





}




