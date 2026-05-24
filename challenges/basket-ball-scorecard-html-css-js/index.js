let homeScore = document.getElementById("score-home-id");
let guestScore = document.getElementById("score-guest-id");

let homeCount = 0;
let guestCount = 0;

function incrementByOneHome() {
  homeCount += 1;
  homeScore.textContent = homeCount;
}

function incrementByTwoHome() {
  homeCount += 2;
  homeScore.textContent = homeCount;
}

function incrementByThreeHome() {
  homeCount += 3;
  homeScore.textContent = homeCount;
}

// guest
function incrementByOneGuest() {
  guestCount += 1;
  guestScore.textContent = guestCount;
}

function incrementByTwoGuest() {
  guestCount += 2;
  guestScore.textContent = guestCount;
}

function incrementByThreeGuest() {
  guestCount += 3;
  guestScore.textContent = guestCount;
}
