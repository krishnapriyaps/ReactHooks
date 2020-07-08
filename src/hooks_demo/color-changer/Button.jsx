import React from "react";

// Generates random colours any time it's called
const randomColour = () => "#" + ((Math.random() * 0xffffff) << 0).toString(16);

const Button = props => (
  <button onClick={props.onClick} style={{ background: randomColour() }}>
    {props.children}
  </button>
);

export default Button;
