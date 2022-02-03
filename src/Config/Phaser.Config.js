import Phaser from 'phaser'
import {
  onCreateScene,
  onPreloadScene,
  onUpdateScene,
} from 'Scene'

const PhaserConfig = ({ socket }) => ({
  type: Phaser.WEBGL,
  title: 'Wilders B4S',
  version: '1.0.0',
  // disableContextMenu: true,
  backgroundColor: '#9ab855',
  physics: { default: 'arcade' },
  render: {
    antialias: true,
    roundPixels: true,
    antialiasGL: true,
    transparent: true,
    powerPreference: 'high-performance',
  },
  scene: {
    create: function () {
      this.socket = socket
      return onCreateScene.apply(this)
    },
    preload: onPreloadScene,
    update: onUpdateScene,
  },
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
})

export default PhaserConfig
