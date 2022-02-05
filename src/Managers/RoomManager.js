import { BaseManager } from './BaseManager'

export class RoomManager extends BaseManager {
  _doSetup() {
    const username = sessionStorage.getItem('username')
    const roomID = sessionStorage.getItem('roomID')
    this.socket.emit('join room', { roomID, username })
  }
}
