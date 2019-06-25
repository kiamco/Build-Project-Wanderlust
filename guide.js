let registerButton = document.querySelector(".registerbtn");
registerButton.style.cursor = "pointer";

registerButton.addEventListener("mouseover", function( event ) {   
    event.target.style.background = "#659DBD";
  
    setTimeout(function() {
      event.target.style.background = "";
    }, 800);
  }, false);

let guideImages = document.querySelectorAll(".guide-img");
guideImages.forEach(function (images) {
    images.addEventListener("mouseover", function(event) {
    event.target.style.opacity = "0.5";

    setTimeout(function() {
        event.target.style.opacity = '';
    }, 500);
    }, false);
})  

let guideText = document.querySelectorAll(".guide-img");
guideText[0].addEventListener("mouseover", function(event) {
    guideText[0].textContent = "Artsy Fun";
});

