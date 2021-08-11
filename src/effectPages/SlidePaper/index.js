import React, { useRef } from "react";
import { useSprings, animated } from "@react-spring/web";
import useMeasure from "react-use-measure";
import { useDrag } from "react-use-gesture";
import clamp from "lodash.clamp";
import styled from "styled-components";

const Page = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  will-change: transform;
`;

const Paper = styled.div`
  touch-action: none;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 100%;
  will-change: transform;
  box-shadow: 0 62.5px 125px -25px rgba(50, 50, 73, 0.5),
    0 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const pages = [
  "https://images.pexels.com/photos/62689/pexels-photo-62689.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/4016596/pexels-photo-4016596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/351265/pexels-photo-351265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/924675/pexels-photo-924675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];

function Viewpager() {
  const index = useRef(0);
  const [ref, { width }] = useMeasure();
  const [props, api] = useSprings(
    pages.length,
    (i) => ({
      x: i * width,
      scale: width === 0 ? 0 : 1,
      display: "block",
    }),
    [width]
  );
  const bind = useDrag(
    ({ active, movement: [mx], direction: [xDir], distance, cancel }) => {
      if (active && distance > width / 2) {
        index.current = clamp(
          index.current + (xDir > 0 ? -1 : 1),
          0,
          pages.length - 1
        );
        cancel();
      }
      api.start((i) => {
        if (i < index.current - 1 || i > index.current + 1)
          return { display: "none" };
        const x = (i - index.current) * width + (active ? mx : 0);
        const scale = active ? 1 - distance / width / 2 : 1;
        return { x, scale, display: "block" };
      });
    }
  );
  return (
    <Wrapper ref={ref}>
      {props.map(({ x, display, scale }, i) => (
        <Page
          as={animated.div}
          {...bind()}
          key={i}
          style={{ display, x, backgroundImage: `url(${pages[i]})` }}
        >
          <animated.div style={{ scale }} />
        </Page>
      ))}
    </Wrapper>
  );
}

export default function SlidePaper() {
  return (
    <Container>
      <Viewpager />
    </Container>
  );
}
