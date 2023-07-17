const wt20 = document.getElementById("wt20");
const wt30 = document.getElementById("wt30");
const wt45 = document.getElementById("wt45");
const wt50 = document.getElementById("wt50");

const rt10 = document.getElementById("rt10");
const rt15 = document.getElementById("rt15");
const rt20 = document.getElementById("rt20");
const rt30 = document.getElementById("rt30");
const rt45 = document.getElementById("rt45");

const r4 = document.getElementById("r4");
const r6 = document.getElementById("r6");
const r8 = document.getElementById("r8");
const r10 = document.getElementById("r10");
const r12 = document.getElementById("r12");

const s1 = document.getElementById("s1");
const s2 = document.getElementById("s2");
const s3 = document.getElementById("s3");
const s4 = document.getElementById("s4");
const s5 = document.getElementById("s5");

const rr1 = document.getElementById("rr1");
const rr2 = document.getElementById("rr2");
const rr3 = document.getElementById("rr3");
const rr4 = document.getElementById("rr4");
const rr5 = document.getElementById("rr5");

const wt = ["20", "30", "45", "50"];
const rt = ["10", "15", "20", "30", "45"];
const s = ["1", "2", "3", "4", "5"];
const rr = ["1", "2", "3", "4", "5"];
const r = ["4", "6", "8", "10", "12"];

import { data } from "./index.js";

export function WTclicks() {
  wt20.addEventListener("click", function () {
    clearWorkTime();
    wt20.className = "btn clicked";
    data.workTime = 20;
  });

  wt30.addEventListener("click", function () {
    clearWorkTime();
    wt30.className = "btn clicked";
    data.workTime = 30;
  });

  wt45.addEventListener("click", function () {
    clearWorkTime();
    wt45.className = "btn clicked";
    data.workTime = 45;
  });

  wt50.addEventListener("click", function () {
    clearWorkTime();
    wt50.className = "btn clicked";
    data.workTime = 50;
  });
}

export function RTclicks() {
  rt10.addEventListener("click", function () {
    clearRestTime();
    rt10.className = "btn clicked";
    data.restTime = 10;
  });

  rt15.addEventListener("click", function () {
    clearRestTime();
    rt15.className = "btn clicked";
    data.restTime = 15;
  });

  rt20.addEventListener("click", function () {
    clearRestTime();
    rt20.className = "btn clicked";
    data.restTime = 20;
  });

  rt30.addEventListener("click", function () {
    clearRestTime();
    rt30.className = "btn clicked";
    data.restTime = 30;
  });

  rt45.addEventListener("click", function () {
    clearRestTime();
    rt45.className = "btn clicked";
    data.restTime = 45;
  });
}

export function Rclicks() {
  r4.addEventListener("click", function () {
    clearRound();
    r4.className = "btn clicked";
    data.rounds = 4;
  });

  r6.addEventListener("click", function () {
    clearRound();
    r6.className = "btn clicked";
    data.rounds = 6;
  });

  r8.addEventListener("click", function () {
    clearRound();
    r8.className = "btn clicked";
    data.rounds = 8;
  });

  r10.addEventListener("click", function () {
    clearRound();
    r10.className = "btn clicked";
    data.rounds = 10;
  });

  r12.addEventListener("click", function () {
    clearRound();
    r12.className = "btn clicked";
    data.rounds = 12;
  });
}

export function Sclicks() {
  s1.addEventListener("click", function () {
    clearSets();
    s1.className = "btn clicked";
    data.sets = 1;
    document.getElementById("sets").style.display = "none";
  });

  s2.addEventListener("click", function () {
    clearSets();
    s2.className = "btn clicked";
    data.sets = 2;
    document.getElementById("sets").style.display = "grid";
  });

  s3.addEventListener("click", function () {
    clearSets();
    s3.className = "btn clicked";
    data.sets = 3;
    document.getElementById("sets").style.display = "grid";
  });

  s4.addEventListener("click", function () {
    clearSets();
    s4.className = "btn clicked";
    data.sets = 4;
    document.getElementById("sets").style.display = "grid";
  });

  s5.addEventListener("click", function () {
    clearSets();
    s5.className = "btn clicked";
    data.sets = 5;
    document.getElementById("sets").style.display = "grid";
  });
}

export function RRclicks() {
  rr1.addEventListener("click", function () {
    clearRestRest();
    rr1.className = "btn clicked";
    data.rest = 0.5;
  });

  rr2.addEventListener("click", function () {
    clearRestRest();
    rr2.className = "btn clicked";
    data.rest = 1;
  });

  rr3.addEventListener("click", function () {
    clearRestRest();
    rr3.className = "btn clicked";
    data.rest = 1.5;
  });

  rr4.addEventListener("click", function () {
    clearRestRest();
    rr4.className = "btn clicked";
    data.rest = 2;
  });

  rr5.addEventListener("click", function () {
    clearRestRest();
    rr5.className = "btn clicked";
    data.rest = 3;
  });
}

export function clearWorkTime() {
  for (var i = 0; i < wt.length; i++) {
    document.getElementById(`wt${wt[i]}`).className = "btn";
  }
}

export function clearRestTime() {
  for (var i = 0; i < rt.length; i++) {
    document.getElementById(`rt${rt[i]}`).className = "btn";
  }
}

export function clearRound() {
  for (var i = 0; i < r.length; i++) {
    document.getElementById(`r${r[i]}`).className = "btn wider";
  }
}

export function clearSets() {
  for (var i = 0; i < s.length; i++) {
    document.getElementById(`s${s[i]}`).className = "btn wider";
  }
}

export function clearRestRest() {
  for (var i = 0; i < rr.length; i++) {
    document.getElementById(`rr${rr[i]}`).className = "btn";
  }
}

export function cycle(counter) {
  document.getElementById("SVG").style.animationDuration = `${
    counter + 1
  }000ms`;
  document.getElementById("SVG").style.animationName = `anim`;
  let time_counter = document.getElementById("time_counter");
  time_counter.innerText = "go";
  let a = counter;
  setInterval(function () {
    if (a == 0) {
      clearInterval();
    } else {
      a -= 1;
      time_counter.innerText = a;
    }
  }, 1000);
}
