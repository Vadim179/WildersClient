import doInitializeInput from "Config/KeyboardInput";
import doInitializeUI from "GUI";

// INFO _ PLAYER _
import Player from "Entities/Ecosystem/Player";
import Camera from "Entities/Camera";

// INFO _ HILLS _
import SmallHill from "Entities/Environment/Hills/SmallHill";
import LargeHill from "Entities/Environment/Hills/LargeHill";

// INFO _ FLOWERS _
import LargeFlower from "Entities/Environment/Flowers/LargeFlower";
import SmallFlower from "Entities/Environment/Flowers/SmallFlower";

// INFO _ PEBBLES _
import LargePebble from "Entities/Environment/Pebbles/LargePebble";
import MediumPebble from "Entities/Environment/Pebbles/MediumPebble";
import SmallPebble from "Entities/Environment/Pebbles/SmallPebble";

// INFO _ ORES _
import LargeGold from "Entities/Environment/Ores/LargeGold";
import LargeRock from "Entities/Environment/Ores/LargeRock";
import SmallRock from "Entities/Environment/Ores/SmallRock";

// INFO _ TREES _
import LargeTree1 from "Entities/Environment/Trees/LargeTree1";
import MediumTree2 from "Entities/Environment/Trees/MediumTree2";
import SmallTree1 from "Entities/Environment/Trees/SmallTree1";

export default function create() {
  this.player = new Player(this, 0, 0);
  this.camera = new Camera(this, 0, 0);

  doInitializeInput.call(this);
  doInitializeUI.call(this);

  new LargeHill(this, 0, 0);
  new SmallHill(this, -200, 200);

  new LargeFlower(this, -100, -80);
  new SmallFlower(this, 180, 40);

  new LargePebble(this, -150, 160);
  new MediumPebble(this, 120, -100);
  new SmallPebble(this, 140, 300);

  new SmallTree1(this, -200, -200);
  new LargeTree1(this, -350, -50);
  new MediumTree2(this, 250, -100);
  new LargeRock(this, -340, -220);

  new SmallRock(this, 200, 120);
  new LargeGold(this, 100, 200);
}
