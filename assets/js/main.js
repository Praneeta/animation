var Animation = Animation || {};

Animation.mainFunction = (function() {
  var new_gift_class = "new-gift",

      //giftTween = TweenLite.to(".gift", 4, {top: 630, ease:Bounce.easeOut}),

      //myTween = function() {
      //  //TweenLite.from(".gift", 4, {top: 0, ease:Bounce.easeOut});
      //  giftTween.pause();
      //};
      removeNew = function(target) {
        target.removeClass(new_gift_class);
      },
      createAndDropGift = function() {
        var new_gift = $('<div class="gift"></div>');
        new_gift.addClass(new_gift_class);
        $('.page-body').append(new_gift);
        TweenLite.to("."+new_gift_class, 4, {top: 630, 
          ease:Bounce.easeOut, onComplete:function(event){
            removeNew(new_gift);
        }});
      };
  return {
    init: function() {
      //myTween();
      $(".theclick").on("click", function() {
        createAndDropGift();
      });
    }
  }
})();

$(document).ready(function() {
  Animation.mainFunction.init();
});
