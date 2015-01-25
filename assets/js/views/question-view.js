var app = app || {};

(function ($) {
  'use strict';

  // The Application
  // ---------------

  // Our overall **AppView** is the top-level piece of UI.
  app.QuestionView = Backbone.View.extend({
    el: '.questions-container',
    events: {
      'click .answer': 'checkAnswer'
    },
    question: 0,
    current_question : undefined,
    templates: app.templates.cards,
    initialize: function (category, slug, collection, parent) {
      this.collection = collection
      this.parentView = parent
      this.render()
    },
    render: function (){
      this.showNextQuestion()
    },
    showNextQuestion: function () {
      var question_template = _.template(this.templates.question)
        , answer_template = _.template(this.templates.answerOption)
        , $answerOptions

      this.current_question = this.collection[this.question][Math.floor(Math.random() * 10)]
      this.$el.empty()
      this.$el.append(question_template({question: this.current_question.question}))

      $answerOptions = this.$('.answer-options ul')

      $('.image-container').css('min-height', $('.image-container img').height() + 'px !important')

      this.current_question.answers.forEach(function(option){
        $answerOptions.append(answer_template({option: option}));
      }.bind(this));
    },
    processAnswer: function(answeredCorrectly) {
      if(this.question < (this.collection.length -1) ) {
        this.showNextQuestion()
      } else {
        this.$el.hide()
        this.parentView.share()
      }

      if (answeredCorrectly) {
        $($('.front')[this.question]).hide()
        this.parentView.reward(this.question++)
      } else {
        $($('.end')[this.question++]).hide()
      }
    },
    checkAnswer: function (event) {
      var selectedAnswer = $(event.target).text()
        , correctAnswer = this.current_question.answers[this.current_question.correct]
        , answeredCorrectly = selectedAnswer === correctAnswer
        , answer = answeredCorrectly? 'correct-answer' : 'wrong-answer'

      $(event.target).append('<span class="' + answer + '"></span>')
      _(function() {
        this.processAnswer(answeredCorrectly);
      }).chain().bind(this).delay(500);

    }
  });
})(jQuery);
