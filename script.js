const playersInput = document.querySelectorAll(".player-input");
const playersInputBtn = document.querySelectorAll(".player-input-btn");
const game = document.querySelector("#game");
const infoText = document.querySelector("#info-text");
const playAreas = document.querySelectorAll(".play-area");
const resetBtn = document.querySelector("#reset-button");

playersInputBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const player = document.getElementById(btn.dataset.player);
    if (player.value !== "") {
      btn.innerText = "Confirmado";
      btn.classList.add("confirmed");
      btn.disabled = true;
      player.classList.add("confirmed");
      player.setAttribute("disabled", "");
    } else {
      alert("Digite um nome!");
    }
    startGame();
  });
});

function startGame() {
  if (
    playersInput[0].classList.contains("confirmed") &&
    playersInput[1].classList.contains("confirmed")
  ) {
    const randomNumber = Math.floor(Math.random() * 2);
    game.style.display = "grid";
    infoText.innerHTML = `Turno de: <span class='current-player'>${playersInput[randomNumber].value}</span>`;
  }
}

playAreas.forEach((area) => {
  area.addEventListener("click", () => {
    const currentPlayer = document.querySelector(".current-player");
    if (currentPlayer.innerText === playersInput[0].value) {
      area.innerText = "X";
      area.style.pointerEvents = "none";
      currentPlayer.innerText = playersInput[1].value;
      verifyDraw();
      verifyVictory("X", playersInput[0].value);
    } else {
      area.innerText = "O";
      area.style.pointerEvents = "none";
      currentPlayer.innerText = playersInput[0].value;
      verifyDraw();
      verifyVictory("O", playersInput[1].value);
    }
  });
});

function verifyVictory(marker, player) {
  const winnerText = `O jogador <span class='winning-player'>${player}</span> venceu o jogo!`;

  if (
    playAreas[0].innerText === marker &&
    playAreas[1].innerText === marker &&
    playAreas[2].innerText === marker
  ) {
    infoText.innerHTML = winnerText;
    playAreas[0].classList.add("winner-area");
    playAreas[1].classList.add("winner-area");
    playAreas[2].classList.add("winner-area");
    resetBtn.style.display = "block";
  } else if (
    playAreas[3].innerText === marker &&
    playAreas[4].innerText === marker &&
    playAreas[5].innerText === marker
  ) {
    infoText.innerHTML = winnerText;
    playAreas[3].classList.add("winner-area");
    playAreas[4].classList.add("winner-area");
    playAreas[5].classList.add("winner-area");
    resetBtn.style.display = "block";
  } else if (
    playAreas[6].innerText === marker &&
    playAreas[7].innerText === marker &&
    playAreas[8].innerText === marker
  ) {
    infoText.innerHTML = winnerText;
    playAreas[6].classList.add("winner-area");
    playAreas[7].classList.add("winner-area");
    playAreas[8].classList.add("winner-area");
    resetBtn.style.display = "block";
  } else if (
    playAreas[0].innerText === marker &&
    playAreas[3].innerText === marker &&
    playAreas[6].innerText === marker
  ) {
    infoText.innerHTML = winnerText;
    playAreas[0].classList.add("winner-area");
    playAreas[3].classList.add("winner-area");
    playAreas[6].classList.add("winner-area");
    resetBtn.style.display = "block";
  } else if (
    playAreas[1].innerText === marker &&
    playAreas[4].innerText === marker &&
    playAreas[7].innerText === marker
  ) {
    infoText.innerHTML = winnerText;
    playAreas[1].classList.add("winner-area");
    playAreas[4].classList.add("winner-area");
    playAreas[7].classList.add("winner-area");
    resetBtn.style.display = "block";
  } else if (
    playAreas[2].innerText === marker &&
    playAreas[5].innerText === marker &&
    playAreas[8].innerText === marker
  ) {
    infoText.innerHTML = winnerText;
    playAreas[2].classList.add("winner-area");
    playAreas[5].classList.add("winner-area");
    playAreas[8].classList.add("winner-area");
    resetBtn.style.display = "block";
  } else if (
    playAreas[0].innerText === marker &&
    playAreas[4].innerText === marker &&
    playAreas[8].innerText === marker
  ) {
    infoText.innerHTML = winnerText;
    playAreas[0].classList.add("winner-area");
    playAreas[4].classList.add("winner-area");
    playAreas[8].classList.add("winner-area");
    resetBtn.style.display = "block";
  } else if (
    playAreas[2].innerText === marker &&
    playAreas[4].innerText === marker &&
    playAreas[6].innerText === marker
  ) {
    infoText.innerHTML = winnerText;
    playAreas[2].classList.add("winner-area");
    playAreas[4].classList.add("winner-area");
    playAreas[6].classList.add("winner-area");
    resetBtn.style.display = "block";
  }
}

function verifyDraw() {
  let markedAreas = 0;
  playAreas.forEach((area) => {
    if (area.innerText !== "") {
      markedAreas++;
    }
  });

  if (markedAreas === 9) {
    infoText.innerText = "O jogo empatou!";
    resetBtn.style.display = "block";
  }
}

resetBtn.addEventListener("click", () => {
  playAreas.forEach((area) => {
    area.innerText = "";
    area.classList.remove("winner-area");
    area.style.pointerEvents = "auto";
  });

  const randomNumber = Math.floor(Math.random() * 2);

  infoText.innerHTML = `Turno de: <span class='current-player'>${playersInput[randomNumber].value}</span>`;
  resetBtn.style.display = "none";
});
