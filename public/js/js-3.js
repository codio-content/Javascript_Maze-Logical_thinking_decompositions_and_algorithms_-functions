
function hitEnergyEvent() {
  newScore = calcScore()
  showMessage('The new score is : ' + newScore )
}

function hitMonsterEvent() {
  showMessage('The new score is : ' + calcScore() )
}

function calcScore() {
  score = energy * 5 / steps
  return score
}