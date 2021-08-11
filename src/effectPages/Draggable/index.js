import React, { useRef } from "react";
import { useSprings, animated } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import clamp from "lodash.clamp";
import swap from "lodash-move";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  -webkit-user-select: none;
  user-select: none;
  -moz-user-select: none;
`;

const Content = styled.div`
  position: relative;
  width: 200px;
  height: 100px;
`;

const List = styled.div`
  position: absolute;
  width: 200px;
  height: 40px;
  transform-origin: 50% 50% 0px;
  border-radius: 5px;
  color: white;
  line-height: 40px;
  padding-left: 32px;
  font-size: 14.5px;
  background: lightblue;
  text-transform: uppercase;
  letter-spacing: 2px;
  touch-action: none;
  &:nth-child(1) {
    background: linear-gradient(135deg, #f6d365 0%, #fda085 100%);
  }
  &:nth-child(2) {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  }
  &:nth-child(3) {
    background: linear-gradient(135deg, #5ee7df 0%, #b490ca 100%);
  }
`;

const fn =
  (order, active = false, originalIndex = 0, currentIndex = 0, y = 0) =>
  (index) => {
    let returnObj = {};
    active && index === originalIndex
      ? (returnObj = {
          y: currentIndex * 50 + y,
          scale: 1.1,
          zIndex: 1,
          shadow: 15,
          immediate: (key) => key === "y" || key === "zIndex",
        })
      : (returnObj = {
          y: order.indexOf(index) * 50,
          scale: 1,
          zIndex: 0,
          shadow: 1,
          immediate: false,
        });
    return returnObj;
  };

function DraggableList({ items }) {
  const order = useRef(items.map((_, index) => index));
  console.log(order.current);
  const [springs, api] = useSprings(items.length, fn(order.current));
  const bind = useDrag(({ args: [originalIndex], active, movement: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex);
    const curRow = clamp(
      Math.round((curIndex * 100 + y) / 100),
      0,
      items.length - 1
    );
    const newOrder = swap(order.current, curIndex, curRow);
    api.start(fn(newOrder, active, originalIndex, curIndex, y)); // Feed springs new style data, they'll animate the view without causing a single render
    if (!active) order.current = newOrder;
  });
  return (
    <Content style={{ height: items.length * 50 }}>
      {springs.map(({ zIndex, shadow, y, scale }, i) => (
        <List
          as={animated.div}
          {...bind(i)}
          key={i}
          style={{
            zIndex,
            boxShadow: shadow.to(
              (s) => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`
            ),
            y,
            scale,
          }}
          children={items[i]}
        />
      ))}
    </Content>
  );
}

export default function Draggable() {
  return (
    <>
      <h1>Draggable effect with react-spring</h1>
      <Container>
        <DraggableList items={["Lorem", "ipsum", "dolor"]}></DraggableList>
      </Container>
    </>
  );
}
