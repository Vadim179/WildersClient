import "index.css";
import Phaser from "phaser";
import io from "socket.io-client";
import Config from "Config/Phaser";

const socket = io("http://localhost:8000");
const _config = Config(socket);
new Phaser.Game(_config);
