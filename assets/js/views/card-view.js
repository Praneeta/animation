var app = app || {};

(function ($) {
  'use strict';

  // The Application
  // ---------------

  // Our overall **AppView** is the top-level piece of UI.
  app.CardView = Backbone.View.extend({
    el: '.page-content',
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
      _.extend(app.data.meta, {'ogurl':'/' + this.slug + '.html', 'image':this.slug, 'imageType':'jpg'});
      $('head').html(headTemplate(app.data.meta))
      this.$el.append(template({card: slug, next: app.data.cards[next], prev: app.data.cards[prev]}))
      $('.page-body').attr('class', 'page-body card ' + slug)
    }
  });
})(jQuery);
