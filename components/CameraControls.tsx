import { OrbitControls } from "three/addons";
import {
  type ThreeElement,
  extend,
  useThree,
  useFrame,
} from "@react-three/fiber";
import { useRef } from "react";
import useResponsive from "@/hooks/useResponsive";

declare module "@react-three/fiber" {
  interface ThreeElements {
    orbitControls: ThreeElement<typeof OrbitControls>;
  }
}

extend({ OrbitControls });

const CameraControls = ({ target }: { target?: [number, number, number] }) => {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef<OrbitControls>(null);
  const isLarge = useResponsive("width >= 1024px");

  useFrame(() => {
    controls.current?.update?.();
  });
  if (isLarge && controls.current) {
    controls.current.reset();
    controls.current.enabled = false;
  } else if (!isLarge && controls.current) {
    controls.current.enabled = true;
  }

  return (
    <orbitControls
      minPolarAngle={Math.PI / 2}
      maxPolarAngle={Math.PI / 2}
      enableZoom={false}
      target={target}
      enableDamping
      ref={controls}
      args={[camera, domElement]}
    />
  );
};

export default CameraControls;
