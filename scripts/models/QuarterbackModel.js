var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		name: '',
		team: '',
		attempts: 0,
		completions: 0,
		yards: 0,
		touchdowns: 0,
		interceptions: 0,
		sacks: 0
	}
});