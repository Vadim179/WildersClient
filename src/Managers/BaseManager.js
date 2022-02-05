import validate from 'aproba'

export class BaseManager {
  constructor(socket, scene) {
    validate('OO', arguments)
    this.socket = socket
    this.scene = scene

    this._doSetupStore()
    this._doSetup()
  }

  _doSetupStore() {}
  _doSetup() {}
}
