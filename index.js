
import { RRclicks } from "./functions.js";

export let data = [0, 0, 0, 1, 0];

import { cycle } from "./functions.js";

import { buttonAction } from "./functions.js";

buttonAction('wt20', 0, 20);
buttonAction("wt30", 0, 30);
buttonAction("wt45", 0, 45);
buttonAction("wt50", 0, 50);
//----------//
buttonAction("rt10", 1, 10);
buttonAction("rt15", 1, 15);
buttonAction("rt20", 1, 20);
buttonAction("rt30", 1, 30);
buttonAction("rt45", 1, 45);
//---------//
buttonAction("r4", 2, 2);
buttonAction("r6", 2, 6);
buttonAction("r8", 2, 8);
buttonAction("r10", 2, 10);
buttonAction("r12", 2, 12);
//---------//
buttonAction("s1", 3, 1);
buttonAction("s2", 3, 2);
buttonAction("s3", 3, 3);
buttonAction("s4", 3, 4);
buttonAction("s5", 3, 5);
//---------//
buttonAction("rr1", 4, 30*1000);
buttonAction("rr2", 4, 60 * 1000);
buttonAction("rr3", 4, 90 * 1000);
buttonAction("rr4", 4, 120 * 1000);
buttonAction("rr5", 4, 180 * 1000);


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
