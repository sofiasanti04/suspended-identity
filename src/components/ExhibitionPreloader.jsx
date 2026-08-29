import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";

const MODELS = [
  "/models/FA-001.glb",
  "/models/FA-002.glb",
  "/models/FA-003.glb",
  "/models/FA-004.glb",
  "/models/FA-005.glb",
];

export default function ExhibitionPreloader() {
  useEffect(() => {
    MODELS.forEach((path) => {
      useGLTF.preload(path);
    });
  }, []);

  return null;
}
