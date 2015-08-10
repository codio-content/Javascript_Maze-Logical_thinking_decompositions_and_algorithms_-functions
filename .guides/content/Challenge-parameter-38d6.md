
{Check It!|assessment}(test-2646396945)

|||guidance
## Solution

```javascript
function hitEnergyEvent() {
  energy += 5
  calcScore(6)
}

function hitMonsterEvent() {
  energy -= 5
  calcScore(6)
}

function calcScore(factor) {
  score = energy * factor / steps
}
```
|||