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

      this.current_question = this.collection[this.question]
      this.$el.empty()
      this.$el.append(question_template({question: this.current_question.question}))

      $answerOptions = this.$('.answer-options ul')

      this.current_question.answers.forEach(function(option){
        $answerOptions.append(answer_template({option: option}));
      }.bind(this));
    },
    processAnswer: function(answeredCorrectly) {
      if(this.question < (this.collection.length -1) ) {
        this.question++;
        this.showNextQuestion()
      } else {
        this.parentView.share()
      }

      if (answeredCorrectly) this.parentView.reward()
    },
    checkAnswer: function (event) {
      var selectedAnswer = $(event.target).text()
        , correctAnswer = this.current_question.answers[this.current_question.correct]
        , answeredCorrectly = selectedAnswer === correctAnswer
        , answer =  answeredCorrectly? 'correct-answer' : 'wrong-answer'

      $(event.target).append('<span class="' + answer + '"></span>')
      //_.delay(this.processAnswer, 2000, answeredCorrectly);
      _(function() {
        this.processAnswer(answeredCorrectly);
      }).chain().bind(this).delay(2000);

    }
  });
})(jQuery);
