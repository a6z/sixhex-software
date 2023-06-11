$(document).ready(function () {
  const question = $(".faq__item");

  function toggleList() {
    console.log("toggleList Run");
    let answer = $(this).find(".faq__content");
    answer.slideToggle();
  }

  function toggleText() {
    let icon = $(this).find(".faq__title .faq__item__icon");
    console.log("toggleText Run");
    icon.text((i, text) => (text === "add" ? "remove" : "add"));
  }

  question.on("click", toggleList);
  question.on("click", toggleText);
});
