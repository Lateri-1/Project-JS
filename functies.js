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

// cuzz if its / u will get stupid examples 
function getDivisionNumbers() {
    let answer = getRandomIntInclusive(2, 9);
    let divisor = getRandomIntInclusive(2, 5);
    let dividend = answer * divisor;
    return {
        dividend: dividend,
        divisor: divisor,
        answer: answer
    };
}
// just score
let score = 0;
document.getElementById("score").textContent = score;

// needs to be solve
function bereikenen() {
  if (score < 3) { return cijfer1 + cijfer2 };
  if (score < 5) { return cijfer1 * cijfer2 };
  if (score < 7) { return cijfer1 / cijfer2 };
  if (score < 9) { return (cijfer1 + cijfer2) * cijfer3 };
  if (score >= 10) { return cijfer1 * cijfer2 * cijfer3 }
  return 0;
};

// show to user the example 
let bla = "Om te hacken moet je dit oplossen: "
function ShowExample() {
  if (score < 3) { return bla + cijfer1 + " + " + cijfer2 };
  if (score < 5) { return bla + cijfer1 + " x " + cijfer2 };
  if (score < 7) { return bla + cijfer1 + " / " + cijfer2 };
  if (score < 9) { return bla + "(" + cijfer1 + " + " + cijfer2 + ")" + " * " + cijfer3 };
  if (score >= 10) { return bla + cijfer1 + " * " + cijfer2 + " * " + cijfer3 };
}
document.getElementById("exmpl").textContent = ShowExample();

function generateNumbers() {
  if (score >= 5 && score < 7) {
    let data = getDivisionNumbers();
    cijfer1 = data.dividend;
    cijfer2 = data.divisor;
  } else {
    cijfer1 = getRandomIntInclusive();
    cijfer2 = getRandomIntInclusive();
  }
  cijfer3 = getRandomIntInclusive();
}

// fout massege
let fout = "verwacht iets anders van jouw.";
let idk = "Let op, hoe minder punten heb je-hoe makkelijkere iemand anders kan je hacken."

// ДОБАВЛЕНО: свечение по краям экрана
// result = "good" -> зелёное, result = "bad" -> красное
function triggerGlow(result) {
  const body = document.querySelector('body');
  if (result === "good") {
    body.classList.add("glow-green");
    setTimeout(() => body.classList.remove("glow-green"), 800);
  } else {
    body.classList.add("glow-red");
    setTimeout(() => body.classList.remove("glow-red"), 800);
  }
}

// ДОБАВЛЕНО: временно меняет текст примера на success/fail сообщение
// после duration миллисекунд возвращает обратно пример
function showTempText(text, cssClass, duration) {
  const exmpl = document.getElementById("exmpl");
  exmpl.textContent = text;
  exmpl.className = "p " + cssClass;
  setTimeout(() => {
    exmpl.textContent = ShowExample();
    exmpl.className = "p";
  }, duration);
}

// chekken of daar een int komt of str
function chekk(answer) {
  let raw = document.getElementById("answer").value;
  if (raw === "") {
    document.querySelector('.huita').textContent = "It`s empty!";
    document.querySelector('.huita').classList.add("ueban");
    const element = document.getElementById("shake-wrapper");
    setTimeout(function() {
      document.querySelector('.huita').classList.remove("ueban");
    }, 1500);
  } else if (isNaN(answer)) {
    document.querySelector('.huita').textContent = fout;
    document.querySelector('.huita').classList.toggle("ueban");
    setTimeout(function() {
      document.querySelector('.huita').classList.remove("ueban");
    }, 1500);
  } else if (answer != bereikenen()) {
    document.querySelector('.huita').textContent = idk;
    document.querySelector('.huita').classList.toggle("sosi");
    setTimeout(function() {
      document.querySelector('.huita').classList.remove("sosi");
    }, 1500);
  } else {
    document.querySelector('.huita').textContent = "Good Job";
    document.querySelector('.huita').classList.toggle("vahui");
    setTimeout(function() {
      document.querySelector('.huita').classList.remove("vahui");
    }, 1500);
  }
}

// SHAKE
function triggerShake(result) {
  if (result === "bad") {
    const element = document.getElementById("shake-wrapper"); // ← меняем цель
    element.classList.add('shake-animation');
    setTimeout(() => {
      element.classList.remove('shake-animation');
    }, 500);
  }
}

// chek the answer, grow up the score, working only after using the bottom
document.getElementById("chek").addEventListener("click", function() {

  let raw = document.getElementById("answer").value;
  let answer = Number(raw);
  chekk(answer);

  if (answer === bereikenen()) {
    // good answer
    score++;
    triggerGlow("good");
    showTempText("Success! Access granted", "gg", 1200);
    console.log("score:", score);
    console.log("bereikenen:", bereikenen());
    console.log("answer:", answer);
  }
  else if (score === 15) {
    console.log(cho);
  } else if (raw !== "" && !isNaN(answer) && answer !== bereikenen()) {
    // bad answer
    score--;
    triggerGlow("bad");
    showTempText("Too bad... Try again", "nb", 1200);
    triggerShake("bad");
    console.log("score:", score);
  }
  else {
    console.log("loh blya");
  }

  generateNumbers();
  // если поле было пустое или введены буквы — showTempText не вызывался,
  // поэтому обновляем пример вручную
  if (raw === "" || isNaN(answer)) {
    document.getElementById("exmpl").textContent = ShowExample();
  }
  document.getElementById("score").textContent = score;
  document.getElementById("answer").value = "";
  document.getElementById("answer").focus();
});

// the answer works if you press enter
document.getElementById("answer").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    document.getElementById("chek").click();
  }
});