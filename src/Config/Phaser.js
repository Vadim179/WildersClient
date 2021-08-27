import Phaser from "phaser";
import preload from "Logic/Scene/Preload";
import update from "Logic/Scene/Update";
import create from "Logic/Scene/Create";

const CONFIG = (socket) => ({
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  roundPixels: false,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  scene: {
    preload,
    create: function () {
      return create.apply(this, [socket]);
    },
    update: function () {
      return update.apply(this, [socket]);
    },
  },
});

export default CONFIG;
