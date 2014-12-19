var Animation = Animation || {};

Animation.mainFunction = (function() {
  var new_gift_class = "new-gift",
      video_links = ['w8vxuZ3bjrA', 'L0MK7qz13bU', 'YJ50YCpYkqM', 'D2va8ddcY4E'],
      special_gift = ['', 'star', 'box', 'bear'],
      gift_num = 0,
      questions_container = ".questions-container",
      //hidden_question = "hidden-question",
      hidden_question = "hidden-question",
      question_set = [
        {"question":"In home alone what is the name of the kid",
         "answers":["Jack", "Mark", "Kevin", "Harry"],
         "correct": 2,
         "video": ""
        },
        {"question":"Where on her head does Anna develop a white streak",
         "answers":["The Right Side", "The Left Side", "The Ceter", "It all turns white"],
         "correct": 3,
         "video": ""
        },
        {"question":"In Polar Express movie, what is 'The First Gift of Christmas'",
         "answers":["A Reindeer","A bell from Santa's sleigh", "The Polar Star", "Santa Himself"],
         "correct": 2,
         "video": ""
        },
        {"question":"What is the name of the rabbit in the maggic hat in Frosty the Snowman",
         "answers":["Hocus Pocus","Abra ka Dabra", "Magic Mike", "Avada Kevadra"],
         "correct": 1,
         "video": ""
        },
        {"question":"In home alone what is the name of the kid",
         "answers":["Jack","Mark", "Kevin", "Harry"],
         "correct": 2,
         "video": ""
        },
        {"question":"In home alone what is the name of the kid",
         "answers":["Jack","Mark", "Kevin", "Harry"],
         "correct": 2,
         "video": ""
        },
      ],

      buildQuestionContainer = function() {
        console.log(question_set);
        $.each(question_set, function(index, value) {
          var question = $("<div class='question-container'></div>"),
              answer_container = $("<div class='answer-options'><ul></ul></div>"),
              correct_answer = $(this).attr("correct")
          question.text($(this).attr("question"));

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

      handleAnswerClick = function(target) {
        if (target.data("correct")) {
          target.parents(".question-container").fadeOut("slow", function() {
            //target.parents(questions_container).find(hidden_question).first().removeClass(hidden_question);
            target.parents(".question-container").siblings("."+hidden_question).first().removeClass(hidden_question).fadeIn("slow");
            createAndDropGift();
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
