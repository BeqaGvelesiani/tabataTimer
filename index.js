export let data = [0, 0, 0, 0, 0];

import { execute } from "./functions.js";

import { setButtons } from "./functions.js";

setButtons();

document.getElementById("start").addEventListener("click", function () {
  document.getElementById("input").style.transform = "translateX(-100%)";
  execute(data[0], "green", "GO");
});

document.getElementById("back").addEventListener("click", function () {
  document.getElementById("input").style.transform = "translateX(0)";
  execute(0, "white", "0");
});







