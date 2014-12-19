var Animation = Animation || {};

Animation.mainFunction = (function() {
  var test = "hello",
  myTween = function() {
    //var myTest = $(".test-tween");
    //TweenLite.to(".test-tween", 5, {width:500});
    TweenLite.from(".gift", 4, {top: 0, ease:Bounce.easeOut});
  };
  return {
    init: function() {
      myTween();
    }
  }
})();

$(document).ready(function() {
  Animation.mainFunction.init();
});
