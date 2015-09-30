var TodoCollection = require('../collections/TodoCollection');

module.exports = new TodoCollection([
	{description: 'do dishes', completed: false},
	{description: 'wash car', completed: false},
	{description: 'walk dog', completed: true},
	{description: 'feed cats', completed: false},
	{description: 'do homework', completed: true},
	{description: 'work out', completed: true},
	{description: 'take out trash', completed: false},
	{description: 'pick up kids', completed: true}
]);