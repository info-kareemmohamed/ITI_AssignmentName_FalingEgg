
class Basket extends FallingEgg {

    constructor(image, speed = 50) {
        super(image);
        this.speed = speed;
        this.checkMoveImage();
    }


    moveImage(direction) {
        let image = this.getImage();
        const currentLeft = parseInt(image.style.left) || 0;

        if (direction === 'right' && currentLeft < (window.innerWidth - image.width - this.speed)) {
            image.style.left = (currentLeft + this.speed) + 'px';
        } else if (direction === 'left' && currentLeft > 0) {
            image.style.left = (currentLeft - this.speed) + 'px';
        }
    }


    checkMoveImage() {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
                this.moveImage('right');
            } else if (event.key === 'ArrowLeft') {
                this.moveImage('left');
            }
        });
    }


}








