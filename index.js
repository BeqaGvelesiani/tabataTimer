let data = [0, 0, 0, 1, 0];

buttonAction("wt20", 0, 20000);
buttonAction("wt30", 0, 30000);
buttonAction("wt45", 0, 45000);
buttonAction("wt50", 0, 50000);
//----------//
buttonAction("rt10", 1, 10000);
buttonAction("rt15", 1, 15000);
buttonAction("rt20", 1, 20000);
buttonAction("rt30", 1, 30000);
buttonAction("rt45", 1, 45000);
//---------//
buttonAction("r4", 2, 4);
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
buttonAction("rr1", 4, 30000);
buttonAction("rr2", 4, 60000);
buttonAction("rr3", 4, 90000);
buttonAction("rr4", 4, 120000);
buttonAction("rr5", 4, 180000);

// document.getElementById("start").addEventListener("click", function () {
//   console.log(data);
//   if(data.workTime){
//     document.getElementById("input").style.transform = "translateX(-100%)";
//     cycle(data.workTime);
//   }
// });

// document.getElementById("back").addEventListener("click", function () {
//   document.getElementById("input").style.transform = "translateX(0)";
// });

function buttonAction(buttonID, index, buttonVariable) {
  document.getElementById(`${buttonID}`).addEventListener("click", () => {
    clrearButtons(index);
    data[index] = buttonVariable;
    document.getElementById(`${buttonID}`).className = "btn wider clicked";
    if (data[3] != 1) {
      data[4] = 30000;
      document.getElementById("sets").style.display = "block";
    }else{
      document.getElementById("sets").style.display = "none";
      data[4] = 0;
    }
    data[index] = buttonVariable;
    console.log(data);
  });
}

// function cycle(counter) {
//   document.getElementById("SVG").style.animationDuration = `${
//     counter + 1
//   }000ms`;
//   document.getElementById("SVG").style.animationName = `anim`;
//   let time_counter = document.getElementById("time_counter");
//   time_counter.innerText = "go";
//   let a = counter;
//   setInterval(function () {
//     if (a == 0) {
//       clearInterval();
//     } else {
//       a -= 1;
//       time_counter.innerText = a;
//     }
//   }, 1000);
// }

function clrearButtons(a) {
  if (a === 0) {
    document.getElementById("wt20").className = "btn";
    document.getElementById("wt30").className = "btn";
    document.getElementById("wt45").className = "btn";
    document.getElementById("wt50").className = "btn";
  }
  if (a === 1) {
    document.getElementById("rt10").className = "btn";
    document.getElementById("rt15").className = "btn";
    document.getElementById("rt20").className = "btn";
    document.getElementById("rt30").className = "btn";
    document.getElementById("rt45").className = "btn";
  }
  if (a === 2) {
    document.getElementById("r4").className = "btn wider";
    document.getElementById("r6").className = "btn wider";
    document.getElementById("r8").className = "btn wider";
    document.getElementById("r10").className = "btn wider";
    document.getElementById("r12").className = "btn wider";
  }
  if (a === 3) {
    document.getElementById("s1").className = "btn wider";
    document.getElementById("s2").className = "btn wider";
    document.getElementById("s3").className = "btn wider";
    document.getElementById("s4").className = "btn wider";
    document.getElementById("s5").className = "btn wider";
  }
  if (a === 4) {
    document.getElementById("rr1").className = "btn";
    document.getElementById("rr2").className = "btn";
    document.getElementById("rr3").className = "btn";
    document.getElementById("rr4").className = "btn";
    document.getElementById("rr5").className = "btn";
  }
}
