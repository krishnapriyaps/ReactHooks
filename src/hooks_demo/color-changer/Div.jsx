import React from "react";

// Generates random colours any time it's called
const randomColour = () => "#" + ((Math.random() * 0xffffff) << 0).toString(16);

// A random background colour
const Div = props => (
  <div
    onClick={props.onClick}
    style={{
      background: randomColour(),
      border: "1px solid, black",
      padding: "10px"
    }}
  >
    {props.children}
  </div>
);

export default Div;
