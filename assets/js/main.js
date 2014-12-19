var Animation = Animation || {};

Animation.mainFunction = (function() {
  var new_gift_class = "new-gift",
      dragged_gift,
      video_links = ['w8vxuZ3bjrA', 'L0MK7qz13bU', 'YJ50YCpYkqM', 'D2va8ddcY4E'],
      special_gift = ['', 'star', 'box', 'bear']
      gift_num = 0
      //giftTween = TweenLite.to(".gift", 4, {top: 630, ease:Bounce.easeOut}),

      //myTween = function() {
      //  //TweenLite.from(".gift", 4, {top: 0, ease:Bounce.easeOut});
      //  giftTween.pause();
      //};
      removeNew = function(target) {
        target.removeClass(new_gift_class);
      },
      selectAndPlayVideo = function (event, alwaysPlay) {
        var $gift = $(event.target),
          video_id = $gift.attr('data-video-id')
        if(alwaysPlay || $gift.attr('data-play-video') === 'true') {
          $gift.attr('data-play-video', 'false')
          $('.video-embed').html("<iframe width=\"294\" height=\"180\" src=\"http://www.youtube.com/embed/"+ video_id +"?autoplay=1\" frameborder=\"0\"></iframe>")
        }
      }
      createAndDropGift = function() {
        var ornament = gift_num % 2
        //special gift
        if(gift_num % 5 === 0 && gift_num > 0) ornament = special_gift[gift_num / 5]
        new_gift = $('<div class="gift ornament-' + ornament + '"></div>');
        new_gift.addClass(new_gift_class).attr('data-video-id', video_links[gift_num%4]).attr('data-play-video', 'true');
        gift_num++;
        $('.page-body').append(new_gift);
        TweenLite.to("."+new_gift_class, 4, {top: 630,
          ease:Bounce.easeOut, onComplete:function(){
            Draggable.create(new_gift, {onDragEnd: dragEnd})
            new_gift.on('dblclick', function(event) {
              selectAndPlayVideo(event, true)
            })
            removeNew(new_gift);
        }});
      },
      dragEnd = function(event) {
        selectAndPlayVideo(event, false)
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
