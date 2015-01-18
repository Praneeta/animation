var app = app || {};

(function ($) {
  'use strict';

  // The Application
  // ---------------

  // Our overall **AppView** is the top-level piece of UI.
  app.SimpleCardView = Backbone.View.extend({
    el: '.page-content',
    events: {
      'click .answer': 'checkAnswer'
    },
    rewardNum: 0,
    templates: app.templates.cards,
    category: undefined,
    slug: undefined,
    initialize: function (category, slug) {
      var template = _.template(this.templates[category].content)
      this.model = app.data[category][slug]
      this.category = category
      this.slug = slug
      this.$el.empty()
      this.$el.append(template)
      $('.page-body').attr('class', 'page-body ' + slug)
      this.render()
    },
    render: function (){

    }
  });
})(jQuery);
