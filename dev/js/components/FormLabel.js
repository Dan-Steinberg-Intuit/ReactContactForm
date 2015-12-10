/** @jsx React.DOM */
var React = require("react");
var ReactDOM = require("react-dom");

var FormLabel = React.createClass({

	render: function() {
		return (
			<label className="contact-form-label">My Contact Form</label>
		)
	}
});

module.exports = FormLabel;
