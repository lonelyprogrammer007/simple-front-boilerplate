let root = document.getElementById("root");
let btnRock = document.getElementById("btn-rock");
let bntPaper = document.getElementById("btn-paper");
let bntScissors = document.getElementById("btn-scissors");

// Escojer la accion del usuario ✅
// Generar una jugada aleatoria de la maquina ✅
// mostrar el resultado del juego ✅

let rockAtion = () => {
  let randomPlay = getRandomInt(3);
  let result = genrateResult("rock", randomPlay);
  alert(`${result} - ${translateNumberToAction(randomPlay)}`);
};

let paperAction = () => {
  let randomPlay = getRandomInt(3);
  let result = genrateResult("paper", randomPlay);
  alert(`${result} - ${translateNumberToAction(randomPlay)}`);
};

let scissorsAction = () => {
  let randomPlay = getRandomInt(3);
  let result = genrateResult("scissors", randomPlay);
  alert(`${result} - ${translateNumberToAction(randomPlay)}`);
};

let getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

let genrateResult = (userPlay, machinePlay) => {
  if (userPlay === "paper") {
    if (machinePlay === 0) {
      return "Empate! 🤍";
    }
    if (machinePlay === 1) {
      return "Pierdes! ❤️";
    }
    if (machinePlay === 2) {
      return "Ganaste! 💚";
    }
  }
  if (userPlay === "rock") {
    if (machinePlay === 0) {
      return "Pierdes! ❤️";
    }
    if (machinePlay === 1) {
      return "Ganaste! 💚";
    }
    if (machinePlay === 2) {
      return "Empate! 🤍";
    }
  }
  if (userPlay === "scissors") {
    if (machinePlay === 0) {
      return "Ganaste! 💚";
    }
    if (machinePlay === 1) {
      return "Empate! 🤍";
    }
    if (machinePlay === 2) {
      return "Pierdes! ❤️";
    }
  }
};

let translateNumberToAction = (actionNumber) => {
  if (actionNumber === 0) {
    return "Papel!";
  }
  if (actionNumber === 1) {
    return "Tijera!";
  }
  if (actionNumber === 2) {
    return "Piedra!";
  }
};

btnRock.addEventListener("click", rockAtion);
bntPaper.addEventListener("click", paperAction);
bntScissors.addEventListener("click", scissorsAction);
