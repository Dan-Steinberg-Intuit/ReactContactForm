/** @jsx React.DOM */
var React = require("react");
var ReactDOM = require("react-dom");

var ContactForm = require("./components/contactForm.js");

ReactDOM.render(
	<ContactForm />,
	document.getElementById("main")
);