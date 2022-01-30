import { useEffect } from 'react'
import PhaserConfig from 'Config/Phaser.Config'
import Phaser from 'phaser'

function GamePage() {
  useEffect(() => {
    new Phaser.Game(PhaserConfig)
  }, [])

  return null
}

export default GamePage
