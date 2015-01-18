var app = app || {};

(function ($) {
  'use strict';

  // The Application
  // ---------------

  // Our overall **AppView** is the top-level piece of UI.
  app.IndexView = Backbone.View.extend({
    el: '.page-content',
    holiday: app.data.current.holiday,
    initialize: function () {
      this.$el.empty()
      this.templates = app.templates.cards[this.holiday].index
      $('.page-body').attr('class', 'page-body home-page')
      var template = _.template(this.templates.content)
        , headTemplate = _.template(app.templates.meta);
      $('head').html(headTemplate(app.data[this.holiday].meta))
      this.$el.append(template())
      this.collection = app.data[this.holiday].cards
      this.render()
    },
    render: function(){
      var newRow
        , template = _.template(this.templates.card);
      this.collection.forEach(function(card, index){
        if(index % 4 === 0) {
          newRow = $('<div class="row"></div>')
          this.$('.container').append('<div class="empty-div"></div>').append(newRow)
        }
        newRow.append(template({card: card}));
      }.bind(this));
    }
  });
})(jQuery);
