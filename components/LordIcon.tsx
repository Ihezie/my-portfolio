"use client";
import { useRef } from "react";
import { Player } from "@lordicon/react";
import type { IconData } from "@lordicon/react/dist/interfaces";

const LordIcon = ({ icon, size = 30 }: { icon: IconData; size?: number }) => {
  const playerRef = useRef<Player>(null);

  return (
    <div
      onMouseEnter={() => {
        playerRef.current?.playFromBeginning();
      }}
    >
      <Player ref={playerRef} size={size} icon={icon} />
    </div>
  );
};
export default LordIcon;
