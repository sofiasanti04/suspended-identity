import { useFrame, useThree } from "@react-three/fiber";

export default function CameraMotion() {
  const { camera } = useThree();

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    camera.position.x =
      -2.2 + Math.sin(t * 0.18) * 0.08;

    camera.position.y =
      1.65 + Math.sin(t * 0.24) * 0.03;
  });

  return null;
}
