let homeEl = document.getElementById("home-score");
let guestEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

function updateScore(team, value) {
  if (team === "home") {
    homeScore += value
    homeEl.textContent = homeScore
  } else if (team === "guest") {
    guestScore += value
    guestEl.textContent = guestScore
  }
}
