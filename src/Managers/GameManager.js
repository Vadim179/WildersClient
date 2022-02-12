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

  _doSetup() {
    const WORLD_SIZE = 20000
    const x = -WORLD_SIZE / 2
    const y = -WORLD_SIZE / 2
    const sizeX = WORLD_SIZE
    const sizeY = WORLD_SIZE
    this.scene.physics.world.setBounds(x, y, sizeX, sizeY)
  }
}
