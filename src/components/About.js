import React from "react";
import user from "../data/user"

function About(props) {
  props = user
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <p><a href={props.links.github}>GitHub</a></p>
      <p><a href={props.links.linkedin}>LinkedIn</a></p>
    </div>
  );
}

export default About;
