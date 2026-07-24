import {
  EffectComposer,
  Bloom,
  Vignette
} from "@react-three/postprocessing";

export default function GalleryPostProcessing() {
  return (
    <EffectComposer>
      <Bloom
        intensity={0.08}
        luminanceThreshold={0.92}
        luminanceSmoothing={0.9}
      />

      <Vignette
        eskil={false}
        offset={0.25}
        darkness={0.15}
      />
    </EffectComposer>
  );
}
