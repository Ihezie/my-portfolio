import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import { Mesh } from "three";
import * as THREE from "three";
import useResponsive from "@/hooks/useResponsive";
import { Svg, Float } from "@react-three/drei";

type Vector = [number, number, number];

const moonData: {
  rotation: Vector;
  svgSrc: string;
  lgPosition: Vector;
}[] = [
  {
    rotation: [0, 0, 0],
    svgSrc: "/orbit-animation-icons/microchip.svg",
    lgPosition: [0, 2.67, 0],
  },
  {
    rotation: [0, 1.256, 0],
    svgSrc: "/orbit-animation-icons/terminal.svg",
    lgPosition: [-1.2, 2.6, 0],
  },
  {
    rotation: [0, 2.512, 0],
    svgSrc: "/orbit-animation-icons/code.svg",
    lgPosition: [1.2, 2.6, 0],
  },
  {
    rotation: [0, 3.768, 0],
    svgSrc: "/orbit-animation-icons/database.svg",
    lgPosition: [-2.4, 2.45, 0],
  },
  {
    rotation: [0, 5.024, 0],
    svgSrc: "/orbit-animation-icons/binary.svg",
    lgPosition: [2.4, 2.4, 0],
  },
];

const OrbitAnimation = () => {
  const position: Vector = [0, -1.1, 0];
  let scale: Vector = [0.9, 0.9, 0.9];
  let sphereScale: Vector = [1, 1, 1];
  const rotation: [number, number, number] = [0, 0, -0.3];
  const isSmall = useResponsive("width >= 640px");
  const isLarge = useResponsive("width >= 1024px");
  if (isSmall) {
    position[1] = -1.3;
    scale = [1.2, 1.2, 1.2];
    rotation[2] = -0.3;
  }
  if (isLarge) {
    position[1] = -3.5;
    sphereScale = [5.5, 2, 4];
    rotation[2] = 0;
  }
  const groupRef = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    if (!isLarge) {
      groupRef.current.rotation.y += 0.25 * delta;
    } else {
      groupRef.current.rotation.y = 0;
    }
  });

  return (
    <>
      <group scale={scale} position={position} rotation={rotation}>
        <group scale={sphereScale}>
          <Planet />
        </group>
        <group ref={groupRef}>
          {moonData.map((moon, index) => (
            <Moon
              key={index}
              rotation={moon.rotation}
              svgSrc={moon.svgSrc}
              lgPosition={moon.lgPosition}
            />
          ))}
        </group>
      </group>
    </>
  );
};
export default OrbitAnimation;

const Moon = ({
  rotation,
  svgSrc,
  lgPosition,
}: {
  rotation: Vector;
  svgSrc: string;
  lgPosition: Vector;
}) => {
  const isLarge = useResponsive("width >= 1024px");
  const isXLarge = useResponsive("width >= 1280px");

  let scale = 0.01;
  let position: Vector = [1.4, 0, 0];
  if (isLarge) {
    scale = 0.009
    position = [...lgPosition];
    rotation = [0, 0, 0];
  }
  if (isXLarge) {
    position[0] *= 1.2;
  }

  return (
    <group rotation={rotation}>
      <Float
        speed={1.2} // overall animation speed
        rotationIntensity={2} // how much it rotates
        floatIntensity={0.4} // how much it moves up/down
      >
        <Svg
          rotation={isLarge ? [0, 0, 0] : [0, Math.PI / 2, 0]}
          src={svgSrc}
          position={position}
          scale={scale}
        />
      </Float>
    </group>
  );
};

function Planet() {
  const planetRef = useRef<THREE.Points>(null!);
  const isLarge = useResponsive("width >= 1024px");

  useFrame((state, delta) => {
    if (isLarge) {
      planetRef.current.rotation.x -= 0.05 * delta;
    } else {
      planetRef.current.rotation.y += 0.07 * delta;
    }
  });

  // Parameters for the sphere
  const radius = 1.1;
  let numPoints: number;
  let pointSize: number;

  const isSmall = useResponsive("width >= 640px");
  if (isLarge) {
    numPoints = 20000;
    pointSize = 0.03;
  } else if (isSmall) {
    numPoints = 4000;
    pointSize = 0.025;
  } else {
    numPoints = 4000;
    pointSize = 0.022;
  }

  // Generate points on a sphere
  const positions = useMemo(() => {
    const positions = new Float32Array(numPoints * 3);
    for (let i = 0; i < numPoints; i++) {
      // Spherical coordinates
      const theta = Math.random() * 2 * Math.PI; // Azimuthal angle (longitude)
      const phi = Math.acos(2 * Math.random() - 1); // Polar angle (latitude)
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, [radius, numPoints]);

  return (
    <points ref={planetRef}>
      <bufferGeometry>
        <bufferAttribute
          args={[positions, 3]}
          attach="attributes-position"
          count={numPoints}
        />
      </bufferGeometry>
      <pointsMaterial color="#1bf1a8" size={pointSize} />
    </points>
  );
}
