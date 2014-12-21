var webSite = "http://localhost:8000",
    fileName = "christmasCard";


//https://github.com/lukasz-madon/heroesgenerator/blob/master/script.js
if ( XMLHttpRequest.prototype.sendAsBinary === undefined ) {
      XMLHttpRequest.prototype.sendAsBinary = function(string) {
       var bytes = Array.prototype.map.call(string, function(c) {
         return c.charCodeAt(0) & 0xff;
       });
       this.send(new Uint8Array(bytes).buffer);
     };
};

//(function(d, s, id) {
//    var js, fjs = d.getElementsByTagName(s)[0];
//      if (d.getElementById(id)) return;
//        js = d.createElement(s); js.id = id;
//          js.src = "//connect.facebook.net/en_US/all.js";
//            fjs.parentNode.insertBefore(js, fjs);
//}(document, 'script', 'facebook-jssdk'));
//
//window.fbAsyncInit = function() {
//      FB.init({
//              appId  : "897326893619716",
//              status : true,
//                    cookie : true,
//                      xfbml  : true  // parse XFBML
//                            });
//};

window.fbAsyncInit = function() {
  FB.init({
    appId      : '897326893619716',
    xfbml      : true,
    version    : 'v2.2'
  });
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


Animation.mainFunction = (function() {
  var new_gift_class = "new-gift",
      special_gift = ['', 'star-new', 'box', 'bear', 'star'],
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
        var nextQuestion = $(questions_container).find("."+hidden_question).first()
        if (nextQuestion.length) {
          nextQuestion.fadeIn("slow", function() {
            $(this).removeClass(hidden_question);
            selectAndPlayVideo($(this), true)
          });
        } else {
          $(questions_container).hide()
          $('.message').show()
        }
      },

      handleAnswerClick = function(target) {
        if (target.data("correct")) {
          target.parents(".question-container").fadeOut("slow", function() {
            //target.parents(".question-container").siblings("."+hidden_question).first().removeClass(hidden_question).fadeIn("slow");
            createAndDropGift(target);
          });
        }
        else {
          target.parents(".question-container").fadeOut("slow", function() {
            showNextQuestion();
          });
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
          $('.video-embed').html("<iframe width=\"" + Animation.video.width + "\" height=\"" + Animation.video.height + "\" src=\"http://www.youtube.com/embed/"+ video_id +"?autoplay=1&controls=0&showinfo=0\" frameborder=\"0\"></iframe>")
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
        var ornament = gift_num % 2
        //special gift
        if(gift_num % 3 === 0 && gift_num > 0) ornament = Animation.special_gift[gift_num / 3]
        new_gift = $('<div class="gift ornament-' + ornament + '"></div>');
        new_gift.addClass(new_gift_class).attr('data-video-id', video_id).attr('data-play-video', 'true');
        gift_num++;
        if (Animation.trivia) {
          var video_id = target.parents(".question-container").attr("data-video-id");
          $(target).parents(questions_container).find(".gift-message").removeClass("hidden");
        }
        $('.page-body').append(new_gift);
        TweenLite.to("."+new_gift_class, 1, {top: Animation.giftDrop,
          ease:Bounce.easeOut, onComplete:function(){
            Draggable.create(new_gift, {onDragEnd: dragEnd})
            removeNew(new_gift);
        }});
      },
      dragEnd = function(event) {
        var $gift = $(event.target)
        if($gift.attr('data-play-video') === 'true') showNextQuestion();
        $gift.attr('data-play-video', 'false')
      },
      postImageToFacebook = function(authToken, filename, mimeType, imageData, message) {
        // this is the multipart/form-data boundary we'll use
        var boundary = '----ThisIsTheBoundary1234567890';
        // let's encode our image file, which is contained in the var
        var formData = '--' + boundary + '\r\n';
          formData += 'Content-Disposition: form-data; name="source"; filename="' + filename + '"\r\n';
        formData += 'Content-Type: ' + mimeType + '\r\n\r\n';
        for ( var i = 0, imageLength=imageData.length; i < imageLength; ++i ) {
          formData += String.fromCharCode( imageData[ i ] & 0xff );
        }
        formData += '\r\n';
        formData += '--' + boundary + '\r\n';
        formData += 'Content-Disposition: form-data; name="message"\r\n\r\n';
        formData += message + '\r\n'
        formData += '--' + boundary + '--\r\n';
        var xhr = new XMLHttpRequest();
        xhr.open( 'POST', 'https://graph.facebook.com/me/photos?access_token=' + authToken, true );
        xhr.onload = xhr.onerror = function() {
          console.log( xhr.responseText );
        };
        xhr.setRequestHeader( "Content-Type", "multipart/form-data; boundary=" + boundary );
        xhr.sendAsBinary( formData );
      },

      postCanvasToFacebook = function() {
        html2canvas($(".page-body"), {
          onrendered: function(canvas) {
                //theCanvas = canvas;
                //document.body.appendChild(canvas);
                //  var image = $('.canvas-outcome img');
                //  debugger;
                //  image.attr("src", canvas.toDataURL("image/png"));
            //}
            var data = canvas.toDataURL("image/png");
            var encodedPng = data.substring(data.indexOf(',') + 1, data.length);
            var decodedPng = Base64Binary.decode(encodedPng);
            FB.getLoginStatus(function(response) {
              if (response.status === "connected") {
                postImageToFacebook(response.authResponse.accessToken, fileName, "image/png", decodedPng, webSite);
              } else if (response.status === "not_authorized") {
                FB.login(function(response) {
                  postImageToFacebook(response.authResponse.accessToken, fileName, "image/png", decodedPng, webSite);
                 }, {scope: "publish_actions"});
              } else {
                FB.login(function(response)  {
                  postImageToFacebook(response.authResponse.accessToken, fileName, "image/png", decodedPng, webSite);
                }, {scope: "publish_actions"});
             }
            });
          }
        })
     };
  return {
    init: function() {
      if (Animation.trivia) {
        buildQuestionContainer();
        selectAndPlayVideo($('.question-container:first'), true)
      }
      $(".answer").on("click", function() {
        handleAnswerClick($(this));
      });
      //santaGivesGift();
     $(".fb-share").on("click", function() {
       $('.video-embed').hide();
       $('.message-save').hide();
       $(this).hide();
       postCanvasToFacebook();
     });
     $('.message').on('click', function () {
       $('.edit-text').show()
       $('.message-text').focus()
       $(this).hide()
     })
     $('.message-save').on('click', function () {
       $('.edit-text').hide()
       if($('.message-text').val()) $('.message').html($('.message-text').val())
       $('.message').show()
       $('.fb-share').show()
     })
     $('.gift-holder').on('click', function () {
       createAndDropGift()
     })
    }
  }
})();

$(document).ready(function() {
  Animation.mainFunction.init();
});
