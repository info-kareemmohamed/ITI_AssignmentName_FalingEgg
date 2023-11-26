
class Basket extends FallingEgg {
    constructor(image) {
        super(image);
        this.checkMoveImage();
    }


    moveImage(direction) {
        let image = this.getImage();
        const currentLeft = parseInt(image.style.left) || 0;

        if (direction === 'right' && currentLeft < (window.innerWidth - image.width - 30)) {
            image.style.left = (currentLeft + 30) + 'px';
        } else if (direction === 'left' && currentLeft > 0) {
            image.style.left = (currentLeft - 30) + 'px';
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








