/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var ContactZip = React.createClass({
    render:function(){
        return (
            <div>
                <input type="number" placeholder="Zip Code"/>
            </div>
        )
    }
});

module.exports = ContactZip;
