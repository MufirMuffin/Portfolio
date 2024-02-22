$(document).ready(function () {
   // Smooth scrolling for all links
   $("a").on('click', function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
         // Prevent default anchor click behavior
         event.preventDefault();
         // Store hash
         var hash = this.hash;
         // Using jQuery's animate() method to add smooth page scroll
         $('html, body').animate({
            scrollTop: $(hash).offset().top
         }, 800, function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
         });
      } // End if
   });

   // Smooth scrolling specifically for the "Home" link
   $(".navbar-nav .nav-item.active a, .navbar-brand").on('click', function (event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
         // Prevent default anchor click behavior
         event.preventDefault();
         // Store hash
         var hash = this.hash;
         // Using jQuery's animate() method to add smooth page scroll
         $('html, body').animate({
            scrollTop: $(hash).offset().top
         }, 800, function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
         });
      } // End if
   });
});
window.onscroll = function () {
   stickyNavbar();
};

var header = document.querySelector(".header_section");
var sticky = header.offsetTop;

function stickyNavbar() {
   if (window.pageYOffset > sticky) {
      header.classList.add("fixed-top");
      header.classList.remove("shrink");
   } else {
      header.classList.remove("fixed-top");
      header.classList.add("shrink");
   }
}