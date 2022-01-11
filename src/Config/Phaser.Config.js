import Phaser from "phaser"
import { onCreateScene, onPreloadScene, onUpdateScene } from "Scene"

const PhaserConfig = {
  type: Phaser.AUTO,
  roundPixels: false,
  physics: { default: "arcade" },
  scene: {
    preload: onPreloadScene,
    create: onCreateScene,
    update: onUpdateScene,
  },
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
}

export default PhaserConfig
