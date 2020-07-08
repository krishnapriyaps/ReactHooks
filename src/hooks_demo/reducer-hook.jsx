import React, { useReducer } from "react";
import styled from "styled-components";
import Div from "./color-changer/Div";
import { Spacer } from "./components/divs";

const INITIAL_STATE = {
  isEven: false,
  isOdd: false,
  isGreen: false,
  isBlue: false
};

const ACTION = {
  even: "Even",
  odd: "Odd",
  green: "Green",
  blue: "Blue"
};

const reducer = (state, action) => {
  console.log(JSON.stringify(state));
  switch (action.type) {
    case ACTION.even:
      return {
        ...state,
        isEven: true
      };
    case ACTION.odd:
      return {
        ...state,
        isOdd: true
      };
    case ACTION.green:
      return {
        ...state,
        isGreen: true
      };
    case ACTION.blue:
      return {
        ...state,
        isBlue: true
      };
    default:
      return INITIAL_STATE;
  }
};

const EvenLabel = styled.label`
  background: ${props => (props.active ? "Purple" : "#FFFFFF")};
  color: ${props => (props.active ? "#FFFFFF" : "black")};
`;

const OddLabel = styled.label`
  background: ${props => (props.active ? "Yellow" : "#FFFFFF")};
`;

const GreenLabel = styled.label`
  background: ${props => (props.active ? "green" : "#FFFFFF")};
`;

const BlueLabel = styled.label`
  background: ${props => (props.active ? "blue" : "#FFFFFF")};
`;

const ReducerDemo = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <div>
      <Spacer>
        <EvenLabel active={state.isEven}>Even Label</EvenLabel>
      </Spacer>
      <Spacer>
        <OddLabel active={state.isOdd}>Odd Label</OddLabel>
      </Spacer>
      <Spacer>
        <GreenLabel active={state.isGreen}>Green Label</GreenLabel>
      </Spacer>
      <Spacer>
        <BlueLabel active={state.isBlue}>Blue Label</BlueLabel>
      </Spacer>

      <Spacer>
        <button onClick={() => dispatch({ type: ACTION.even })}>
          Highlight Even
        </button>
      </Spacer>
      <Spacer>
        <button onClick={() => dispatch({ type: ACTION.odd })}>
          Highlight Odd
        </button>
      </Spacer>
      <Spacer>
        <button onClick={() => dispatch({ type: ACTION.green })}>
          Highlight Green
        </button>
      </Spacer>
      <Spacer>
        <button onClick={() => dispatch({ type: ACTION.blue })}>
          Highlight Blue
        </button>
      </Spacer>
      <Spacer>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </Spacer>

      <Spacer>
        <Div>Refresh Color changer</Div>
      </Spacer>
    </div>
  );
};
export default ReducerDemo;
