$(function() {
  var socialMediaNav = $(".js-aside");
  socialMediaNav.css({"height": "" + $(window).height() + "px"});
  $(".js-main").css({"width": "" + $(window).width() - socialMediaNav.width() + "px"});
  $(".js-aside-toggle").click(function(e) {
    if (socialMediaNav.hasClass("hidden")) {
      $(".js-main").css({
        "width": $(".js-main").width() - socialMediaNav.width()
      });
      socialMediaNav.animate({
        "left": 0
      });
      socialMediaNav.removeClass("hidden");
    } else {
      socialMediaNav.animate({
        "left": "-100px"
      }).queue(function() {
        $(this).addClass("hidden");
        $(this).dequeue();
        $(".js-main").css({"width": "100%"});
      });
    }
  });
});
