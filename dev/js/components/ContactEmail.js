var React = require('react');
var ReactDom = require('react-dom');

var ContactEmail = React.createClass ({
	render: function () {
		return (
			<div>
        		<input type="email" className="contact-email" placeholder="Email" /> <br />
      		</div>
		)
	}
});

module.exports = ContactEmail;