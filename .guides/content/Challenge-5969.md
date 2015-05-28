|||challenge
We want you to write a function that calculates the score.

We have provided you with the following event handlers

- `hitMonster()`
- `hitEnergy()`

You should 

- create a function that calculates the game score using this simple formula. 

$$
score = \dfrac{energy \times 5}{steps}
$$

- call this function from each of the event handlers
- add 5 to the player energy if you collect energy
- subtract 5 from the player energy if you touch a monster

**Important:** do not call your function `score()` as this is used by the game as a variable to hold the score.

|||

|||guidance
## Solution
Note that `energy += 5` is shorthand for `energy = energy + 5`.

```javascript
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
```
|||

## Take note
If you have solved this challenge, you can see one of the really great things about functions.

**A function can be called lots of times from many places.**

This is extremely important for these 2 reasons

1. You only have to write code once rather than writing the same code in lots of places/
2. It actually makes the code much neater and easer to read, so even if you only use it once, it makes the code much more readable.

