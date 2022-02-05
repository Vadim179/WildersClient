import { Player } from 'Config/Prefabs.Config'
import { BaseManager } from './BaseManager'
import { PlayerStore } from 'Stores'

export class PlayerManager extends BaseManager {
  _doSetupStore() {
    this.store = new PlayerStore()
  }

  _doSetup() {
    this.doUpdatePlayer()

    this.socket.on('user left', ({ ID }) => {
      this.handlePlayerLeft(ID)
    })

    this.socket.on('room update', updates => {
      this.handleRoomUpdates(updates)
    })
  }

  // Update frequency per second
  UPDATE_FREQ = 30

  LAST_PLAYER_X = 0
  LAST_PLAYER_Y = 0
  LAST_PLAYER_A = 0

  doUpdatePlayer() {
    const { player } = this.scene

    setInterval(() => {
      const shouldUpdate =
        player.x !== this.LAST_PLAYER_X ||
        player.y !== this.LAST_PLAYER_Y ||
        player.angle !== this.LAST_PLAYER_A

      if (shouldUpdate) {
        this.LAST_PLAYER_X = player.x
        this.LAST_PLAYER_Y = player.y
        this.LAST_PLAYER_A = player.angle

        this.socket.emit('update', {
          x: this.LAST_PLAYER_X,
          y: this.LAST_PLAYER_Y,
          a: this.LAST_PLAYER_A,
        })
      }
    }, 1000 / this.UPDATE_FREQ)
  }

  handleRoomUpdates(updates) {
    const mySocketID = this.socket.id

    Object.entries(updates).forEach(([ID, data]) => {
      if (ID === mySocketID) return
      const { x, y, a, username } = data

      if (this.store._hasItem(ID)) {
        const player = this.store._getItem(ID)
        player.setPosition(x, y)
        player.setAngle(a)
        return
      }

      const player = new Player(this.scene, x, y)
      player.setUsername(username)
      player.setAngle(a)
      this.store._setItem(ID, player)
    })
  }

  handlePlayerLeft(ID) {
    const player = this.store._getItem(ID)
    player?.destroy()
  }
}
