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
  images.addEventListener("click", function(event) {
    event.target.style.opacity = "0.5";
  
  images.addEventListener("click", function(event) {
    event.target.style.opacity = "";
  })
  })
})

