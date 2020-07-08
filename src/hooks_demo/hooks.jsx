import React, { useState } from "react";
import styled from "styled-components";
import Begin from "./begin";
import StateDemo from "./state-hook";
import ReducerDemo from "./reducer-hook";
import MemoCallbackDemo from "./use-memo-callback/memo-callback-demo";

const Container = styled.div`
  margin: 10px;
  width: 900px;
  height: 100px;
  font-family: sans-serif;
`;

const Menus = styled.ul`
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Link = styled.li`
  display: block;
  width: 100px;
  float: left;
  margin-left: 2px;
  border: 1px solid #000;
`;

const Ref = styled.a`
  display: block;
  padding: 3px;
  text-decoration: none;
  background-color: #fff;
  color: #009;

  :hover {
    background-color: #009;
    color: #fff;
  }
`;

const DemoContainer = styled.div`
  margin: 10px;
  width: 800px;
  font-family: sans-serif;
`;

const HooksDemo = () => {
  const [active, setActiveDemo] = useState();

  return (
    <div>
      <Container>
        <header>
          <h1>Horizontal Navigation Menu</h1>
        </header>
        <nav>
          <Menus id="mainMenu">
            <Link>
              <Ref href="#" onClick={() => setActiveDemo("state")}>
                State
              </Ref>
            </Link>
            <Link>
              <Ref href="#" onClick={() => setActiveDemo("reduce")}>
                Reducer
              </Ref>
            </Link>
            <Link>
              <Ref href="#" onClick={() => setActiveDemo("callback")}>
                Callback
              </Ref>
            </Link>
            <Link>
              <Ref href="#">Memo</Ref>
            </Link>
            <Link>
              <Ref href="#">Context</Ref>
            </Link>
          </Menus>
        </nav>
      </Container>

      <DemoContainer>
        {!active && <Begin />}
        {active === "state" && <StateDemo />}
        {active === "reduce" && <ReducerDemo />}
        {active === "callback" && <MemoCallbackDemo />}
      </DemoContainer>
    </div>
  );
};
export default HooksDemo;
