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
          src="https://trevorjs.dev/images/headProfile.svg"
          width="300"
          height="300"
          alt="Trevor J Smith"
        />
      </figure>
    );
  }
}

export default Profile;
