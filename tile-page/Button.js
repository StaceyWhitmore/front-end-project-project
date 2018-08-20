import React, { Component } from 'react';
import './css/button.css';

class Button extends Component {
  render() {
    console.log(Array(16).join("wat" -1) + " Batman!" );
    return(
      <button
        id="roundButton"
         onMouseDown={this.props.handleMouseDown}></button>
    );
  }
}
export default Button;
