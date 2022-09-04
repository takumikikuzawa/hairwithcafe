(window.onload = function () {
  jQuery(window).scroll(function () {
    jQuery('.fadeout').each(function () {
      var winheight = jQuery(window).height();
      var posi = jQuery(this).offset().top;
      var scroll = jQuery(window).scrollTop();
      if (scroll + winheight > posi) {
        jQuery(this).addClass('fadein');
      } else {
        jQuery(this).removeClass('fadein');
      }
    });
  });
})();
