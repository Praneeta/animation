var app = app || {};

(function () {
	'use strict';

	// Todo Router
	// ----------
	var Router = Backbone.Router.extend({
		routes: {
			':slug': 'showCard',
      'index': 'index',
      '': 'index'
		}
	});

  app.Router = new Router();
  app.Router.on("route:showCard", function(slug) {
		slug = slug.replace('.html', '')
    new app.CardView(slug);
  });
  app.Router.on("route:index", function() {
    new app.IndexView();
  });
  //Backbone.history.start({pushState: true});
  Backbone.history.start();
})();
