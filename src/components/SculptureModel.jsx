import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";

export default function SculptureModel({
  model,
  ...props
}) {
  const { scene } = useGLTF(
    `/src/assets/models/${model}.glb`
  );

  const clonedScene = useMemo(() => {
    const clone = scene.clone(true);

    clone.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        // Ogni scultura ha il proprio materiale
        child.material = child.material.clone();

        // Materiale più naturale
        child.material.roughness = 0.97;
        child.material.metalness = 0;

        // Riflessi molto contenuti
        child.material.envMapIntensity = 0.08;

        child.material.flatShading = false;
        child.material.needsUpdate = true;
      }
    });

    return clone;
  }, [scene]);

  return (
    <primitive
      object={clonedScene}
      {...props}
    />
  );
}
