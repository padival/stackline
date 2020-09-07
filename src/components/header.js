import React, { Component } from "react";
var logo = require('../download.png')

export default class Header extends Component {
    render() {
        return (
         <div className="header">
          <img key={logo} src={logo} alt="logo" />

        </div> 
    );
  }
}