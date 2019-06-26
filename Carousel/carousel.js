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
            // removes heading and goes next
            this.heading[this.currentIndex].classList.remove('active')
            this.currentIndex = (this.currentIndex + 1) % this.imgArr.length;

            // updates backgournd and heading
            this.el.style.background = `url(${this.imgArr[this.currentIndex]}) center no-repeat`;
            this.el.style.backgroundSize = "cover";
            this.el.style.transition = 'background 1s ease'
            this.heading[this.currentIndex].classList.toggle('active')
        }


    }

}

let carousel = document.querySelector('.carousel');

// img array of background picture
const arr = ["./Images/Horizontal/silas-hao-1072721-unsplash.jpg",
    "./Images/Horizontal/riccardo-chiarini-365677-unsplash.jpg",
    "./Images/Horizontal/timon-klauser-308449-unsplash.jpg",
    "./Images/Horizontal/claudio-hirschberger-1326174-unsplash.jpg"
]

// create new carousel
let createCarousel = new Carousel(carousel, arr);