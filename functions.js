import { data } from "./index.js";

export function buttonAction(buttonID, index, buttonVariable) {
  document.getElementById(`${buttonID}`).addEventListener("click", () => {
    data[index] = buttonVariable;
    console.log(data);
  });
  document.getElementById(`${buttonID}`).className = "wider";
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
