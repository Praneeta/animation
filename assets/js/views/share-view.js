var app = app || {};

(function ($) {
  'use strict';

  // The Application
  // ---------------

  // Our overall **AppView** is the top-level piece of UI.
  app.ShareView = Backbone.View.extend({
    el: '.fb-share',
    template: _.template(app.templates.cards.reward),
    initialize: function (reward, drop) {
      this.reward = reward
      this.drop = drop
      this.render()
    },
    render: function (){
      this.$el.append(this.template({ reward: this.reward}))
       $('.page-body').addClass('decorate')
      TweenLite.to(".new-gift", 1, {top: this.drop,
        ease:Bounce.easeOut, onComplete:function(){
          Draggable.create($('.new-gift'), {
            onDragEnd: function() {
              _.delay(_.bind($('.page-body').removeClass, $('.page-body')), 2000, 'decorate')
            }
          })
          $('.new-gift').removeClass('new-gift')
        }.bind(this)
      });
    }
  });
})(jQuery);
