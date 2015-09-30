var Backbone = require('backbone');
var TodoModel = require('../models/TodoModel');

module.exports = Backbone.Collection.extend({
	model: TodoModel
});