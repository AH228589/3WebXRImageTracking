import { WebGLRenderer } from 'https://cdn.skypack.dev/three@0.144.0';

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });

  renderer.physicallyCorrectLights = true;

  return renderer;
}

export { createRenderer };
