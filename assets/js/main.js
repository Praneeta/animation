var Animation = Animation || {};

Animation.mainFunction = (function() {
  var new_gift_class = "new-gift",
      special_gift = ['', 'star', 'box', 'bear'],
      gift_num = 0,
      questions_container = ".questions-container",
      hidden_question = "hidden-question",

      buildQuestionContainer = function() {
        $.each(Animation.question_set, function(index, value) {
          var question = $("<div class='question-container'></div>"),
              answer_container = $("<div class='answer-options'><ul></ul></div>"),
              correct_answer = $(this).attr("correct")
          question.text($(this).attr("question")).attr("data-video-id", $(this).attr("video")) ;

         //hide questions other than first
         if (!index == 0) {
           question.addClass(hidden_question);
         }


          $.each($(this).attr("answers"), function(index, value) {
            var answer_option = $("<li class='answer'></li>");
            answer_option.text(value)
            if ( correct_answer == index) {
              answer_option.data("correct", true);
            }
            answer_container.find("ul").append(answer_option)
          });
          question.append(answer_container);
          $(questions_container).append(question);
        });
      },

      showNextQuestion = function() {
        $(questions_container).find(".gift-message").addClass("hidden");
        $(questions_container).find("."+hidden_question).first().fadeIn("slow", function() {
          $(this).removeClass(hidden_question);
          selectAndPlayVideo($(this), true)
        });
      }

      handleAnswerClick = function(target) {
        if (target.data("correct")) {
          target.parents(".question-container").fadeOut("slow", function() {
            //target.parents(".question-container").siblings("."+hidden_question).first().removeClass(hidden_question).fadeIn("slow");
            createAndDropGift(target);
          });
        }
        else {
          alert("Oops this is the wrong Answer");
        }
      },

      //giftTween = TweenLite.to(".gift", 4, {top: 630, ease:Bounce.easeOut}),

      //myTween = function() {
      //  //TweenLite.from(".gift", 4, {top: 0, ease:Bounce.easeOut});
      //  giftTween.pause();
      //};
      removeNew = function(target) {
        target.removeClass(new_gift_class);
      },
      selectAndPlayVideo = function ($question, alwaysPlay) {
        var video_id = $question.attr('data-video-id')
        if(alwaysPlay || $question.attr('data-play-video') === 'true') {
          $question.attr('data-play-video', 'false')
          $('.video-embed').html("<iframe width=\"422.4\" height=\"257.4\" src=\"http://www.youtube.com/embed/"+ video_id +"?autoplay=1&controls=0&showinfo=0\" frameborder=\"0\"></iframe>")
        }
      },

      santaGivesGift = function () {
        moveSantaToLeft()
      },

      moveSantaToLeft = function () {
        TweenLite.to($('.gift-box'), 0.8, {
          left:60,
          top: 150,
          onComplete: moveSantaDown
        });
      },

      moveSantaDown = function () {
        TweenLite.to($('.gift-box'), 0.001, {
          top: 180,
          onComplete: moveSantaToRight
        });
      },

      moveSantaToRight = function () {
        TweenLite.to($('.gift-box'), 1, {
          left:700,
          top: 400,
          onComplete: function() {}
        });
      },

      createAndDropGift = function(target) {
        var ornament = gift_num % 2,
            video_id = target.parents(".question-container").attr("data-video-id");
        //special gift
        if(gift_num % 3 === 0 && gift_num > 0) ornament = special_gift[gift_num / 3]
        new_gift = $('<div class="gift ornament-' + ornament + '"></div>');
        new_gift.addClass(new_gift_class).attr('data-video-id', video_id).attr('data-play-video', 'true');
        gift_num++;
        $(target).parents(questions_container).find(".gift-message").removeClass("hidden");
        $('.page-body').append(new_gift);
        TweenLite.to("."+new_gift_class, 4, {top: 630,
          ease:Bounce.easeOut, onComplete:function(){
            Draggable.create(new_gift, {onDragEnd: dragEnd})
            removeNew(new_gift);
        }});
      },
      dragEnd = function(event) {
        var $gift = $(event.target)
        if($gift.attr('data-play-video') === 'true') showNextQuestion();
        $gift.attr('data-play-video', 'false')
      };
  return {
    init: function() {
      buildQuestionContainer();
      selectAndPlayVideo($('.question-container:first'), true)
      $(".answer").on("click", function() {
        handleAnswerClick($(this));
      });
      santaGivesGift();
    }
  }
})();

$(document).ready(function() {
  Animation.mainFunction.init();
});
