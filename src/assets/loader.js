// import ghost from './images/ghost/*.png';
// import cloud from './images/cloud/*.png';
// import obstacle1 from './images/obstacle1/*.png';
// import obstacle2 from './images/obstacle2/*.png';
import * as PIXI from 'pixi.js-legacy';

// const spriteNames = {
    // ghost: Object.values(ghost),
    // obstacleGrave: Object.values(obstacle1),
    // obstaclePumpkin: Object.values(obstacle2),
    // cloud: Object.values(cloud),
// };

const spriteNames = {
    ghost: ['./images/ghost/1.png', './images/ghost/2.png', './images/ghost/3.png'],
    obstacleGrave: ['./images/obstacle1/obstacle1.png'],
    obstaclePumpkin: ['./images/obstacle2/obstacle2.png'],
    cloud: ['./images/cloud/1.png'],
};

export function GetSprite(name) {
    return new PIXI.AnimatedSprite(spriteNames[name].map(path => PIXI.Texture.from(path)))
}
