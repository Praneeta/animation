/*global Backbone, jQuery, _, ENTER_KEY */
var app = app || {};

(function ($) {
  'use strict';

  // The Application
  // ---------------

  // Our overall **AppView** is the top-level piece of UI.
  app.IndexView = Backbone.View.extend({
    el: '.card-list',
    template: app.index.card,
    initialize: function () {
      this.collection = app.christmas.cards
      this.render()
    },
    render: function(){
      this.collection.forEach(function(card){
        var template = _.template(this.template);
        this.$el.append(template({card: card}));
      }.bind(this));
    }
  });
})(jQuery);
