import fs from 'fs';
import { NodeIO } from '@gltf-transform/core';
import {
  EXTMeshoptCompression,
  KHRMaterialsSpecular,
  KHRMeshQuantization
} from '@gltf-transform/extensions';
import { MeshoptEncoder, MeshoptDecoder } from 'meshoptimizer';

await MeshoptEncoder.ready;

const io = new NodeIO()
  .registerExtensions([
    EXTMeshoptCompression,
    KHRMaterialsSpecular,
    KHRMeshQuantization
  ])
  .registerDependencies({
    'meshopt.encoder': MeshoptEncoder,
    'meshopt.decoder': MeshoptDecoder
  });

const input = 'public/models/FA-002-optimized-test.glb';
const output = 'public/models/FA-002-webp-test.glb';
const jpgPath = 'texture-test/3DModel.webp';

const document = await io.read(input);

const textures = document.getRoot().listTextures();

let replaced = false;

for (const texture of textures) {
  if (texture.getName() === '3DModel') {
    texture.setImage(fs.readFileSync(jpgPath));
    texture.setMimeType('image/webp');

    console.log('Texture sostituita:', texture.getName());
    replaced = true;
  }
}

if (!replaced) {
  throw new Error('Texture 3DModel non trovata.');
}

await io.write(output, document);

console.log('Creato:', output);
