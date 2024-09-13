window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

/* Untuk slide foto */

var slideIndex = 1; showSlides(slideIndex);
 function plusSlides(n) { 
 showSlides(slideIndex += n); 
 }
 
  function currentSlide(n) { 
  showSlides(slideIndex = n);
   }
   
    function showSlides(n) {
     var i; var slides = document.getElementsByClassName("mySlides"); if (n == undefined) { n = ++slideIndex } if (n > slides.length) { slideIndex = 1 
     } 
if (n < 1) { slideIndex = slides.length } for (i = 0; i < slides.length; i++) { 
slides[i].style.display = "none"; 
} 
slides[slideIndex - 1].style.display = "block"; setTimeout(showSlides, 2500) 
}
