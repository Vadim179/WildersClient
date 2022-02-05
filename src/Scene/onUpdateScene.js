import { RotationControls } from 'Controls'

function onUpdateScene(time, delta) {
  RotationControls.doRotatePlayer.call(this, delta)
}

export default onUpdateScene
