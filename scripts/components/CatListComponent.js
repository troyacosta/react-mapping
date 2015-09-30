var React = require('react');
var CatComponent = require('./CatComponent');

module.exports = React.createClass({
	render: function() {
		return (
			<div className="row">
				<h1>Cats</h1>
				<table className="table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Type</th>
							<th>Picture</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
		);
	}
});