import { Player } from 'Config/Prefabs.Config'
import { BaseManager } from './BaseManager'
import { PlayerStore } from 'Stores'

export class PlayerManager extends BaseManager {
  _doSetupStore() {
    const { scene, socket } = this
    this.store = new PlayerStore()
    this.store._setItem(socket.id, scene.player)
  }

  _doSetup() {
    this.doEmitPlayerRotation()
    this.doEmitPlayerPosition()
    this.doEmitPlayerMovement()

    this.socket.on('player left', ({ ID }) => {
      this.handlePlayerLeft(ID)
    })

    this.socket.on('room update', updates => {
      this.handleRoomUpdates(updates)
    })
  }

  doEmitPlayerRotation() {
    const { player } = this.scene
    let rotation = 0

    setInterval(() => {
      if (rotation !== player.rotation) {
        rotation = player.rotation
        this.socket.emit('update rotation', { rotation })
      }
    }, 1000 / 60)
  }

  doEmitPlayerPosition() {
    const { player } = this.scene

    setInterval(() => {
      this.socket.emit('update position', {
        posX: player.x,
        posY: player.y,
      })
    }, 1000 / 20)
  }

  doEmitPlayerMovement() {
    const { Keys } = this.scene
    const { W, A, S, D } = Keys

    let x = 0
    let y = 0

    Object.values(Keys).forEach(key => {
      key.on('down', () => {
        if (key === D) x = 1
        if (key === S) y = 1
        if (key === W) y = -1
        if (key === A) x = -1
        this.socket.emit('update movement', { x, y })
      })

      key.on('up', () => {
        if (key === A) x = D.isDown ? 1 : 0
        if (key === S) y = W.isDown ? -1 : 0
        if (key === W) y = S.isDown ? 1 : 0
        if (key === D) x = A.isDown ? -1 : 0
        this.socket.emit('update movement', { x, y })
      })
    })
  }

  handleRoomUpdates(updates) {
    const speed = 150

    Object.entries(updates).forEach(([ID, data]) => {
      const { x, y, rotation, posX, posY, username } = data

      if (this.store._hasItem(ID)) {
        const player = this.store._getItem(ID)

        if (ID !== this.socket.id) {
          player.setRotation(rotation)

          if (
            player.x - posX > 50 ||
            player.y - posY > 50 ||
            player.x - posX < -50 ||
            player.y - posY < -50
          ) {
            player.setPosition(posX, posY)
          }
        }

        let xVelocity = x * speed
        let yVelocity = y * speed

        if (x !== 0 && y !== 0) {
          xVelocity = (x * speed) / Math.sqrt(2)
          yVelocity = (y * speed) / Math.sqrt(2)
        }

        player.body?.setVelocityX(xVelocity || 0)
        player.body?.setVelocityY(yVelocity || 0)
        return
      }

      const player = new Player(this.scene, posX, posY)
      player.setUsername(username)
      player.setRotation(rotation)
      this.store._setItem(ID, player)
    })
  }

  handlePlayerLeft(ID) {
    const player = this.store._getItem(ID)
    player?.destroy()
  }
}
