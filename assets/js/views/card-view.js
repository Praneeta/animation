var app = app || {};

(function ($) {
  'use strict';

  // The Application
  // ---------------

  // Our overall **AppView** is the top-level piece of UI.
  app.CardView = Backbone.View.extend({
    el: '.page-content',
    events: {
      'click .fb-share': 'shareOnFacebook'
    },
    rewardNum: 0,
    category: undefined,
    slug: undefined,
    initialize: function (slug) {
      var index = _.indexOf(app.data.cards, slug)
        , next = ((index + 1) % app.data.cards.length)
        , prev = (app.data.cards.length + (index - 1)) % app.data.cards.length
        , template = _.template(app.templates.cards.content)
        , headTemplate = _.template(app.templates.meta);
      this.model = app.data.cards.details
      this.slug = slug
      this.$el.empty()
      _.extend(app.data.meta, {'ogurl':'/#/cards/'+this.slug, 'image':this.slug, 'imageType':'jpg'});
      $('head').html(headTemplate(app.data.meta))
      this.$el.append(template({card: slug, next: app.data.cards[next], prev: app.data.cards[prev]}))
      $('.page-body').attr('class', 'page-body card ' + slug)
      this.render()
    },
    render: function (){
      new app.QuestionView(this.category, this.slug, app.questions, this);
    },
    reward: function (question) {
      $(this.$('.flipper')[question]).addClass('reward')
    },
    share: function () {
      this.$('.fb-share').show()
    },
    shareOnFacebook: function () {
      var that = this
      html2canvas($(".image-container"), {
        onrendered: function(canvas) {
          var imageData = canvas.toDataURL("image/png")
            , webSite = "Made this using "
            , fileName = "RepublicDayCard"
          FB.getLoginStatus(function(response) {
            webSite+= window.location.href;
            if (response.status === "connected") {
              that.postImageToFacebook(response.authResponse.accessToken, fileName, "image/png", imageData, webSite);
            } else {
              FB.login(function(response)  {
                that.postImageToFacebook(response.authResponse.accessToken, fileName, "image/png", imageData, webSite);
              }, {scope: "publish_actions"});
           }
         });
        }
      })
    },
    dataURItoBlob: function(dataURI) {
      var byteString = atob(dataURI.split(',')[1])
        , ab = new ArrayBuffer(byteString.length)
        , ia = new Uint8Array(ab)
      for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i)
      }
      return new Blob([ab], {
        type: 'image/png'
      })
    },
    postImageToFacebook: function(authToken, filename, mimeType, imageData, message) {
      try {
        var blob = this.dataURItoBlob(imageData);
      } catch (e) {
        alert("Could not process your image. Please try again");
        return false;
      }
      var fd = new FormData();
      fd.append("access_token", authToken);
      fd.append("source", blob);
      fd.append("message", "Made this using http://www.makemyholidaycard.com");
      $.ajax({
        url: "https://graph.facebook.com/me/photos?access_token=" + authToken,
        type: "POST",
        data: fd,
        processData: false,
        contentType: false,
        success: function (data) {
          console.log("success " + data);
        },
        error: function (shr, status, data) {
          console.log("error " + data + " Status " + shr.status);
        },
        complete: function () {
          console.log("Posted to facebook");
        }
      });
    }
  });
})(jQuery);
