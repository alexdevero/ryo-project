$(function() {
  $(".js-aside-toggle").click(function(e) {
    var socialMediaNav = $(".js-aside");
    if (socialMediaNav.hasClass("hidden")) {
      socialMediaNav.removeClass("hidden");
      socialMediaNav.animate({
        "left": 0
      });
      $("main").animate({
        "margin-left": "100px",
        "width": $("main").width() - 100
      });
    } else {
      socialMediaNav.animate({
        "left": "-100px"
      }).delay(200).queue(function() {
        $(this).addClass("hidden");
        $(this).dequeue();
      });
      $("main").animate({
        "margin-left": 0,
        "width": "100%"
      });
    }
  });
});
