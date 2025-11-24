import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";
import type { IconData } from "@lordicon/react/dist/interfaces";

export default function PlayIconOnce({
  icon,
  size,
}: {
  icon: IconData;
  size: number;
}) {
  const playerRef = useRef<Player>(null);

  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);

  return <Player ref={playerRef} icon={icon} size={size} />;
}
