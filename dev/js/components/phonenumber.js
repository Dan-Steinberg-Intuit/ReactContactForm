/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var PhoneNumber = React.createClass({
    render:function(){
        return (
            <div className="phoneNumberWrapper">
                <input className="phoneNumber" type="tel" placeholder="Phone Number" name="phoneNumber" />
            </div>
        )
    }
});

module.exports = PhoneNumber;
