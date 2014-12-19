var Animation = Animation || {};

Animation.mainFunction = (function() {
  var new_gift_class = "new-gift",
      special_gift = ['', 'star', 'box', 'bear'],
      gift_num = 0,
      questions_container = ".questions-container",
      hidden_question = "hidden-question",
      question_set = [
        {"question":"In home alone what is the name of the kid",
         "answers":["Jack", "Mark", "Kevin", "Harry"],
         "correct": 2,
         "video": "RwlUQEo4Vc0"
        },
        {"question":"Where on her head does Anna develop a white streak",
         "answers":["The Right Side", "The Left Side", "The Ceter", "It all turns white"],
         "correct": 3,
         "video": "j08nbuPc92w"
        },
        {"question":"In Polar Express movie, what is 'The First Gift of Christmas'",
         "answers":["A Reindeer","A bell from Santa's sleigh", "The Polar Star", "Santa Himself"],
         "correct": 2,
         "video": "dofECCtTfaM"
        },
        {"question":"What is the name of the rabbit in the maggic hat in Frosty the Snowman",
         "answers":["Hocus Pocus","Abra ka Dabra", "Magic Mike", "Avada Kevadra"],
         "correct": 1,
         "video": "8yflEEC-WdE"
        },
        {"question":"What did Harry receive from Dumbledore during his first Christmas at Hotwarts",
         "answers":["The Philosophers Stone","The cloak of invisibility", "A new want", "Socks"],
         "correct": 2,
         "video": "w8vxuZ3bjrA"
        },
        {"question":"What was the most likely reason that The Grinch hated christmas",
         "answers":["His heart was too small","He never saw Santa", "He never got presents", "He did not have a heart at all"],
         "correct": 2,
         "video": "0lq1JIWQSlc"
        },
        {"question":"What present did Harry get from Kreacher in The Half-Blood Price",
         "answers":["His heart was too small","He never saw Santa", "He never got presents", "He did not have a heart at all"],
         "correct": 2,
         "video": "w8vxuZ3bjrA"
        },
        {"question":"What was the most likely reason that The Grinch hated christmas",
         "answers":["His heart was too small","He never saw Santa", "He never got presents", "He did not have a heart at all"],
         "correct": 2,
         "video": "w8vxuZ3bjrA"
        },
        {"question":"What was the most likely reason that The Grinch hated christmas",
         "answers":["His heart was too small","He never saw Santa", "He never got presents", "He did not have a heart at all"],
         "correct": 2,
         "video": "w8vxuZ3bjrA"
        },
      ],

      buildQuestionContainer = function() {
        $.each(question_set, function(index, value) {
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
      selectAndPlayVideo = function (event, alwaysPlay) {
        var $gift = $(event.target),
          video_id = $gift.attr('data-video-id')
        if(alwaysPlay || $gift.attr('data-play-video') === 'true') {
          $gift.attr('data-play-video', 'false')
          $('.video-embed').html("<iframe width=\"294\" height=\"180\" src=\"http://www.youtube.com/embed/"+ video_id +"?autoplay=1&controls=0&showinfo=0\" frameborder=\"0\"></iframe>")
        }
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
            new_gift.on('dblclick', function(event) {
              selectAndPlayVideo(event, true)
            })
            removeNew(new_gift);
        }});
      },
      dragEnd = function(event) {
        var $gift = $(event.target)
        if($gift.attr('data-play-video') === 'true') showNextQuestion();
        selectAndPlayVideo(event, false)
      };
  return {
    init: function() {
      buildQuestionContainer();

      //$(".theclick").on("click", function() {
      //  createAndDropGift();
      //});
      $(".answer").on("click", function() {
        handleAnswerClick($(this));
      });
    }
  }
})();

$(document).ready(function() {
  Animation.mainFunction.init();
});
