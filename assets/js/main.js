var Animation = Animation || {},
    webSite = "Made this using ",
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


window.isMobile = function() {
    var check = false;
      (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
}

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
            answer_option.text(value);
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
        if (isMobile()) $('.page-body').removeClass('decorate');
        $(questions_container).find(".gift-message").addClass("hidden");
        var nextQuestion = $(questions_container).find("."+hidden_question).first()
        if (nextQuestion.length) {
          nextQuestion.fadeIn("slow", function() {
            $(this).removeClass(hidden_question);
            if(Animation.video.display) selectAndPlayVideo($(this), true)
          });
        } else {
          $(questions_container).hide()
          $('.message').show()
        }
      },

      handleAnswerClick = function(target) {
        if (target.parents(".question-container").find('span.answered').length) { return false;}
        var correct = false;
        target.append("<span class='hidden answered'></span>");
        if (target.data("correct")) {
           correct = true;
           target.find('span').addClass("correct-answer");
        } else {
           correct = false;
           target.find('span').addClass("wrong-answer");
        }
        target.find('span').fadeIn("slow", function() {
          setTimeout(function() {
          target.parents(".question-container").fadeOut("slow", function() {
            //target.parents(".question-container").siblings("."+hidden_question).first().removeClass(hidden_question).fadeIn("slow");
            if (correct) {
             if (isMobile()) $('.page-body').addClass('decorate');
             createAndDropGift(target)
            }
            else showNextQuestion();
          });
          }, 2000);
        });
        //else {
        //  target.parents(".question-container").fadeOut("slow", function() {
        //    showNextQuestion();
        //  });
        //}
      },

      //giftTween = TweenLite.to(".gift", 4, {top: 630, ease:Bounce.easeOut}),

      //myTween = function() {
      //  //TweenLite.from(".gift", 4, {top: 0, ease:Bounce.easeOut});
      //  giftTween.pause();
      //};
      removeNew = function(target) {
        target.removeClass(new_gift_class);
        if(target.parents('.snowman').length) $('.page-body').addClass('decorate')
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
          , totalSpecialGifts = Animation.special_gift.length;
        //special gift
        if(gift_num % 3 === 0 && gift_num > 0) ornament = Animation.special_gift[(gift_num / 3) % totalSpecialGifts]
        new_gift = $('<div class="gift ornament-' + ornament + '"></div>');
        new_gift.addClass(new_gift_class).attr('data-video-id', video_id).attr('data-play-video', 'true');
        if (Animation.trivia) {
          var video_id = target.parents(".question-container").attr("data-video-id");
          if (gift_num ==0) {
            $(target).parents(questions_container).find(".gift-message").removeClass("hidden");
            $(target).parents(questions_container).addClass('fadeout')
          }
        }
        gift_num++;
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
        };
        xhr.setRequestHeader( "Content-Type", "multipart/form-data; boundary=" + boundary );
        xhr.sendAsBinary( formData );
      },

      postCanvasToFacebook = function() {
        $(".page-body").css("max-width", "1500px");
        $(".tree, .gift, .gift-box").show()
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
              webSite+= window.location.href;
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
        if(Animation.video.display) selectAndPlayVideo($('.question-container:first'), true)
      }
      $(".answer").on("click", function() {
        handleAnswerClick($(this));
      });
      //santaGivesGift();
     $(".fb-share").on("click", function() {
       $(this).hide();
       if (isMobile()) {
        $('.page-body').css('width', Animation.mobile.width)
        $('.page-body').css('background-position-x', '0px')
       }
       $('.message').html($('.message').val())
       postCanvasToFacebook();
     });
     $('.message').on('click', function () {
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
