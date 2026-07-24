export default function GalleryRoomLights() {
  return (
    <>
      {/* Luce ambientale generale */}
      <ambientLight
        intensity={0.09}
        color="#dfe8f7"
      />

      {/* Luce diffusa proveniente dall'alto */}
      <hemisphereLight
        skyColor="#d7e6ff"
        groundColor="#232323"
        intensity={0.12}
      />

      {/* Luce principale della sala */}
      <directionalLight
        position={[0, 8, -10]}
        intensity={0.18}
        color="#edf4ff"
      />

      {/* Riempimento frontale */}
      <directionalLight
        position={[0, 6, 18]}
        intensity={0.12}
        color="#f3f6ff"
      />

      {/* Riempimento sinistra */}
      <directionalLight
        position={[-18, 8, 8]}
        intensity={0.09}
        color="#eef3ff"
      />

      {/* Riempimento destra */}
      <directionalLight
        position={[18, 8, 8]}
        intensity={0.09}
        color="#eef3ff"
      />
    </>
  );
}
