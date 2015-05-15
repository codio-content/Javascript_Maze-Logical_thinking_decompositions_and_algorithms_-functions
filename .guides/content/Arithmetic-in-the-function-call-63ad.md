Just to really drive variable arithmetic home, we are now going to use the addition approach with variables but this time we are going to do the arithmetic in the function call itself.

## Explanation
Take a look at the code on the left and see what is happening.

1. We are creating a variable called `numMonsters`.
1. addMonster() is called passing in `numMonsters` as the arguments.
1. addEnergy is called next and interestingly we are now passing in `numMonsters + 2` as the argument.
1. addWalls is called and we are passing in `addMonsters` multiplied by 3 which results in 6 wall sections.

## Play
Play around with this and use all 4 operators to see what happens.

- `+` addition
- `-` subtraction
- `*` multiplication
- `/` division (we've not covered that but give it a go anyway)

