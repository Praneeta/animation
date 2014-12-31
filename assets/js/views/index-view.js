var app = app || {};

(function ($) {
  'use strict';

  // The Application
  // ---------------

  // Our overall **AppView** is the top-level piece of UI.
  app.IndexView = Backbone.View.extend({
    el: '.page-content',
    templates: app.templates.index,
    initialize: function () {
      this.$el.empty()
      $('.page-body').attr('class', 'page-body home-page')
      var template = _.template(this.templates.content);
      this.$el.append(template())
      this.collection = app.data.christmas.cards
      this.render()
    },
    render: function(){
      this.collection.forEach(function(card){
        var template = _.template(this.templates.card);
        this.$('.card-list').append(template({card: card}));
      }.bind(this));
    }
  });
})(jQuery);
