// firstly load the background
document.querySelector('body').style.backgroundImage = 'url(bg.gif?' + Date.now() + ')';
// functie for random cijfer 
function getRandomIntInclusive(min, max) {
    min = Math.ceil(1);
    max = Math.floor(10);
  return Math.floor(Math.random() * (max - min + 1) + min);
    // Максимум и минимум включаются
}
//random cijfers
let cijfer1 = getRandomIntInclusive();
let cijfer2 = getRandomIntInclusive();
let cijfer3 = getRandomIntInclusive();
// variables
// playing with answer
// just score
let score = 0;
document.getElementById("score").textContent= score;
// needs to be solve
function bereikenen() {
  if (score < 3) {
    return cijfer1 + cijfer2}; 
  if (score < 5) {
    return cijfer1 * cijfer2};
  if (score < 7) {
    return cijfer1 / cijfer2};
  if (score < 9) {
    return (cijfer1 + cijfer2) * cijfer3};
  if (score >= 10) {
    return cijfer1 * cijfer2 * cijfer3}
  return 0;
};
// show to user the example 
function ShowExample() {
  if (score < 3) {
    return cijfer1 + " + " + cijfer2;};
  if (score < 5) {
    return cijfer1 + " x " + cijfer2;}; 
  if (score < 7) {
    return cijfer1 + " / " + cijfer2;}; 
    if (score < 9) {
    return "(" + cijfer1 + " + " + cijfer2 + ")" + " * " + cijfer3}; 
    if (score >= 10) {
    return cijfer1 + " * " + cijfer2 + " * " + cijfer3;
  }
}
document.getElementById("exmpl").textContent = ShowExample();


// moeilijk om uit te leggen 

// fout massege

let fout = "verwacht iets anders van jouw.";
let idk = "Let op, hoe minder punten heb je-hoe makkelijkere iemand anders kan je hacken."
// chekken of daar een int komt of str
function chekk(answer) {
  let raw = document.getElementById("answer").value;
  if (raw === "") {
    // chek empty
    document.querySelector('.huita').textContent = "It`s empty!";
    document.querySelector('.huita').classList.add("ueban");
    setTimeout(function() {
      document.querySelector('.huita').classList.remove("ueban");
    }, 3000) } else
  if (isNaN(answer)) {
    // if its not a number
    document.querySelector('.huita').textContent = fout;
    document.querySelector('.huita').classList.toggle("ueban");
    setTimeout(function() {
    document.querySelector('.huita').classList.remove("ueban");
    }, 3000);
  } else if (answer != bereikenen()) {
    // if its not the good one
    document.querySelector('.huita').textContent = idk;
    document.querySelector('.huita').classList.toggle("ueban");
    setTimeout(function() {
    document.querySelector('.huita').classList.remove("ueban");
    }, 3000);
  } else { 
    document.querySelector('.huita').textContent = "Good Job";
    document.querySelector('.huita').classList.toggle("ueban");
    setTimeout(function() {
    document.querySelector('.huita').classList.remove("ueban");
    }, 3000);
  }
}


// change background based on score


// function ChangeGIF(score) { 
//   if (score --) {
//     document.querySelector('body').classList.toggle("second");
//         setTimeout (function() {
//       document.querySelector('.body').classList.remove("second");
//     document.querySelector('body').style.backgroundImage = 
//     'url(output_high_quality.gif?' + Date.now() + ')';}, 3000);
//     }
//   else if (score === 15) {
//     document.querySelector('body').classList.toggle("second");
//     setTimeout (function() {
//     document.querySelector('.body').classList.remove("second");
//     document.querySelector('body').style.backgroundImage = 
//     'url(output_high_quality.gif?' + Date.now() + ')';}, 3000);
//   }
//   else if (score ++) {
//     document.querySelector('body').classList.toggle("second");
//     setTimeout (function() {
//     document.querySelector('.body').classList.remove("second");
//     document.querySelector('body').style.backgroundImage = 
//     'url(output_high_quality.gif?' + Date.now() + ')';}, 3000);
//     }
//   }


function ChangeGIF(score) {
  if (score < 0) 
  { 
    document.querySelector('.huita').textContent = "....";
    document.querySelector('.huita').classList.toggle("sosi");
      setTimeout (function() {
    document.querySelector('body').style.backgroundImage = 'url(fout.gif?' + Date.now() + ')';
  }, 3000);
  } else if (score --){
    setTimeout(function(){

    document.querySelector('body').style.backgroundImage= 'url(fout.gif?' + Date.now() + ')'},3000);
    } else if (score ++) {
      setTimeout(function() {
      document.querySelector('body').style.backgroundImage= 'url(gg.gif?' + Date.now() + ')'},3000);
    } else if (score >= 0) {
      document.querySelector('.huita').classList.remove("sosi");
    }
    else {
      document.querySelector('body').style.backgroundImage =
      'url(bg.gif?' + Date.now() + ')';
  }
}

// chek the answer, grow up the score, working only after using the bottom
document.getElementById("chek").addEventListener("click", function() {

  let raw = document.getElementById("answer").value;
  let answer = Number(raw);
  chekk(answer);
  ChangeGIF(score)
  if (answer === bereikenen()) { 
    // good answer
  score ++;
  console.log("score:", score);
  console.log("bereikenen:", bereikenen());
  console.log("answer:", answer)
  }
  else if ( score === 15)//needed to chek it
  {
    console.log(cho);
  } else if (raw !== "" && !isNaN(answer) && answer !== bereikenen()) { 
    // bad answer
    score--;
    console.log("score:", score);

  }
  else {
    // needed to chek it too as wel
    console.log("loh blya");
  }
  // change the numbers after using the bottom
  cijfer1 = getRandomIntInclusive();
  cijfer2 = getRandomIntInclusive();
  cijfer3 = getRandomIntInclusive();
  document.getElementById("exmpl").textContent = ShowExample();
  document.getElementById("score").textContent= score;
  document.getElementById("answer").value = "";
})
// the answer works if you press enter
document.getElementById("answer").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    document.getElementById("chek").click();
  }
});
