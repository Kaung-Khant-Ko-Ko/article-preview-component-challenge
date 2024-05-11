var item = $("#popup-content");

item.slideUp(0);

$("#share-icon-container").on("click", function () {
  if ($("body").width() > 900) {
    if (item.is(":hidden")) {
      item.css("right", "");
      item.slideDown();
      $("#share-icon-container").addClass("show-popup-bg");
      $("#share-icon").addClass("show-popup");
    } else {
      item.slideUp();
      $("#share-icon-container").removeClass("show-popup-bg");
      $("#share-icon").removeClass("show-popup");
    }
  } else {
    if (item.is(":hidden")) {
      var position = $("#author-container").width() / 2;
      item.animate({ width: "toggle", right: position });
      $("#share-icon-container").addClass("show-popup-bg");
      $("#share-icon").addClass("show-popup");
      $("#author-container").addClass("show-popup-author");
      $("#author-content").addClass("hide-author");
    } else {
      item.animate({ width: "toggle", right: position });
      $("#share-icon-container").removeClass("show-popup-bg");
      $("#share-icon").removeClass("show-popup");
      $("#author-container").removeClass("show-popup-author");
      $("#author-content").removeClass("hide-author");
    }
  }
});
