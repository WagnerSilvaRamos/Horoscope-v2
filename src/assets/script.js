$(function($) {
  $(".back-to-top").addClass("hidden-top");
  $(window).scroll(function() {
    if ($(this).scrollTop() === 0) {
      $(".back-to-top").addClass("hidden-top");
    } else {
      $(".back-to-top").removeClass("hidden-top");
    }
  });

  $(".back-to-top").click(function() {
    $("body,html").animate({ scrollTop: 0 }, 1200);
    return false;
  });
});

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
