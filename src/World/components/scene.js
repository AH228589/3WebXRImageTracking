import { Color, Scene } from 'https://cdn.skypack.dev/three@0.144.0';

function createScene() {
  const scene = new Scene();

  scene.background = new Color('skyblue');

  return scene;
}

export { createScene };
