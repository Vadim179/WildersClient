import {
  RotationControls,
  MovementControls,
} from 'Controls'

function onUpdateScene() {
  RotationControls.doRotatePlayer.call(this)
  MovementControls.doMovePlayer.call(this)
}

export default onUpdateScene
