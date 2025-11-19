"use client";
import { RefObject, useEffect, useRef, useState } from "react";
import { Player } from "@lordicon/react";
import type { IconData } from "@lordicon/react/dist/interfaces";

const LordIcon = ({
  icon,
  size = 30,
  playerConRef,
}: {
  icon: IconData;
  size?: number;
  playerConRef?: RefObject<HTMLDivElement | null>;
}) => {
  const playerRef = useRef<Player>(null);
  const [colorize, setColorize] = useState(false);

  return (
    <div
      ref={playerConRef}
      onMouseEnter={() => {
        playerRef.current?.playFromBeginning();
        setColorize(true);
      }}
      onMouseLeave={() => {
        setColorize(false);
      }}
      className="inline-block"
    >
      <Player
        colorize={colorize ? "#7bf1a8" : ""}
        ref={playerRef}
        size={size}
        icon={icon}
      />
    </div>
  );
};
export default LordIcon;
