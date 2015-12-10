/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var NameInput = React.createClass({
    render:function(){
      return (
        <div className="NameInput">
          <input type="text" placeholder="Your Name" name="Name"/> <br></br>
        </div>
      )
    }
  });

module.exports = NameInput;