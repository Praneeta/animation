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
      var template = _.template(app.templates.cards.content)
      this.model = app.data.cards.details
      this.slug = slug
      this.$el.empty()
      console.log('slug', slug)
      this.$el.append(template({card: slug}))
      $('.page-body').attr('class', 'page-body ' + slug)
      this.render()
    },
    render: function (){
      new app.QuestionView(this.category, this.slug, this.model.questions, this);
    },
    reward: function () {
      new app.RewardView(this.getRewardName(), this.model['gift-drop'])
    },
    getRewardName: function (){
      var reward = app.data.cards.details.gift[this.rewardNum]
      return reward
    },
    share: function (){

    }
  });
})(jQuery);
