"use client";
import { useRef, useState } from "react";
import { Player } from "@lordicon/react";
import type { IconData } from "@lordicon/react/dist/interfaces";

const LordIcon = ({ icon, size = 30 }: { icon: IconData; size?: number }) => {
  const playerRef = useRef<Player>(null);
  const [colorize, setColorize] = useState(false);

  return (
    <div
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
