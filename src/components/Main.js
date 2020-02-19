import React, { Component } from "react";
import Social from "./Social";
import Profile from "./Profile";

import Bkg from "../images/green-hills.jpg";

import Head1 from "../images/profile1.png";
import Head2 from "../images/profile2.png";
import Head3 from "../images/profile3.png";

import "../styles/Main.scss";
import "../styles/animations.scss";
import "../styles/minireset.min.css";
import "../scripts/main.js";

class Main extends Component {
  render() {
    let backgroundImage = {
      backgroundImage: `url(${Bkg})`
    };

    return (
      <>
        <div id="wallpaper" className="wallpaper" style={backgroundImage}></div>
        <div className="content">
          <aside className="side">
            <Profile srcset={[Head1, Head2, Head3]} />
          </aside>
          <main className="about">
            <h1 className="name">Hey! I'm Trevor</h1>
            <p className="job">Full-Stack Developer</p>
            <hr className="hr" />
            <div className="description">
              <p>just another description</p>
            </div>
            <div className="contact">
              <a href="https://trevorjs.dev" target="_blank" className="button">
                my stuff
              </a>
            </div>
            <Social
              types={{
                github: "https://github.com/Subtora",
                youtube:
                  "https://www.youtube.com/channel/UCbkqwGP9qHvKWp3iCEfLkXA",
                "stack-overflow":
                  "https://stackoverflow.com/users/8026620/subtora",
                linkedin: "https://www.linkedin.com/in/trevor-smith-27621613b/"
              }}
            />
          </main>
        </div>
      </>
    );
  }
}

export default Main;
