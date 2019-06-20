class Carousel {
    constructor(el) {
        this.el = el;
        this.allImg = this.el.querySelectorAll('img');
        this.currentIndex = 0;
        this.allImg[this.currentIndex].style.display = 'block';
    }

}

let carousel = document.querySelector('.carousel');

let createCarousel = new Carousel(carousel);