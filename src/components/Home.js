import React from "react";
import user from "../data/user"

function Home(props, { color }) {
  props = user
  return (
    <div id="home">
      <h1 style={{ color }}>
        {props.name} is a Web Developer from {props.city}
      </h1>
    </div>
  );
}

export default Home;
