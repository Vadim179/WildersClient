/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react'
import { useIO } from 'Contexts'

import PhaserConfig from 'Config/Phaser.Config'
import Phaser from 'phaser'

function GamePage() {
  const socket = useIO()

  useEffect(() => {
    new Phaser.Game(PhaserConfig({ socket }))
    return () => socket.emit('leave room')
  }, [])

  return null
}

export default GamePage
