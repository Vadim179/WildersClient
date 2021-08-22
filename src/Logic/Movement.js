import validate from "aproba";

class Movement {
  /**
   * @param {object} player
   * @param {object} scene
   */
  constructor(player, scene) {
    validate("OO", arguments);

    this.player = player;
    this.scene = scene;

    this.X = 0;
    this.Y = 0;
    this.SPEED = 200;
  }

  _handleYMovement() {
    const { W, S } = this.scene;
    if (W.isDown) this.Y = -1;
    else if (S.isDown) this.Y = 1;
    else this.Y = 0;
  }

  _handleXMovement() {
    const { A, D } = this.scene;
    if (D.isDown) this.X = 1;
    else if (A.isDown) this.X = -1;
    else this.X = 0;
  }

  doMove() {
    this._handleYMovement();
    this._handleXMovement();

    if (this.X !== 0 && this.Y !== 0) {
      this.player.body.setVelocityX((this.X * this.SPEED) / Math.sqrt(2));
      this.player.body.setVelocityY((this.Y * this.SPEED) / Math.sqrt(2));
      return;
    }

    this.player.body.setVelocityX(this.X * this.SPEED);
    this.player.body.setVelocityY(this.Y * this.SPEED);
  }
}

export default Movement;
