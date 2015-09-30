var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.product.get('name')}</td>
				<td>{this.props.product.get('description')}</td>
				<td>{this.props.product.get('quantity')}</td>
				<td>${this.props.product.get('price')}</td>
			</tr>
		);
	}
})
