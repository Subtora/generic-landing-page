import React, { Component } from "react";
import "../styles/Social.scss";

class Social extends Component {
 const elements = this.props.types;
 const items = []

 for (const [index, value] of elements.entries()) {
   items.push(
     <li key={index}>
        <a href="#" target="_blank">
          <i className={`fab fa-${this.props.types[0]}`}></i>
        </a>
     </li>
   )
 }
  render() {
    return (
      <ul className="social">
      {items}
      </ul>
    );
  }
}

export default Social;
