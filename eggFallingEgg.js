class FallingEgg {
    #X = 0;
    #Y = 0;
    #imgsrc = "";
    #image = null;
    #id=null;
    static GameOver=false;

    constructor(image) {
        this.#image = image;
    }






    startGame(eggSpeed = 20, loopSpeed = 2400) {
        let b = new Basket(document.getElementById("imagess"));
        let egg;
        let bomb


             
      this.#id=setInterval( ()=> {
            console.log(Bomb.haretCount)
            if(Bomb.haretCount<2){
            for (let i = 0; i < Math.floor(Math.random() * (4 - 1 + 1)) + 1; i++) {

                egg = new Egg(createImage());
                InitializeEggObject(egg);


            }
            bomb = new Bomb(createImage());
            InitializeBombObject(bomb);

        }else{
            clearInterval(this.#id);
            FallingEgg.GameOver=true;
            playAudio("Audio/end.MP4").loop=false;
        }
        }, loopSpeed);



        function InitializeEggObject(imageMove) {
            imageMove.setArrayImageSrc(["images/egg1.png", "images/egg2.png", "images/egg3.png", "images/egg4.png"]);
            imageMove.startEgg();
            imageMove.moveDown(b.getImage(), eggSpeed);

        }
        function InitializeBombObject(imageMove) {
            imageMove.startEgg();
            imageMove.moveDown(b.getImage(), eggSpeed);

        }
        function createImage() {
            let myImage = document.createElement('img');
            myImage.width = 100;
            myImage.height = 100;
            myImage.style.position = "absolute";
            myImage.style.top = "85%";
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

