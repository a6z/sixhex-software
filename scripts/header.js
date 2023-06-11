$(document).ready(function () {
  /*--- 漢堡選單操作 ---*/
  $(".navMenu-btn").on("click", () => {
    // 顯示、隱藏選單
    $(".navMenu-collapse").toggleClass("open");

    //阻擋背後元素觸碰
    let isMenuOpen = $(".navMenu-collapse").hasClass("open");
    isMenuOpen
      ? $("html, body").addClass("stopScrolling")
      : $("html, body").removeClass("stopScrolling");

    // 改變按鈕圖示
    let mtIcon = $(".navMenu-btn>span");
    let mtIconText = mtIcon.text();
    mtIconText === "menu" ? mtIcon.text("close") : mtIcon.text("menu");
  });

  /*--- slick 套件 ---*/
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
