var app = app || {};

(function () {
	'use strict';

	// Todo Router
	// ----------
	var Router = Backbone.Router.extend({
		routes: {
      'index': 'index',
			'cards/:category/:slug': 'showCard',
      '': 'index'
		}
	});

  app.Router = new Router();
  app.Router.on("route:showCard", function(category, slug) {
		if (app.data[category].simple) {
			new app.SimpleCardView(category, slug);
		} else {
    	new app.CardView(category, slug);
		}
  });
  app.Router.on("route:index", function() {
    new app.IndexView();
  });
  Backbone.history.start({pushState: true});

  $('a').on('click', function (event) {
    event.preventDefault();
    app.Router.navigate($(this).attr('href'), {trigger: true})
  })
})();
