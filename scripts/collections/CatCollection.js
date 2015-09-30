var Backbone = require('backbone');
var CatModel = require('../models/CatModel');

module.exports = Backbone.Collection.extend({
	model: CatModel
});