var React = require('react');
var ReactDom = require('react-dom');

var ContactEmail = React.createClass ({
	render: function () {
		return (
			<div>
        		Email: <input type="email" placeholder="email" /> <br />
      		</div>
		)
	}
});

module.exports = ContactEmail;