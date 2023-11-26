class FallingEgg {
    #X = 0;
    #Y = 0;
    #imgsrc = "";
    #image = null;


    constructor(image) {
        this.#image = image;
    }






    startGame() {
        let b = new Basket(document.getElementById("imagess"));
        let egg;

        document.addEventListener('DOMContentLoaded', function () {



            setInterval(function () {

                for (let i = 0; i < Math.floor(Math.random() * (3 - 1 + 1)) + 1; i++) {
                    InitializeEggObject(createImage());
                }


            }, 1000);

        });

        function InitializeEggObject(myImage1) {

            egg = new Egg(myImage1);
            egg.setArrayImageSrc(["images/egg1.png", "images/egg2.png", "images/egg3.png", "images/egg4.png"]);
            egg.startEgg();
            egg.moveDown(b.getImage(), 15);

        }
        function createImage() {
            let myImage = document.createElement('img');
            myImage.width = 100;
            myImage.height = 100;
            myImage.style.position = "absolute";
            document.body.appendChild(myImage);
            return myImage;
        }
    }




    // Getter for X
    getX() {
        return this.#X;
    }

    // Setter for X
    setX(value) {
        this.#X = value;
    }

    // Getter for Y
    getY() {
        return this.#Y;
    }

    // Setter for Y
    setY(value) {
        this.#Y = value;
    }

    // Getter for imgsrc
    getImgsrc() {
        return this.#imgsrc;
    }

    // Setter for imgsrc
    setImgsrc(value) {
        this.#imgsrc = value;
        if (this.#image) {
            this.#image.src = value; // Set the src property directly
        }

    }

    // Getter for image
    getImage() {
        return this.#image;
    }

    // Setter for image
    setImage(value) {
        this.#image = value;
    }

}

