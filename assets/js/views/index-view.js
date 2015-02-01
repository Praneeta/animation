var app = app || {};

(function ($) {
  'use strict';

  // The Application
  // ---------------

  // Our overall **AppView** is the top-level piece of UI.
  app.IndexView = Backbone.View.extend({
    el: '.page-content',
    //Not the best place. We probably need a card view.
    events: {
    'click .fb-share': "triggerFbShare"
    },
    initialize: function () {
      this.$el.empty()
      this.templates = app.templates.cards.index
      $('.page-body').attr('class', 'page-body home-page')
      var template = _.template(this.templates.content)
        , headTemplate = _.template(app.templates.meta);
      $('head').html(headTemplate(app.data.meta))
      this.$el.append(template({title: app.data.meta.title}))
      this.collection = app.data.cards
      this.render()
    },
    render: function(){
      var newRow
        , template = _.template(this.templates.card)
        , emptyDiv
      this.collection.forEach(function(card, index){
        if(index % 3 === 0) {
          emptyDiv = $('<div class="empty-div"></div>')
          newRow = $('<div class="row"></div>')
          this.$('.container').append(newRow).append(emptyDiv)
        }
        newRow.append(template({card: card}))
      }.bind(this))
      emptyDiv.remove()
    },
    triggerFbShare: function(event) {
      FB.ui({
        method: 'send',
        link: $(event.target).parents('.card-holder').attr('data-href'),
      }, function(response){
        console.log("We got resp from FB")
        console.log(response)
      });

    }
  });
})(jQuery);
