import { RotationControls } from 'Controls'

function onUpdateScene() {
  RotationControls.doRotatePlayer.call(this)
}

export default onUpdateScene
