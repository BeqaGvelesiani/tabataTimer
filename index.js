import { clearRestTime } from "./functions.js";
import { clearWorkTime } from "./functions.js";
import { clearSets } from "./functions.js";
import { clearRestRest } from "./functions.js";
import { clearRound } from "./functions.js";

import { WTclicks } from "./functions.js";
import { RTclicks } from "./functions.js";
import { Rclicks } from "./functions.js";
import { Sclicks } from "./functions.js";
import { RRclicks } from "./functions.js";

export let data = { workTime: 0, restTime: 0, rounds: 0, sets: 1, rest: 0 };

import { cycle } from "./functions.js";

clearWorkTime();
clearRestTime();
clearRestRest();
clearRound();

WTclicks();
RTclicks();
Sclicks();
RRclicks();
Rclicks();

document.getElementById("back").addEventListener("click", function () {
  document.getElementById("input").style.transform = "translateX(0)";
});

document.getElementById("start").addEventListener("click", function () {
  console.log(data);
  if(data.workTime){
    document.getElementById("input").style.transform = "translateX(-100%)";
    cycle(data.workTime);
  }
  
});
