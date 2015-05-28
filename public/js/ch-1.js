
function hitEnergyEvent() {
  energy += 5
  calcScore()
}

function hitMonsterEvent() {
  energy -= 5
  calcScore()
}

function calcScore() {
  score = energy*5/steps
}