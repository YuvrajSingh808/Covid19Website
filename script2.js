$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('confirmed', $(this).scrollTop() > 300 && $(this).scrollTop() < 720);
      $nav.toggleClass('recovered', $(this).scrollTop() >= 710);
    });
  });
  
//   window.addEventListener("scroll", changeCss, false);