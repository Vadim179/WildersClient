import * as Prefabs from 'Config/Prefabs.Config'
import { doInitializeKeys } from 'Config/Game.Config'
import { InventoryGUI } from 'GUI'
import {
  MovementControls,
  RotationControls,
} from 'Controls'

function onCreateScene() {
  this.player = new Prefabs.Player(this, 0, 0)
  this.camera = new Prefabs.Camera(this, 0, 0)
  this.camera.startFollow(this.player)

  doInitializeKeys.call(this)
  MovementControls.doStreamPosition.call(this)
  RotationControls.doStreamAngle.call(this)

  new InventoryGUI(this)

  new Prefabs.LargeHill(this, 0, 0)
  new Prefabs.SmallHill(this, -200, 200)

  new Prefabs.LargeFlower(this, -100, -80)
  new Prefabs.SmallFlower(this, 180, 40)

  new Prefabs.LargePebble(this, -150, 160)
  new Prefabs.MediumPebble(this, 120, -100)
  new Prefabs.SmallPebble(this, 140, 300)

  new Prefabs.SmallTree(this, -200, -200)
  new Prefabs.LargeTree(this, -350, -50)
  new Prefabs.MediumDarkTree(this, 250, -100)
  new Prefabs.LargeRock(this, -340, -220)

  new Prefabs.SmallRock(this, 200, 120)
  new Prefabs.LargeGold(this, 100, 200)
}

export default onCreateScene
