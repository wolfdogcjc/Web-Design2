document.addEventListener("DOMContentLoaded", function() {
    var scrollToTopButton = document.querySelector(".scroll-to-top");
  
    // Show the button when scrolling down
    window.addEventListener("scroll", function() {
      if (window.scrollY > 200) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    });
  
    // Smooth scroll to top when the button is clicked
    scrollToTopButton.addEventListener("click", function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  