import React from "react";
import Actor from "../actor";
import useKeyPress from "../../hooks/use-key-press";
import useWalk from "../../hooks/use-walk";

export default function Player({ skin }) {
  const { dir, step, walk, position, directions } = useWalk(3);
  const data = {
    w: 32,
    h: 32,
  };

  useKeyPress((e) => {
    const dir = e.key.replace("Arrow", "").toLowerCase();
    if (directions.hasOwnProperty(dir))
      walk(e.key.replace("Arrow", "").toLowerCase());
    e.preventDefault();
  });

  return (
    <Actor
      sprite={skin}
      data={data}
      step={step}
      dir={dir}
      position={position}
    />
  );
}
