
class Egg extends FallingEgg {
    static #count = 0;
    static #scor = 0;
    #top = 0;
    #id = null;
    #arrayImageSrc = [];

    constructor(eggImage) {
        super(eggImage);
        Egg.#count++;
    }

    startEgg() {
        //Random Image Src
        this.setImgsrc(this.#arrayImageSrc[Math.floor(Math.random() * ((this.#arrayImageSrc.length - 1) - 0 + 1)) + 0]);
        //The egg starts its descent from a different horizontal position each time
        this.getImage().style.marginLeft = (getRandomNumbers(10, window.innerWidth - this.getImage().width) - 8) + "px";

    }
    setTop(top) {
        this.#top = top;
    }

    getTop() {
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


    // Function to move the image down
    moveDown(basketImage, speedImage) {
        let image = this.getImage();

        this.#id = setInterval(() => {
            this.#top += 10;

            // Check if the image is still within the vertical boundaries
            if (this.#top < (window.innerHeight - (image.height - 10))) {
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
            checkImagesOverlap(this.getImage(), basketImage);

        }, speedImage);
    }



}




