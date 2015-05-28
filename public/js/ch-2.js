
function hitEnergyEvent() {
  energy += 5
}

function hitMonsterEvent() {
  energy -= 5
}

function calcScore(factor) {
  score = energy * factor / steps
}