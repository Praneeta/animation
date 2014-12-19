var Animation = Animation || {};

Animation.mainFunction = (function() {
  var new_gift_class = "new-gift",
      dragged_gift,
      video_links = ['w8vxuZ3bjrA', 'L0MK7qz13bU', 'YJ50YCpYkqM', 'D2va8ddcY4E'],
      gift_num = 0
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
        new_gift.addClass(new_gift_class).attr('data-video-id', video_links[gift_num]);
        gift_num++;
        $('.page-body').append(new_gift);
        TweenLite.to("."+new_gift_class, 4, {top: 630,
          ease:Bounce.easeOut, onComplete:function(event){
            removeNew(new_gift);
            dragged_gift = Draggable.create(".gift", {onDragEnd: dragEnd})
        }});
      },
      dragEnd = function(event) {
        var $gift = $(event.target),
          video_id = $gift.attr('data-video-id')
        $('.video-embed').html("<iframe width=\"294\" height=\"180\" src=\"http://www.youtube.com/embed/"+ video_id +"?autoplay=1\" frameborder=\"0\"></iframe>")
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
