import fs from 'fs';
import { NodeIO } from '@gltf-transform/core';

const io = new NodeIO();

const input = 'public/models/FA-003-raw.glb';
const output = 'public/models/FA-003-with-normal.glb';
const normalPath = 'public/models/FA-003 source/3DModel/baked_mesh_4b45cb5c_norm0.png';

const document = await io.read(input);

const material = document.getRoot().listMaterials()[0];

if (!material) {
  throw new Error('Materiale non trovato.');
}

const texture = document.createTexture('baked_mesh_4b45cb5c_norm0');

texture.setImage(fs.readFileSync(normalPath));
texture.setMimeType('image/png');

material.setNormalTexture(texture);

console.log('Normal map aggiunta:', texture.getName());

await io.write(output, document);

console.log('Creato:', output);