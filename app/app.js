import "./klondike/scoring.js" // implies "use strict";
import "./klondike/klondike.js";
import "./klondike/board.js";
import "./klondike/game.js";

angular.module("solitaire", ["klondike", "ngDraggable"]);
