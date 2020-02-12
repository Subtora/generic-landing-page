import React, { Component } from "react";
import Social from "./Social";
import Profile from "./Profile";

import "../styles/Main.scss";
import "../styles/animations.scss";
import "../styles/minireset.min.css";
import "../scripts/main.js";

class Main extends Component {
  render() {
    return (
      <>
        <div id="wallpaper" className="wallpaper"></div>
        <div className="content">
          <aside className="side">
            <Profile src="https://trevorjs.dev/images/headProfile.svg"/>
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
            <Social types={["github", "youtube", "stack-overflow", "linkedin"]}/>
          </main>
        </div>
      </>
    );
  }
}

export default Main;
