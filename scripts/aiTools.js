$(document).ready(function () {
  const filterBtn = $(".aiTools__filterGroup>button");

  // 打開 card list
  filterBtn.on("click", function (e) {
    const filterCard = $(this).find(".filter-card");
    const isOpen = filterCard.hasClass("hidden");
    filterCard.toggleClass("hidden", !isOpen);
    // console.log(e.target, "open", isOpen);
    e.stopPropagation();
  });

  // 點擊 card list 阻止關閉
  $(".filter-card").on("click", function (e) {
    e.stopPropagation();
  });

  $(".filter-filter__list .filter-list__option").on("click", function (e) {
    e.stopPropagation();

    const $clickedOption = $(this);
    const $filterList = $clickedOption.closest("ul.filter-list__container");
    const $options = $filterList.find("li.filter-list__option");

    // 移除所有選項的選中狀態
    $options.removeClass("selected");
    $options.find("span.material-icons").text("");

    // 將點擊的選項設置為選中狀態
    $clickedOption.addClass("selected");
    $clickedOption.find("span.material-icons").text("check");

    // 點擊 card list 外關閉
    $(document).on("click", function () {
      $(".filter-card").addClass("hidden");
    });
  });
});
