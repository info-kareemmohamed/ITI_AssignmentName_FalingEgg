class Bomb extends Egg {
    static #haretCount = -1;

    constructor(eggImage) {
        super(eggImage);

    }


    incrementHaretCount() {
        if (Bomb.#haretCount < 2)
            Bomb.#haretCount++;
    }
    decrementHaretCount() {
        if (Bomb.#haretCount > 0)
            Bomb.#haretCount--;
    }

   static get haretCount() {
        return Bomb.#haretCount;
    }
    // override
    startEgg() {
        //Random Image Src
        this.setImgsrc("images/bomb.png");
        //The egg starts its descent from a different horizontal position each time
        this.getImage().style.marginLeft = (getRandomNumbers(10, window.innerWidth - this.getImage().width) - 8) + "px";

    }

    // override
    moveDown(basketImage, speedBomb) {
        let image = this.getImage();
        let textScor = document.getElementById("Scor");
        let myHaretImages = document.getElementsByClassName("haret-container")[0].getElementsByTagName("img");


        this.id = setInterval(() => {
            this.top += 5;

            // Check if the image is still within the vertical boundaries
            if (this.top < (window.innerHeight - (image.height - 5))) {
                image.style.top = this.top + "px";
                this.setX(image.offsetLeft);
                this.setY(image.offsetTop);
            } else {
                this.imageClearInterval(image);

            }
            if (checkImagesOverlap(image, basketImage)) {
                this.imageClearInterval(image);
                this.bombOverlap(basketImage, myHaretImages);
                Egg.decrement();
                textScor.textContent = "Scor " + Egg.getScor();

            }

        }, speedBomb);
    }


    imageClearInterval(image) {
        // Stop the animation when the image reaches the bottom
        clearInterval(this.id);

        setTimeout(function () {
            image.hidden = true;
        }, 1000);


    }

    haretCountImages(myHaretImages) {
        this.incrementHaretCount();
        for (let i = 0; i <= Bomb.#haretCount; i++) {
            myHaretImages[i].hidden = true;
        }
        playAudio("Audio/decrementHaret.MP4").loop = false;

    }

    bombOverlap(basketImage, myHaretImages) {
        this.setImgsrc("images/bombt.png");
        this.haretCountImages(myHaretImages);
        let idInterval = setInterval(function () {

            basketImage.hidden = !basketImage.hidden;

        }, 100);


        setTimeout(function () {

            clearInterval(idInterval);

        }, 1000);
    }

}