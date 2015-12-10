/** @jsx React.DOM */
var React = require("react");
var ReactDOM = require("react-dom");

var SubmitButton = React.createClass({

    render: function() {
        return (
            <div className="submitButtonWrapper">
                <button type="submit" className="submitButton">Submit</button>
            </div>
        )
    }
});

module.exports = SubmitButton;
