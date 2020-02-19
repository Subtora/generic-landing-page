import React, { Component } from "react";
import "../styles/Profile.scss";

class Profile extends Component {
  render() {
    return (
      <figure id="picture" className="picture">
        <div className="picture-shadow"></div>
        <img
          id="pictureImage"
          className="picture-image"
          srcSet={`
            ${this.props.srcset[0]} 1x,
            ${this.props.srcset[1]} 2x,
            ${this.props.srcset[2]} 3x`}
          alt="Trevor J Smith"
        />
      </figure>
    );
  }
}

export default Profile;
