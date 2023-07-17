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

clearWorkTime();
clearRestTime();
clearRestRest();
clearRound();

WTclicks();
RTclicks();
Sclicks();
RRclicks();
Rclicks();

document.getElementById("start").addEventListener("click", function () {
  console.log(data);
});

