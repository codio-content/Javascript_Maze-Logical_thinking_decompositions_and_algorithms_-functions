|||challenge
In this challenge, we've provided you with the `calcScore()` function. We want you to complete the monster and energy event handlers so the scoring is correctly handled.

Use a factor of 6 as the function argument.

{Check it!!|custom}(ch-2)

|||

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