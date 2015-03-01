$(function() {
  $(".js-aside-toggle").click(function(e) {
    console.log(e);
    var socialMediaNav = $(".js-aside");
    if (socialMediaNav.hasClass("hidden")) {
      socialMediaNav.removeClass("hidden");
      socialMediaNav.animate({
        "left": 0
      });
    } else {
      socialMediaNav.animate({
        "left": "-100px"
      }).delay(200).queue(function() {
        $(this).addClass("hidden");
        $(this).dequeue();
      });
    }
  });
});
