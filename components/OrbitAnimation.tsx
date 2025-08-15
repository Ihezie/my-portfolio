import { useFrame } from "@react-three/fiber";
import CameraControls from "./CameraControls";
import { useRef, useMemo } from "react";
import { Mesh } from "three";
import { Line } from "@react-three/drei";
import * as THREE from "three";
import useResponsive from "@/hooks/useResponsive";
import { Text } from "@react-three/drei";

type Vector = [number, number, number];

const OrbitAnimation = ({ moonData }: { moonData: Array<any> }) => {
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

  return (
    <>
      <group scale={scale} position={position} rotation={rotation}>
        <group scale={sphereScale}>
          <PointsSphere />
        </group>
        {moonData.map(({ position, text }) => (
          <Moon key={text} position={position} color={"#e36507"} text={text} />
        ))}
      </group>
    </>
  );
};
export default OrbitAnimation;

const Moon = ({
  position,
  color,
  text,
}: {
  position: [number, number, number];
  color: string;
  text: string;
}) => {
  const groupRef = useRef<Mesh>(null!);
  const objectRef = useRef<Mesh>(null!);
  const points: Array<THREE.Vector3> = [];
  const segments = 64;
  for (let i = 0; i <= segments; i++) {
    const angle = ((i / segments) * Math.PI) / 5;
    points.push(
      new THREE.Vector3(Math.cos(angle) * 1.5, 0, Math.sin(angle) * 1.5)
    );
  }

  useFrame(() => {
    groupRef.current.rotation.y += 0.007;
  });

  const isLarge = useResponsive("width >= 1024px");

  let lineWidth = 1.5;
  let opacity = 0.3;
  let fontSize = 0.07;
  let moonScale = 0.03;
  if (isLarge) {
    lineWidth = 2;
    opacity = 0.5;
    fontSize = 0.05;
    moonScale = 0.02;
  }

  return (
    <group ref={groupRef} rotation={position}>
      <Line
        points={points}
        color={"white"}
        lineWidth={lineWidth}
        transparent
        opacity={opacity}
      />
      <mesh ref={objectRef} scale={moonScale} position={[1.5, 0, 0]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2}
        />
        <sphereGeometry />
      </mesh>
      <Text
        font="/fonts/Audiowide-Regular.ttf"
        position={[1.5, -0.04, 0.1]}
        fontSize={fontSize}
        color="white"
        anchorX="right"
        anchorY="top"
        rotation={[0, 1.57, 0]}
      >
        {text.toUpperCase()}
      </Text>
    </group>
  );
};

function PointsSphere() {
  const sunRef = useRef<THREE.Points>(null!);
  const isLarge = useResponsive("width >= 1024px");

  useFrame(() => {
    if (isLarge) {
      sunRef.current.rotation.x -= 0.001;
    } else {
      sunRef.current.rotation.y += 0.002;
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
    <points ref={sunRef}>
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
