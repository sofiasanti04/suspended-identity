import { Box } from "@react-three/drei";

export default function GalleryPedestal({
  position = [0, 0, 0],
  occupied = false,
}) {
  return (
    <group position={position}>

      {/* Piedistallo */}
      <Box args={[1.1, 1.2, 1.1]} position={[0, 0.6, 0]} castShadow receiveShadow>
        <meshStandardMaterial
          color="#f3f3f3"
          roughness={0.95}
        />
      </Box>

      {/* Placeholder temporaneo */}
      {occupied && (
        <mesh position={[0, 2.0, 0]} castShadow>
          <sphereGeometry args={[0.28, 32, 32]} />
          <meshStandardMaterial color="#d9d9d9" />
        </mesh>
      )}

    </group>
  );
}
