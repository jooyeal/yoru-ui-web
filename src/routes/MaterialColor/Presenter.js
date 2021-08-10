import React from "react";
import styled, { keyframes } from "styled-components";

const colorChange = keyframes`
    0% {
        mix-blend-mode:multiply;
    }
    
    100% {
        mix-blend-mode:difference;
    }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1rem;
`;

const ColorContainer = styled.div`
  display: flex;

  flex-direction: column;
`;

const Label = styled.div.attrs((props) => ({
  style: { color: props.color },
}))`
  display: flex;
  justify-content: center;
  font-size: 12px;
  width: 3rem;
  height: 3rem;
`;

const Box = styled.div.attrs((props) => ({
  style: { backgroundColor: props.color },
}))`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: ${(props) => props.color}; */
  cursor: pointer;
`;

const Text = styled.div.attrs((props) => ({
  style: { color: props.color },
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  mix-blend-mode: multiply;
  :hover {
    animation: ${colorChange} 0.5s ease-out;
    animation-fill-mode: forwards;
  }
`;

const ColorBox = ({ color, name }) => {
  const onClick = () => {
    const textarea = document.createElement("textarea");
    textarea.value = color;
    textarea.style.top = 0;
    textarea.style.right = 0;
    textarea.style.position = "fixed";

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("color copied");
  };

  return (
    <Box color={color} onClick={onClick}>
      <Text color={color}> {name}</Text>
    </Box>
  );
};

export default function Presenter({
  red,
  pink,
  purple,
  deeppurple,
  indigo,
  blue,
  lightblue,
  cyan,
  teal,
  green,
  lightgreen,
  lime,
  yellow,
  amber,
  orange,
  deeporange,
  brown,
  grey,
  bluegrey,
}) {
  const onClick = (e) => {
    console.log(e);
  };
  return (
    <Wrapper>
      <ColorContainer>
        <Label color="#EF5350">Red</Label>
        {red.map((item, index) => (
          <ColorBox key={index} color={item.color} name={item.name}></ColorBox>
        ))}
      </ColorContainer>
      <ColorContainer>
        <Label color="#EC407A">Pink</Label>
        {pink.map((item, index) => (
          <ColorBox key={index} color={item.color} name={item.name}></ColorBox>
        ))}
      </ColorContainer>
      <ColorContainer>
        <Label color="#AB47BC">Purple</Label>
        {purple.map((item, index) => (
          <ColorBox key={index} color={item.color} name={item.name}></ColorBox>
        ))}
      </ColorContainer>
      <ColorContainer>
        <Label color="#7E57C2">
          Deep<br></br>Purple
        </Label>
        {deeppurple.map((item, index) => (
          <ColorBox key={index} color={item.color} name={item.name}></ColorBox>
        ))}
      </ColorContainer>
      <ColorContainer>
        <Label color="#5C6BC0">Indigo</Label>
        {indigo.map((item, index) => (
          <ColorBox key={index} color={item.color} name={item.name}></ColorBox>
        ))}
      </ColorContainer>
      <ColorContainer>
        <Label color="#42A5F5">Blue</Label>
        {blue.map((item, index) => (
          <ColorBox key={index} color={item.color} name={item.name}></ColorBox>
        ))}
      </ColorContainer>
      <ColorContainer>
        <Label color="#29B6F6">
          Light<br></br>Blue
        </Label>
        {lightblue.map((item, index) => (
          <ColorBox key={index} color={item.color} name={item.name}></ColorBox>
        ))}
      </ColorContainer>
      <ColorContainer>
        <Label color="#26C6DA">Cyan</Label>
        {cyan.map((item, index) => (
          <ColorBox key={index} color={item.color} name={item.name}></ColorBox>
        ))}
      </ColorContainer>
      <ColorContainer>
        <Label color="#26A69A">Teal</Label>
        {teal.map((item, index) => (
          <ColorBox key={index} color={item.color} name={item.name}></ColorBox>
        ))}
      </ColorContainer>
      <ColorContainer>
        <Label color="#66BB6A">Green</Label>
        {green.map((item, index) => (
          <ColorBox key={index} color={item.color} name={item.name}></ColorBox>
        ))}
      </ColorContainer>
      <ColorContainer>
        <Label color="#9CCC65">
          Light<br></br>Green
        </Label>
        {lightgreen.map((item, index) => (
          <ColorBox key={index} color={item.color} name={item.name}></ColorBox>
        ))}
      </ColorContainer>
      <ColorContainer>
        <Label color="#D4E157">Lime</Label>
        {lime.map((item, index) => (
          <ColorBox key={index} color={item.color} name={item.name}></ColorBox>
        ))}
      </ColorContainer>
      <ColorContainer>
        <Label color="#FFEE58">Yellow</Label>
        {yellow.map((item, index) => (
          <ColorBox key={index} color={item.color} name={item.name}></ColorBox>
        ))}
      </ColorContainer>
      <ColorContainer>
        <Label color="#FFCA28">Amber</Label>
        {amber.map((item, index) => (
          <ColorBox key={index} color={item.color} name={item.name}></ColorBox>
        ))}
      </ColorContainer>
      <ColorContainer>
        <Label color="#FFCA28">Orange</Label>
        {orange.map((item, index) => (
          <ColorBox key={index} color={item.color} name={item.name}></ColorBox>
        ))}
      </ColorContainer>
      <ColorContainer>
        <Label color="#FF7043">
          Deep<br></br>Orange
        </Label>
        {deeporange.map((item, index) => (
          <ColorBox key={index} color={item.color} name={item.name}></ColorBox>
        ))}
      </ColorContainer>
      <ColorContainer>
        <Label color="#8D6E63">Brown</Label>
        {brown.map((item, index) => (
          <ColorBox key={index} color={item.color} name={item.name}></ColorBox>
        ))}
      </ColorContainer>
      <ColorContainer>
        <Label color="#BDBDBD">Grey</Label>
        {grey.map((item, index) => (
          <ColorBox key={index} color={item.color} name={item.name}></ColorBox>
        ))}
      </ColorContainer>
      <ColorContainer>
        <Label color="#78909C">
          Blue<br></br>Grey
        </Label>
        {bluegrey.map((item, index) => (
          <ColorBox key={index} color={item.color} name={item.name}></ColorBox>
        ))}
      </ColorContainer>
    </Wrapper>
  );
}
