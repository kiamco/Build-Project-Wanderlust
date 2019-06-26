let destImages = document.querySelectorAll(".dest-img");
destImages.forEach(function (images) {
    images.addEventListener("mouseover", function(event) {
    event.target.style.opacity = "0.4";
    setTimeout(function() {
        event.target.style.opacity = '';
    }, 700);
}, false);
})

