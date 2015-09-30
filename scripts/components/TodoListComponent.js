var React = require('react');
var TodoComponent = require('./TodoComponent');

module.exports = React.createClass({
	render: function() {
		var todoList = this.props.todos.map(function(todo) {
			if(todo.get('completed') === false) {
				todo.set({completed: 'No'});
			}
			else {
				todo.set({completed: 'Yes'});
			}
			return (
				<TodoComponent todo={todo} />
				);
		});
		return (
			<div className="row">
				<h1>Todos</h1>
					<table className="table">
						<thead>
							<tr>
								<th>Description</th>
								<th>Completed</th>
							</tr>
						</thead>
						<tbody>
							{todoList}
						</tbody>
					</table>
			</div>
		);
	}
});