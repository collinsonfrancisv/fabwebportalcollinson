svg4everybody();
document.querySelector('.l-main-content').fakeScroll();


// This Function will always return the initial font-size of the html element 
var rem = function rem() {
  var html = document.getElementsByTagName('html')[0];

  return function () {
      return parseInt(window.getComputedStyle(html)['fontSize']);
  }
}();



jQuery(document).ready(function($) {
  var fakeScrollClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 400 ) {
      $('.is-fake-scroll').fakeScroll();
    } else if (ww >= 401) {
      $('.is-fake-scroll').removeClass('is-fake-scroll');
    };
  };
  $(window).resize(function(){
    fakeScrollClass();
  });
  fakeScrollClass();
});

jQuery(document).ready(function($) {
  $(".c-toggle__checkbox").click(function(){
    var $toggleParent = $(this).parent();

    if($(this).is(":checked")){
      $toggleParent.removeClass("is-not-toggled");
      $toggleParent.addClass("is-toggled");

      if ($toggleParent.hasClass("is-toggled")) {
        $toggleParent.find(".c-toggle__icon").css("fill", "#92E842");
      }
    }
    
    else if($(this).is(":not(:checked)")){
      $toggleParent.removeClass("is-toggled");
      $toggleParent.addClass("is-not-toggled");

      if ($toggleParent.hasClass("is-not-toggled")) {
        $toggleParent.find(".c-toggle__icon").css("fill", "#9FA9B8");
      }
    }
  });
});
