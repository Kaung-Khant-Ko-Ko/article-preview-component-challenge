var item = $("#popup-content");

item.slideUp(0);

$("#share-icon-container").on("click", function () {
  if (item.is(":hidden")) {
    item.slideDown();
    $("#share-icon-container").addClass("show-popup-bg");
    $("#share-icon").addClass("show-popup");
  } else {
    item.slideUp();
    $("#share-icon-container").removeClass("show-popup-bg");
    $("#share-icon").removeClass("show-popup");
  }
});
