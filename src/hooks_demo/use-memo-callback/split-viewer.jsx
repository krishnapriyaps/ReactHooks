import React from "react";
import styled from "styled-components";
import NoMemApp from "./no-mem-app";

const HeaderWrapper = styled.div`
  position: relative;
  height: 30px;
`;
const Wrapper = styled.div`
  margin-top: 11px;
  position: relative;
  height: 100%;
`;

const Split = styled.div`
  /* height: 100%; */
  width: 45%;
  position: absolute;
  z-index: 1;
  /* top: 0; */
  overflow-x: hidden;
  padding: 10px;
`;

const LeftSplit = styled(Split)`
  left: 0;
  background-color: #d3d3d3;
`;

const RightSplit = styled(Split)`
  right: 0;
  background-color: #dcdcdc;
`;

const SplitDemo = () => {
  return (
    <>
      <HeaderWrapper>
        <LeftSplit>No Memorization</LeftSplit>
        <RightSplit>With Memorization</RightSplit>
      </HeaderWrapper>
      <Wrapper>
        <LeftSplit>
          <NoMemApp />
        </LeftSplit>
        <RightSplit>Right</RightSplit>
      </Wrapper>
    </>
  );
};
export default SplitDemo;
