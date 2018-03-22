import 'phaser';

// import TestScene from './scenes/PlayScene';

// const config:GameConfig = {
//     type: Phaser.AUTO,
//     parent: 'content',
//     width: 640,
//     height: 480,
//     resolution: 1, 
//     backgroundColor: "#EDEEC9",
//     scene: [
//       TestScene
//     ]
// };

// new Phaser.Game(config);

const config:GameConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
}

new Phaser.Game(config);

function preload() {

}

function create() {

}

function update() {
  
}