import fs from 'fs';
import { NodeIO } from '@gltf-transform/core';
import {
  EXTMeshoptCompression,
  KHRMeshQuantization,
} from '@gltf-transform/extensions';
import { MeshoptDecoder, MeshoptEncoder } from 'meshoptimizer';

const io = new NodeIO()
  .registerExtensions([
    EXTMeshoptCompression,
    KHRMeshQuantization,
  ])
  .registerDependencies({
    'meshopt.decoder': MeshoptDecoder,
    'meshopt.encoder': MeshoptEncoder,
  });

const input = 'public/models/FA-003-with-normal.glb';
const output = 'public/models/FA-003.glb';

const baseColorPath =
  'public/models/FA-003 source/3DModel/baked_mesh_4b45cb5c_tex0.webp';

const normalPath =
  'public/models/FA-003 source/3DModel/baked_mesh_4b45cb5c_norm0.webp';

const document = await io.read(input);

const textures = document.getRoot().listTextures();

let baseColorReplaced = false;
let normalReplaced = false;

for (const texture of textures) {
  const name = texture.getName();

  if (name === 'baked_mesh_4b45cb5c_tex0') {
    texture.setImage(fs.readFileSync(baseColorPath));
    texture.setMimeType('image/webp');

    console.log('Base color sostituita:', name);
    baseColorReplaced = true;
  }

  if (name === 'baked_mesh_4b45cb5c_norm0') {
    texture.setImage(fs.readFileSync(normalPath));
    texture.setMimeType('image/webp');

    console.log('Normal map sostituita:', name);
    normalReplaced = true;
  }
}

if (!baseColorReplaced) {
  throw new Error('Base color texture non trovata.');
}

if (!normalReplaced) {
  throw new Error('Normal texture non trovata.');
}

await io.write(output, document);

console.log('Creato:', output);