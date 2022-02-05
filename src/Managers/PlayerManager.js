import { Player } from 'Config/Prefabs.Config'
import { BaseManager } from './BaseManager'
import { PlayerStore } from 'Stores'

export class PlayerManager extends BaseManager {
  _doSetupStore() {
    this.store = new PlayerStore()
  }

  _doSetup() {
    this.store._setItem(this.socket.id, this.scene.player)

    this.doUpdatePlayerAngle()
    this.doUpdatePlayerXY()

    this.socket.on('fix position', ({ ID, x, y }) => {
      this.handlePlayerFixPosition(ID, x, y)
    })

    this.socket.on('user left', ({ ID }) => {
      this.handlePlayerLeft(ID)
    })

    this.socket.on('room update', updates => {
      this.handleRoomUpdates(updates)
    })
  }

  PLAYER_A = 0
  doUpdatePlayerAngle() {
    const { player } = this.scene

    setInterval(() => {
      if (this.PLAYER_A !== player.angle) {
        this.PLAYER_A = player.angle
        this.socket.emit('updateA', { a: player.angle })
      }
    }, 1000 / 30)
  }

  PLAYER_X = 0
  PLAYER_Y = 0
  doUpdatePlayerXY() {
    const { player, Keys } = this.scene
    const { W, A, S, D } = Keys

    Array.of(W, A, S, D).forEach(key => {
      key.on('down', () => {
        if (key === D) this.PLAYER_X = 1
        if (key === S) this.PLAYER_Y = 1
        if (key === W) this.PLAYER_Y = -1
        if (key === A) this.PLAYER_X = -1

        this.socket.emit('updateXY', {
          x: this.PLAYER_X,
          y: this.PLAYER_Y,
        })
      })

      key.on('up', () => {
        if (key === A) this.PLAYER_X = D.isDown ? 1 : 0
        if (key === S) this.PLAYER_Y = W.isDown ? -1 : 0
        if (key === W) this.PLAYER_Y = S.isDown ? 1 : 0
        if (key === D) this.PLAYER_X = A.isDown ? -1 : 0

        this.socket.emit('updateXY', {
          x: this.PLAYER_X,
          y: this.PLAYER_Y,
        })
      })
    })

    setInterval(() => {
      this.socket.emit('fix position', {
        x: player.x,
        y: player.y,
      })
    }, 1000 / 2)
  }

  PLAYER_SPEED = 150
  handleRoomUpdates(updates) {
    Object.entries(updates).forEach(([ID, data]) => {
      const { x, y, a, username } = data

      if (this.store._hasItem(ID)) {
        const player = this.store._getItem(ID)
        if (ID !== this.socket.id) player.setAngle(a)

        let xVelocity = x * this.PLAYER_SPEED
        let yVelocity = y * this.PLAYER_SPEED

        if (x !== 0 && y !== 0) {
          xVelocity = (x * this.PLAYER_SPEED) / Math.sqrt(2)
          yVelocity = (y * this.PLAYER_SPEED) / Math.sqrt(2)
        }

        player.body?.setVelocityX(xVelocity || 0)
        player.body?.setVelocityY(yVelocity || 0)
        return
      }

      const player = new Player(this.scene, x, y)
      player.setUsername(username)
      player.setAngle(a)
      this.store._setItem(ID, player)
    })
  }

  handlePlayerFixPosition(ID, x, y) {
    const player = this.store._getItem(ID)
    player?.setPosition(x, y)
  }

  handlePlayerLeft(ID) {
    const player = this.store._getItem(ID)
    player?.destroy()
  }
}
