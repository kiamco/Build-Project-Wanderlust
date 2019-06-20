class Carousel {
    constructor(el, imgArr) {
        this.el = el;
        this.imgArr = imgArr;
        this.heading = this.el.querySelectorAll('a');
        this.left = this.el.querySelector('.fa-angle-left');
        this.right = this.el.querySelector('.fa-angle-right');

        this.currentIndex = 0;
        console.log(this.currentIndex);
        this.el.style.background = `url(${this.imgArr[this.currentIndex]}) center no-repeat`;
        this.el.style.backgroundSize = "cover";

        this.left.addEventListener('click', this.next.bind(this));
        this.right.addEventListener('click', this.next.bind(this));

    }

    next() {
        if (this.currentIndex < 3 || this.currentIndex > -3) {
            this.currentIndex = (this.currentIndex + 1) % this.imgArr.length;
            this.el.style.background = `url(${this.imgArr[this.currentIndex]}) center no-repeat`;
            this.el.style.backgroundSize = "cover";

        }
    }

}

let carousel = document.querySelector('.carousel');
const arr = ["./Images/Horizontal/silas-hao-1072721-unsplash.jpg",
    "./Images/Horizontal/riccardo-chiarini-365677-unsplash.jpg",
    "./Images/Horizontal/timon-klauser-308449-unsplash.jpg",
    "./Images/Horizontal/claudio-hirschberger-1326174-unsplash.jpg"
]
let createCarousel = new Carousel(carousel, arr);