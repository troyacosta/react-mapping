var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		description: '',
		completed: false
	}
});