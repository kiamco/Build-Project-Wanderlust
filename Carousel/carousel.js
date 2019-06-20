class Carousel {
    constructor(el) {
        this.el = el;
        this.allImg = this.el.querySelectorAll('img');
        this.currentIndex = 0;
        this.allImg[this.currentIndex].style.display = 'block';





    }

    next() {
        if (this.currentIndex < 3 || this.currentIndex > -3) {
            this.allImg.forEach(el => el.style.display = "none");
            this.currentIndex = (this.currentIndex + 1) % this.allImg.length;
            this.allImg[this.currentIndex].style.display = 'block';
        }
    }
}

let carousel = document.querySelector('.carousel');

let createCarousel = new Carousel(carousel);