var React = require('react');
var ReactDom = require('react-dom');

var ContactEmail = React.createClass ({
	render: function () {
		return (
			<div>
        		<input type="email" placeholder="email" /> <br />
      		</div>
		)
	}
});

module.exports = ContactEmail;