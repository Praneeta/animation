var app = app || {};

(function ($) {
  'use strict';

  // The Application
  // ---------------

  // Our overall **AppView** is the top-level piece of UI.
  app.CardView = Backbone.View.extend({
    el: '.page-content',
    rewardNum: 0,
    category: undefined,
    slug: undefined,
    initialize: function (slug) {
      var index = _.indexOf(app.data.cards, slug)
        , next = ((index + 1) % app.data.cards.length)
        , prev = (app.data.cards.length + (index - 1)) % app.data.cards.length
      var template = _.template(app.templates.cards.content)
      this.model = app.data.cards.details
      this.slug = slug
      this.$el.empty()
      this.$el.append(template({card: slug, next: app.data.cards[next], prev: app.data.cards[prev]}))
      $('.page-body').attr('class', 'page-body ' + slug)
      this.render()
    },
    render: function (){
      new app.QuestionView(this.category, this.slug, app.questions, this);
    },
    reward: function (question) {
      $(this.$('.flipper')[question]).addClass('reward')
    },
    share: function (){

    }
  });
})(jQuery);
