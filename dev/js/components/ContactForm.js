/** @jsx React.DOM */
var React = require("react");
var ReactDOM = require("react-dom");
var ContactZip = require("./ContactZip.js");
var ContactForm = React.createClass({

	render: function() {
		return (
			<div className="wrapper">
				<FormLabel />
				<ContactName />
				<ContactEmail />
				<ContactPhone />
				<ContactZip />
				<SubmitButton />
			</div>
		)
	}

});

module.exports = ContactForm;
