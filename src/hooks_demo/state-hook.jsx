import React, { useState } from "react";
import { Spacer } from "./components/divs";
import Div from "./color-changer/Div";

const StateDemo = () => {
  const [stateCount, setStateCount] = useState(0);

  return (
    <div>
      <Spacer>
        <div>
          <label>Counter value is {stateCount}</label>
        </div>
      </Spacer>
      <Spacer>
        <button onClick={() => setStateCount(stateCount + 1)}>
          Update State
        </button>
      </Spacer>

      <Spacer>
        <Div>Refresh Color changer</Div>
      </Spacer>
    </div>
  );
};
export default StateDemo;
