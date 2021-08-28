import validate from "aproba";

class Stats {
  /**
   * @param {object} scene
   */
  constructor(scene) {
    validate("O", arguments);
    this.scene = scene;
  }
}

export default Stats;
