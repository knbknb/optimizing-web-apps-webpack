import "./klondike/scoring"; // implies "use strict";
import "./klondike/klondike";
import "./klondike/board";
import "./klondike/game";

angular.module("solitaire", ["klondike", "ngDraggable"]);
