import validate from "aproba";

class Stats {
  /**
   * @param {object} scene
   */
  constructor(scene) {
    validate("O", arguments);
    this.scene = scene;

    this.health = 100;
    this.hunger = 100;
    this.warmth = 100;
  }
}

export default Stats;
