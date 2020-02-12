import React, { Component } from "react";
import "../styles/Social.scss";

class Social extends Component {
  render() {
    return (
      <ul className="social">
        <li>
          <a href="https://github.com/Subtora">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/Subtora">
            <i className="fab fa-youtube"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/Subtora">
            <i className="fab fa-stack-overflow"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/Subtora">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
    );
  }
}

export default Social;
