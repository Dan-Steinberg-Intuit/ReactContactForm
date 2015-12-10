/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var ContactZip = React.createClass({
    render:function(){
        return (
            <div className="zipcodediv">
                <input type="number" placeholder="Zip Code" className="zipcode"/>
            </div>
        )
    }
});

module.exports = ContactZip;
