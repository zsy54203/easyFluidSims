const { floorPowerOfTwo } = require("three/src/math/MathUtils");

// physic scene
var gPhysicsScene = {
  gravity: new THREE.Vector3(0.0, -9.8, 0.0),
  dt: 1.0 / 30.0,
  tankSize: { x: 4.0, y: 1.5, z: 3.0 },
  tankBorder: 0.03,
  waterHeight: 1.2,
  waterSpacing: 0.02, // width of the water column
};

// globals
var gThreeScene;
var gRenderer;
var gRenderTarget;

//loop of water simulation and two-way coupled interaction
class waterSurface {
  constructor(sizeX, sizeZ, depth, spacing, visMaterial) {
    // physics data
    this.waveSpeed = 2.0;
    this.posDamping = 1.0; // damping
    this.velDamping = 0.3;
    this.alpha = 0.5;
    this.time = 0.0;

    this.numX = Math.floor(sizeX / spacing) + 1; // the number of grids in x-axis
    this.numZ = Math.floor(sizeZ / spacing) + 1; // the number of grids in z-axis
    this.spacing = spacing;
    this.numCells = this.numX * this.numZ; // the total number of grids(water columns)
    this.heights = new Float32Array(this.numCells);
    this.bodyHeights = new Float32Array(this.numCells); // the height covered by the objects
    this.prevHeights = new Float32Array(this.numCells);
    this.velocities = new Float32Array(this.numCells);
    this.heights.fill(depth);
    this.velocities.fill(0.0);

    // visual mesh

    // two-way coupled interaction

    // loop of the simulaiton
    simulateSurface(){
      this.waveSpeed = Math.min(this.waveSpeed, this.spacing / gPhysicsScene.dt); // stability criterion(CFL)
      
    }
  }
}
