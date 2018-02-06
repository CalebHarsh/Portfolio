// Smooth Scroll script
// Add smooth scrolling to all links
$(".nav-link").on('click', function (event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function () {

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
});


$(".carousel-item img, .banner").mouseover(e => {
  $(e.target).siblings().show()
  $(e.target).show()
})
$(".carousel-item img").mouseleave(e => {
  $(e.target).siblings().hide()
})


$(window).scroll(() => {
  var nav = $("nav")
  if (this.scrollY <= 50) {
    $(nav).attr("style", "background-color: rgba(30, 24, 77, 0)")
  } else {
    $(nav).attr("style", "background-color: rgba(30, 24, 77, 1)")
  }
})