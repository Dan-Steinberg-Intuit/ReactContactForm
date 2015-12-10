/** @jsx React.DOM */
var React = require("react");
var ReactDOM = require("react-dom");

var FormLabel = require("./FormLabel.js");
var SubmitButton = require("./SubmitButton");

var ContactForm = React.createClass({

	render: function() {
		return (
			<div className="contact-form">
				<FormLabel />
				<SubmitButton />
			</div>
		)
	}

});

module.exports = ContactForm;
