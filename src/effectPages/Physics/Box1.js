import React from "react";
import { useSpring, animated } from "react-spring";

export default function Box1() {
  const props = useSpring({
    to: { marginTop: 0, opacity: 1 },
    from: { marginTop: -500, opacity: 0 },
  });
  return (
    <animated.div style={props}>
      <div style={style}>
        <h1>Lorem</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </animated.div>
  );
}

const style = {
  background: "steelblue",
  color: "white",
  padding: "1.5rem",
};
