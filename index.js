export let data = [0, 0, 0, 0, 0];

import { speedometer } from "./functions.js";

import { setButtons } from "./functions.js";

setButtons();

// document.getElementById("start").addEventListener("click", function () {
//   document.getElementById("input").style.transform = "translateX(-100%)";
//   cycle(data[0], "green", "GO");
// });

// document.getElementById("back").addEventListener("click", function () {
//   document.getElementById("input").style.transform = "translateX(0)";
// });

// function cycle(time, color, message) {
//   let time_counter = document.getElementById("time_counter");
//   time_counter.style.color = `${color}`;
//   time_counter.innerText = `${message}`;

//   let a = time;

//   //setInterval(time, 1000);
// }

let i = 0


setTimeout

//settimo(set, 20/100 * 1000)



function set(){
  i++
  speedometer(i, `green`);
}



