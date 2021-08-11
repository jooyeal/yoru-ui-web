import React from "react";
import Sprite from "../sprite";

export default function Actor({ sprite, data, position, step = 0, dir = 0 }) {
  const { w, h } = data;
  return (
    <Sprite
      image={sprite}
      position={position}
      data={{ x: step * w, y: dir * h, w, h }}
    />
  );
}
