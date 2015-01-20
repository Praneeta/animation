var app = app || {};

(function () {
	'use strict';

	// Todo Router
	// ----------
	var Router = Backbone.Router.extend({
		routes: {
      'index': 'index',
			'cards/:slug': 'showCard',
      '': 'index'
		}
	});

  app.Router = new Router();
  app.Router.on("route:showCard", function(slug) {
    new app.CardView(slug);
    app.Router.navigate("cards/"+slug);
  });
  app.Router.on("route:index", function() {
    new app.IndexView();
    app.Router.navigate("");
  });
  //Backbone.history.start({pushState: true});
  Backbone.history.start();
})();
