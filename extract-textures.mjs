import { NodeIO } from '@gltf-transform/core';
import {
  EXTMeshoptCompression,
  KHRMeshQuantization,
} from '@gltf-transform/extensions';
import { MeshoptDecoder } from 'meshoptimizer';
import fs from 'node:fs';

const io = new NodeIO()
  .registerExtensions([
  EXTMeshoptCompression,
  KHRMeshQuantization,
])
  .registerDependencies({
    'meshopt.decoder': MeshoptDecoder,
  });

const document = await io.read(
  'public/models/FA-002-optimized-test.glb'
);

const textures = document.getRoot().listTextures();

fs.mkdirSync('texture-test', { recursive: true });

console.log(`Texture trovate: ${textures.length}`);

for (const texture of textures) {
  const name = texture.getName() || 'texture';
  const mimeType = texture.getMimeType();
  const image = texture.getImage();

  if (!image) {
    console.log(`Nessuna immagine per: ${name}`);
    continue;
  }

  let extension = 'bin';

  if (mimeType === 'image/png') extension = 'png';
  if (mimeType === 'image/jpeg') extension = 'jpg';
  if (mimeType === 'image/webp') extension = 'webp';
  if (mimeType === 'image/avif') extension = 'avif';

  const safeName = name.replace(/[^a-zA-Z0-9_-]/g, '_');
  const output = `texture-test/${safeName}.${extension}`;

  fs.writeFileSync(output, image);

  console.log(
    `${name} → ${output} (${(image.length / 1024 / 1024).toFixed(2)} MB)`
  );
}
