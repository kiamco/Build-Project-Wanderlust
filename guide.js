let registerButton = document.querySelector(".registerbtn");
registerButton.style.cursor = "pointer";

registerButton.addEventListener("mouseover", function( event ) {   
    event.target.style.background = "#659DBD";
  
    setTimeout(function() {
      event.target.style.background = "";
    }, 800);
  }, false);