
{Check It!|assessment}(test-2150872117)

|||guidance
## Solution

```javascript
function hitEnergyEvent() {
  energy += 5
  score = calcScore()
}

function hitMonsterEvent() {
  energy -= 5
  score = calcScore()  
}

function calcScore() {
  return energy * 5 / steps
}
```
|||
