//  physics scene
var gPhysicsScene = {
  gravity: new THREE.Vector3(0.0, -10.0, 0.0),
  dt: 1.0 / 30.0,
  tankSize: { x: 2.5, y: 1.0, z: 3.0 },
  tankBorder: 0.03,
  waterHeight: 0.8,
  waterSpacing: 0.02,
  paused: true,
  waterSurface: null,
  objects: [],
};

// globals
var gThreeScene;
var gRenderer;
var gRenderTarget;
var gCamera;


class WaterSurface {
    constructor()
}

class Ball{
    constructor()
}

function initScene(scene) {
    
}

function simulate() {
    if (gPhysicsScene.paused) return;

    gPhysicsScene.waterSurface.simulate();
  
    for (let i = 0; i < gPhysicsScene.objects.length; i++) {
      obj = gPhysicsScene.objects[i];
      obj.simulate();
        for (let j = 0; j < i; j++)obj;
    }
}

function render() {
    
}

function initThreeScene() {
    
}

class Grabber{
    
}

function update() {
    
}

