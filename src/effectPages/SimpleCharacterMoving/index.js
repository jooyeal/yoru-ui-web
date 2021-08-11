import React from "react";
import Player from "./components/player";
import styled from "styled-components";
import f1 from "./skins/f1.png";
import e1 from "./skins/e1.png";

const ZoneContainer = styled.div`
  background-color: black;
  box-sizing: border-box;
  border: 4px solid white;
  margin: 0.5rem auto;
  width: 1000px;
  height: 700px;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
`;

export default function SimpleCharacterMoving() {
  return (
    <ZoneContainer>
      <Player skin={f1} />
    </ZoneContainer>
  );
}
