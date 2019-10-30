// jQuery(document).ready(function($) {
//   var alterFakeScrollClass = function() {
//     var ww = document.body.clientWidth;
//     if(ww < 400) {
//       $('.p-main-bar__nav').fakeScroll();
//     };
//   };
// });

// This Function will always return the initial font-size of the html element 
var rem = function rem() {
  var html = document.getElementsByTagName('html')[0];

  return function () {
      return parseInt(window.getComputedStyle(html)['fontSize']);
  }
}();


// This function will convert pixel to rem
function toRem(length) {
  return (parseInt(length) / rem());
}