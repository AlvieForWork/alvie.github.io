
$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        speed: 500,
        autoplay: {
          disableOnInteraction: false,
        },
        effect: 'cube',
        loop: true,
    
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
    
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
});

$(document).ready(function () {
  lightbox.option({
    'resizeDuration': 1000,
    'wrapAround': true
  })
});

$(document).ready(function () {
  $('.dropdown').click(function (e) { 
    e.preventDefault();
    $('.dropdown-open').slideToggle();
    
  });
});