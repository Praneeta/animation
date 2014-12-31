var app = app || {};

(function ($) {
  'use strict';

  // The Application
  // ---------------

  // Our overall **AppView** is the top-level piece of UI.
  app.CardView = Backbone.View.extend({
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
      new app.QuestionView(this.category, this.slug, this.model.questions, this);
    },
    reward: function () {
      new app.RewardView(this.getRewardName(), this.model['gift-drop']);
    },
    getRewardName: function (){
      var reward = this.rewardNum % 2
        , rewardType = this.templates[this.category]['reward']

      //every 4th gift is special gift
      if(this.rewardNum % 3 === 0 && this.rewardNum > 0) reward = this.model.gift[(this.rewardNum / 3) % this.model.gift.length]
      this.rewardNum++
      return rewardType + '-' + reward
    },
    share: function (){
      
    }
  });
})(jQuery);
