//variables
// 1- I will create a function named "startGame" to start the game and restart the game.
function startGame() {
  console.log('the game has started')
}
// 2- I will create a function named "CheckWin" to check if the user win by checking if all the letter was correct and in the right position it will consider "playerWin" else "tryAgain"
const boxes = document.querySelectorAll('.box')
const keyboardButtons = document.querySelectorAll('#keyboard button')
const targetWord = 'STYLE'

function checkGuess() {
  let enteredWord = ''
  boxes.forEach((box) => {
    enteredWord += box.textContent
  })

  if (enteredWord === targetWord) {
    alert 'Congratulations! You guessed the word!'
  } else {
    alert 'Oops! Try again.'
  }
}
console.log(targetWord)

function resetBoxes() {
  boxes.forEach((box) => {
    box.textContent = ''
  })
  currentBoxIndex = 0
}

// Add click event listeners to all keyboard buttons
keyboardButtons.forEach((button) => {
  button.addEventListener('click', handleButtonClick)
})
// 3- I will create a function named "playerWin" if the user win the game by putting all the letter correct and in the right position.
let currentBoxIndex = 0
// 4- I will create a function named "tryAgain" if the user lose the game by putting the wrong letter.
function handleButtonClick(event) {
  const buttonValue = event.target.textContent.toUpperCase()
  // I wil create function named "retry" is the user cannot guess the right letters.
  if (buttonValue === 'DELETE') {
    if (currentBoxIndex > 0) {
      currentBoxIndex--
      boxes[currentBoxIndex].textContent = ''
    }
  }
  // If "enter" is clicked, you could add a "submit word" logic here (not implemented here)
  else if (buttonValue === 'ENTER') {
    checkGuess()
  } else {
    if (currentBoxIndex < boxes.length) {
      boxes[currentBoxIndex].textContent = buttonValue
      currentBoxIndex++
    }
  }
}

keyboardButtons.forEach((button) => {
  button.addEventListener('click', handleButtonClick)
})
// 5- I will create a function named "checkPosition" to check if its in the right position, if the letter right it will be green, if not right position and its correct letter it will be yellow

//I will create an if statement if the user press any letter it will go inside the box

// I will do an if statement to check if the letter was correct and in the right position it will flip the box and make it green background, and I will create another if condition if the letter correct but the position not correct it will flip the box and make it yellow background, also if the letter was wrong letter it will keep it grey background.

// I will addEventListener to check guess feedback on key presses As each letter is typed, check if it’s correct (green), partially correct (yellow), or incorrect (grey).
