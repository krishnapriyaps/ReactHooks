import React, { useState } from "react";
import Button from "../color-changer/Button";
import { Spacer } from "../components/divs";
import Div from "../color-changer/Div";

const functions = new Set();
const NoMemApp = () => {
  const [delta, setDelta] = useState(1);
  const [c, setC] = useState(0);

  const incrementDelta = () => setDelta(delta => delta + 1);
  const increment = () => setC(c => c + delta);

  // Register the functions so we can count them
  functions.add(incrementDelta);
  functions.add(increment);

  return (
    <div>
      <div> Delta is {delta} </div>
      <div> Counter is {c} </div>
      <br />
      <Spacer>
        <Button onClick={incrementDelta}>Increment Delta</Button>
        <Button onClick={increment}>Increment Counter</Button>
      </Spacer>
      <br />
      <Spacer>
        <Div> Newly Created Functions: {functions.size - 2} </Div>
      </Spacer>
    </div>
  );
};

export default NoMemApp;
