import validate from 'aproba'
import { BaseManager } from './BaseManager'

export class GameManager extends BaseManager {
  constructor(socket, scene) {
    super(socket, scene)
    this.managers = []
  }

  addManager(Manager) {
    validate('F', arguments)
    const manager = new Manager(this.socket, this.scene)
    this.managers.push(manager)
    return this
  }
}
