/*--- slick 套件 ---*/
$(document).ready(function () {
  if ($(window).width() < 768) {
    $(".responsiveSlick").slick({
      settings: {
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
      },

      responsive: [
        {
          breakpoint: 768,
          settings: {
            adaptiveHeight: true,
            arrows: false,
            accessibility: false,
            dots: true,
            autoplay: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  $(window).resize(function () {
    if (
      $(window).width() < 768 &&
      !$(".responsiveSlick").hasClass("slick-initialized")
    ) {
      $(".responsiveSlick").slick({
        // Slick options here
      });
    } else if (
      $(window).width() >= 768 &&
      $(".responsiveSlick").hasClass("slick-initialized")
    ) {
      $(".responsiveSlick").slick("unslick");
    }
  });
});
