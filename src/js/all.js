"use strict";

var callback = function callback() {
  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("js");
  svg4everybody();

  var rem = function rem() {
    var html = document.getElementsByTagName('html')[0];
    return function () {
      return parseInt(window.getComputedStyle(html)['fontSize']);
    };
  }(); // $('.p-rewards-points__drop-down').click(function() {
  //   $('.p-loyalty-nav-mobile').slideToggle( 'slow', function() {
  //   });
  // });


  $('.p-rewards-points__drop-down').click(function () {
    $(this).toggleClass('active');
    $('.p-loyalty-nav-mobile').slideToggle({
      duration: 400,
      easing: "swing",
      specialEasing: {
        top: 'swing',
        left: 'linear'
      },
      complete: function complete() {},
      start: function start(a) {},
      done: function done(a) {},
      fail: function fail(error) {},
      always: function always(a) {}
    });
  }); // iOS switch button toggle

  $(".c-toggle__checkbox").click(function () {
    var $toggleParent = $(this).parent();

    if ($(this).is(":checked")) {
      $toggleParent.removeClass("is-not-toggled");
      $toggleParent.addClass("is-toggled");

      if ($toggleParent.hasClass("is-toggled")) {
        $toggleParent.find(".c-toggle__icon").css("fill", "#92E842");
      }
    } else if ($(this).is(":not(:checked)")) {
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

if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiY2FsbGJhY2siLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsInN2ZzRldmVyeWJvZHkiLCJyZW0iLCJodG1sIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJwYXJzZUludCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCIkIiwiY2xpY2siLCJ0b2dnbGVDbGFzcyIsInNsaWRlVG9nZ2xlIiwiZHVyYXRpb24iLCJlYXNpbmciLCJzcGVjaWFsRWFzaW5nIiwidG9wIiwibGVmdCIsImNvbXBsZXRlIiwic3RhcnQiLCJhIiwiZG9uZSIsImZhaWwiLCJlcnJvciIsImFsd2F5cyIsIiR0b2dnbGVQYXJlbnQiLCJwYXJlbnQiLCJpcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJoYXNDbGFzcyIsImZpbmQiLCJjc3MiLCJjbG9zZXN0WEdyaWQiLCJuZXh0IiwiZ3JpZEl0ZW1XaWR0aCIsImNoaWxkcmVuIiwib3V0ZXJXaWR0aCIsImxlZnRQb3MiLCJzY3JvbGxMZWZ0IiwiYW5pbWF0ZSIsInJlYWR5U3RhdGUiLCJkb1Njcm9sbCIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBVTtBQUN2QkMsRUFBQUEsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxTQUF6QixDQUFtQ0MsTUFBbkMsQ0FBMEMsT0FBMUM7QUFDQUgsRUFBQUEsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxTQUF6QixDQUFtQ0UsR0FBbkMsQ0FBdUMsSUFBdkM7QUFDQUMsRUFBQUEsYUFBYTs7QUFFYixNQUFJQyxHQUFHLEdBQUcsU0FBU0EsR0FBVCxHQUFlO0FBQ3ZCLFFBQUlDLElBQUksR0FBR1AsUUFBUSxDQUFDUSxvQkFBVCxDQUE4QixNQUE5QixFQUFzQyxDQUF0QyxDQUFYO0FBRUEsV0FBTyxZQUFZO0FBQ2YsYUFBT0MsUUFB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QURILEtBQXJCLEVBRUcsR0FGSDtBQUdELEdBUEQ7QUFTQTFCLEVBQUFBLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJDLEtBQWpCLENBQXVCLFlBQVk7QUFDakMsUUFBSXVCLFlBQVksR0FBR3hCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWlCLE1BQVIsR0FBaUJRLElBQWpCLENBQXNCLG9CQUF0QixDQUFuQjtBQUNBLFFBQUlDLGFBQWEsR0FBRzFCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWlCLE1BQVIsR0FBaUJRLElBQWpCLENBQXNCLG9CQUF0QixFQUE0Q0UsUUFBNUMsQ0FBcUQsb0JBQXJELEVBQTJFQyxVQUEzRSxDQUFzRixJQUF0RixDQUFwQjtBQUNBLFFBQUlDLE9BQU8sR0FBR0wsWUFBWSxDQUFDTSxVQUFiLEVBQWQ7QUFDQU4sSUFBQUEsWUFBWSxDQUFDTyxPQUFiLENBQXFCO0FBQ25CRCxNQUFBQSxVQUFVLEVBQUVELE9BQU8sR0FBR0g7QUFESCxLQUFyQixFQUVHLEdBRkg7QUFHRCxHQVBEO0FBUUQsQ0E1RUQ7O0FBOEVBLElBQ0l0QyxRQUFRLENBQUM0QyxVQUFULEtBQXdCLFVBQXhCLElBQ0M1QyxRQUFRLENBQUM0QyxVQUFULEtBQXdCLFNBQXhCLElBQXFDLENBQUM1QyxRQUFRLENBQUNDLGVBQVQsQ0FBeUI0QyxRQUZwRSxFQUdFO0FBQ0E5QyxFQUFBQSxRQUFRO0FBQ1QsQ0FMRCxNQUtPO0FBQ0xDLEVBQUFBLFFBQVEsQ0FBQzhDLGdCQUFULENBQTBCLGtCQUExQixFQUE4Qy9DLFFBQTlDO0FBQ0QiLCJmaWxlIjoiYWxsLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGNhbGxiYWNrID0gZnVuY3Rpb24oKXtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJuby1qc1wiKTtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJqc1wiKTtcbiAgc3ZnNGV2ZXJ5Ym9keSgpO1xuICBcbiAgdmFyIHJlbSA9IGZ1bmN0aW9uIHJlbSgpIHtcbiAgICB2YXIgaHRtbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdodG1sJylbMF07XG4gIFxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShodG1sKVsnZm9udFNpemUnXSk7XG4gICAgfVxuICB9KCk7XG4gIFxuICAvLyAkKCcucC1yZXdhcmRzLXBvaW50c19fZHJvcC1kb3duJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gIC8vICAgJCgnLnAtbG95YWx0eS1uYXYtbW9iaWxlJykuc2xpZGVUb2dnbGUoICdzbG93JywgZnVuY3Rpb24oKSB7XG5cbiAgLy8gICB9KTtcbiAgLy8gfSk7XG5cbiAgJCgnLnAtcmV3YXJkcy1wb2ludHNfX2Ryb3AtZG93bicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgXG4gICAgJCgnLnAtbG95YWx0eS1uYXYtbW9iaWxlJykuc2xpZGVUb2dnbGUoe1xuICAgICAgZHVyYXRpb246NDAwXG4gICAgICAsZWFzaW5nOlwic3dpbmdcIlxuICAgICAgLHNwZWNpYWxFYXNpbmc6e3RvcDonc3dpbmcnLGxlZnQ6J2xpbmVhcid9XG4gICAgICAsY29tcGxldGU6ZnVuY3Rpb24oKXsgfVxuICAgICAgLHN0YXJ0OmZ1bmN0aW9uKGEpeyB9XG4gICAgICAsZG9uZTpmdW5jdGlvbihhKXsgIH1cbiAgICAgICxmYWlsOmZ1bmN0aW9uKGVycm9yKXsgIH1cbiAgICAgICxhbHdheXM6ZnVuY3Rpb24oYSl7ICB9XG4gICAgIH0pO1xuICBcbiAgfSk7XG5cbiAgLy8gaU9TIHN3aXRjaCBidXR0b24gdG9nZ2xlXG4gICQoXCIuYy10b2dnbGVfX2NoZWNrYm94XCIpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgdmFyICR0b2dnbGVQYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgpO1xuXG4gICAgaWYoJCh0aGlzKS5pcyhcIjpjaGVja2VkXCIpKXtcbiAgICAgICR0b2dnbGVQYXJlbnQucmVtb3ZlQ2xhc3MoXCJpcy1ub3QtdG9nZ2xlZFwiKTtcbiAgICAgICR0b2dnbGVQYXJlbnQuYWRkQ2xhc3MoXCJpcy10b2dnbGVkXCIpO1xuXG4gICAgICBpZiAoJHRvZ2dsZVBhcmVudC5oYXNDbGFzcyhcImlzLXRvZ2dsZWRcIikpIHtcbiAgICAgICAgJHRvZ2dsZVBhcmVudC5maW5kKFwiLmMtdG9nZ2xlX19pY29uXCIpLmNzcyhcImZpbGxcIiwgXCIjOTJFODQyXCIpO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBlbHNlIGlmKCQodGhpcykuaXMoXCI6bm90KDpjaGVja2VkKVwiKSl7XG4gICAgICAkdG9nZ2xlUGFyZW50LnJlbW92ZUNsYXNzKFwiaXMtdG9nZ2xlZFwiKTtcbiAgICAgICR0b2dnbGVQYXJlbnQuYWRkQ2xhc3MoXCJpcy1ub3QtdG9nZ2xlZFwiKTtcblxuICAgICAgaWYgKCR0b2dnbGVQYXJlbnQuaGFzQ2xhc3MoXCJpcy1ub3QtdG9nZ2xlZFwiKSkge1xuICAgICAgICAkdG9nZ2xlUGFyZW50LmZpbmQoXCIuYy10b2dnbGVfX2ljb25cIikuY3NzKFwiZmlsbFwiLCBcIiM5RkE5QjhcIik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAkKFwiLm8tYnRuLXByZXZcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgIHZhciBjbG9zZXN0WEdyaWQgPSAkKHRoaXMpLnBhcmVudCgpLm5leHQoXCIuaG9yaXpvbnRhbC1zY3JvbGxcIik7XG4gICAgdmFyIGdyaWRJdGVtV2lkdGggPSAkKHRoaXMpLnBhcmVudCgpLm5leHQoXCIuaG9yaXpvbnRhbC1zY3JvbGxcIikuY2hpbGRyZW4oXCIubC1jYXJkLWdyaWRfX2l0ZW1cIikub3V0ZXJXaWR0aCh0cnVlKTtcbiAgICB2YXIgbGVmdFBvcyA9IGNsb3Nlc3RYR3JpZC5zY3JvbGxMZWZ0KCk7XG4gICAgY2xvc2VzdFhHcmlkLmFuaW1hdGUoe1xuICAgICAgc2Nyb2xsTGVmdDogbGVmdFBvcyAtIGdyaWRJdGVtV2lkdGhcbiAgICB9LCAxMDApO1xuICB9KTtcbiAgXG4gICQoXCIuby1idG4tbmV4dFwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNsb3Nlc3RYR3JpZCA9ICQodGhpcykucGFyZW50KCkubmV4dChcIi5ob3Jpem9udGFsLXNjcm9sbFwiKTtcbiAgICB2YXIgZ3JpZEl0ZW1XaWR0aCA9ICQodGhpcykucGFyZW50KCkubmV4dChcIi5ob3Jpem9udGFsLXNjcm9sbFwiKS5jaGlsZHJlbihcIi5sLWNhcmQtZ3JpZF9faXRlbVwiKS5vdXRlcldpZHRoKHRydWUpO1xuICAgIHZhciBsZWZ0UG9zID0gY2xvc2VzdFhHcmlkLnNjcm9sbExlZnQoKTtcbiAgICBjbG9zZXN0WEdyaWQuYW5pbWF0ZSh7XG4gICAgICBzY3JvbGxMZWZ0OiBsZWZ0UG9zICsgZ3JpZEl0ZW1XaWR0aFxuICAgIH0sIDEwMCk7XG4gIH0pO1xufTtcblxuaWYgKFxuICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiB8fFxuICAgIChkb2N1bWVudC5yZWFkeVN0YXRlICE9PSBcImxvYWRpbmdcIiAmJiAhZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmRvU2Nyb2xsKVxuKSB7XG4gIGNhbGxiYWNrKCk7XG59IGVsc2Uge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBjYWxsYmFjayk7XG59ICAgICJdfQ==
