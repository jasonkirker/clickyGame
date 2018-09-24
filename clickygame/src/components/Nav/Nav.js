import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav>
    <ul>
      <li className="brand">
        <a href="/clicky-game/">{props.title}</a>
      </li>

      <li id="rw">{props.wrong}</li>

      <li id="col-sm-2 cur-score">Current Score: {props.score}</li>

      <li id="col-sm-2 top-score">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;