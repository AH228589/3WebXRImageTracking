import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

async function loadBirds() {
    const loader = new GLTFLoader();
}

export { loadBirds };

async function loadBirds() {
    const loader = new GLTFLoader();

    const parrotData = await loader.loadAsync('/assets/models/Parrot.glb');

    console.log('Squaaawk!', parrotData);
}