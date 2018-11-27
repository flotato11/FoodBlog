$("#cookies-link").click(function() {
  $(".recipes-container").slideUp(350, function() {
    $("#recipe-1").slideDown(350);
    backarrow();
  });
})

$("#cheesecake-link").click(function() {
  $(".recipes-container").slideUp(350, function() {
    $("#recipe-2").slideDown(350);
    backarrow();
  });
})

$(".back-arrow").click(function() {
  $(".back-arrow").css("opacity", "0");
  $(".back-arrow").css("pointer-events", "none");
  $('html, body').animate({scrollTop: 0}, 500);
  $(".recipes-container").slideDown(350, function() {
    $("#recipe-1").slideUp(350);
    $("#recipe-2").slideUp(350);
  });
})

function backarrow() {
  $(".back-arrow").css("opacity", "1");
  $(".back-arrow").css("pointer-events", "auto");
}
