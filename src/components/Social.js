import React, { Component } from "react";
import "../styles/Social.scss";

class Social extends Component {
  render() {
    return (
      <ul className="social">
        {Object.keys(this.props.types).map((fa, link) => {
          return (
            <li key={fa}>
              <a href={link} target="_blank">
                <i className={`fab fa-${fa}`}></i>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Social;
