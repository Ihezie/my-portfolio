import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";

const SvgIcon = ({ url }: { url: string }) => {
  const { paths } = useLoader(SVGLoader, url);

  return (
    <group scale={[0.01, -0.01, 0.01]}>
      {paths.map((path, i) => (
        <mesh key={i}>
          <shapeGeometry args={[[...path.toShapes(true)]]} />
          <meshBasicMaterial
            attach="material"
            color={path.color || "white"}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
};
export default SvgIcon;
