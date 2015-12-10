/** @jsx React.DOM */
var React = require("react");
var ReactDOM = require("react-dom");

var FormLabel = require("./FormLabel.js");
var SubmitButton = require("./SubmitButton");
var PhoneNumber = require("./PhoneNumber")

var ContactForm = React.createClass({

	render: function() {
		return (
			<div className="contact-form">
				<FormLabel />
				<ContactName />
				<ContactEmail />
				<PhoneNumber />
				<ContactZip />
				<SubmitButton />
			</div>
		)
	}

});

module.exports = ContactForm;
