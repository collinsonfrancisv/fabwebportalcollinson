var callback = function(){
  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("js");
  svg4everybody();
  
  var rem = function rem()  {
    var html = document.getElementsByTagName('html')[0];
  
    return function () {
        return parseInt(window.getComputedStyle(html)['fontSize']);
    }
  }();

  
  var $overlay = $('#loyalty-overlay');
  var toggleOverlay = function toggleOverlay() {    
    $overlay.fadeToggle(); 
  }

  $('.p-rewards-points__drop-down').click(function() {

    $(this).toggleClass('overlay-active');
    

    

    var loyaltyMenuToggle = function loyaltyMenuToggle()  {
      $('.p-loyalty-nav-mobile').slideToggle({
        duration:400
        ,easing:"swing"
        ,specialEasing:{top:'swing',left:'linear'}
        ,complete:function(){ }
        ,start:function(a){ 
          toggleOverlay();
        }
        ,done:function(a){  }
        ,fail:function(error){  }
        ,always:function(a){}
       });
    }();
    
  });



  // iOS switch button toggle
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

  $(".o-btn-prev").click(function () {
    var closestXGrid = $(this).parent().next(".horizontal-scroll");
    var gridItemWidth = $(this).parent().next(".horizontal-scroll").children(".l-card-grid__item").outerWidth(true);
    var leftPos = closestXGrid.scrollLeft();
    closestXGrid.animate({
      scrollLeft: leftPos - gridItemWidth
    }, 100);
  });
  
  $(".o-btn-next").click(function () {
    var closestXGrid = $(this).parent().next(".horizontal-scroll");
    var gridItemWidth = $(this).parent().next(".horizontal-scroll").children(".l-card-grid__item").outerWidth(true);
    var leftPos = closestXGrid.scrollLeft();
    closestXGrid.animate({
      scrollLeft: leftPos + gridItemWidth
    }, 100);
  });
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}    