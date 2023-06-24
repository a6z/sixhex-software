$("window").ready(function () {
  // back to top
  $("a.backToTop").click(function (e) {
    e.preventDefault();
    $("html").animate({ scrollTop: 0 }, 500);
  });
  // scroll to AI tools
  $(".scrollToAI").click((e) => {
    e.preventDefault();
    const sectionAIOffset = $('#aiTools').offset().top;
    $("html").animate({ scrollTop: `${sectionAIOffset}` }, 500);
  });
});
