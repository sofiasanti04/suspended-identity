import { Text } from "@react-three/drei";
import ExhibitionPedestal from "./ExhibitionPedestal";

export default function GalleryCluster({
  city,
  subtitle,
  position,
  scale = 1,
  archiveCode1,
  archiveCode2,
  onBustClick
}) {
  return (
    <group position={position} scale={scale}>

      <Text
        position={[0, 4, 0]}
        fontSize={0.42}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {city}
      </Text>

      <Text
        position={[0, 3.5, 0]}
        fontSize={0.11}
        color="#d5d5d5"
        anchorX="center"
        anchorY="middle"
      >
        {subtitle}
      </Text>

      <ExhibitionPedestal
        code={archiveCode1}
        position={[-1.2, 0, 0]}
        onBustClick={onBustClick}
      />

      <ExhibitionPedestal
        code={archiveCode2}
        position={[1.2, 0, 0]}
        onBustClick={onBustClick}
      />

    </group>
  );
}
