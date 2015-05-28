|||challenge
Create a function `calcScore()` that returns the score based on the usual formula of 

$$
score = \dfrac{energy \times 5}{steps}
$$

|||

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
