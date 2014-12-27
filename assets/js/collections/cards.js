/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	var Cards = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: app.Card
	});

	// Create our global collection of **Todos**.
	app.Cards = new Cards();
})();
