let destImages = document.querySelectorAll(".dest-img");
destImages.forEach(function (images) {
    images.addEventListener("mouseover", function(event) {
    event.target.style.opacity = "0.5";
    setTimeout(function() {
        event.target.style.opacity = '';
    }, 500);
}, false);
})

