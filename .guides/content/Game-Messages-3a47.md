Our game has a nice way of writing text onto the bottom wall of our game.

Take a look at the code on the left. Here we are using a function called `showMessage()` that displays a message.

## Assigning a string variable
Don't forget, when you assign a string to a variable, you have to enclose the string in `'   '`. 

- `string = 'Hello World'` is valid.
- `string = Hello World` is wrong and will generate an error.


## Experiment
There are 2 ways you can write messages.

```javascript
showMessage('This is a message')
```

as we can see already. But we could also use a variable.

```javascript
msg = 'This is a message'
showMessage(msg)
```

You should be used to both of these approaches when we worked with nubers. It is exactly the same thing. The difference is that `showMessage()` expects to receive a string whereas a function like `addRandomMonster` expects to receive a number.
