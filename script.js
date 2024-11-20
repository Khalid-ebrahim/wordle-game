// Constant //
let word = 'cloud'
let currentRow = 0
let currentCol = 0
let guess = ''
const maxRows = 6
// 1- I will create a function named "startGame" to start the game and restart the game.
function startGame() {
  resetGame()
}
// I will create an if statement if the user press any letter it will go inside the box
function resetGame() {
  const boxes = document.querySelectorAll('.box')
  boxes.forEach((box) => {
    box.textContent = ''
    box.style.backgroundColor = 'white'
  })
  currentRow = 0
  currentCol = 0
  guess = ''
  document.getElementById('win-message').style.display = 'none'
  document.getElementById('lose-message').style.display = 'none'
}

document.querySelector('.keyboard').addEventListener('click', (e) => {
  const key = e.target.textContent
  if (key === 'Enter') {
    submitGuess()
  } else if (key === 'Delete') {
    deleteLetter()
  } else if (key.length === 1 && /^[a-zA-Z]$/.test(key)) {
    addLetter(key)
  }
})

function addLetter(letter) {
  if (currentCol < 5 && currentRow < maxRows) {
    const index = currentRow * 5 + currentCol
    const boxes = document.querySelectorAll('.box')
    boxes[index].textContent = letter
    guess += letter.toLowerCase()
    currentCol++
  }
}

function deleteLetter() {
  if (currentCol > 0) {
    currentCol--
    const index = currentRow * 5 + currentCol
    const boxes = document.querySelectorAll('.box')
    boxes[index].textContent = ''
    guess = guess.slice(0, -1)
  }
}
// I will do an if statement to check if the letter was correct and in the right position it will flip the box and make it green background, and I will create another if condition if the letter correct but the position not correct it will flip the box and make it yellow background, also if the letter was wrong letter it will keep it grey background.
function submitGuess() {
  if (guess.length === 5) {
    const boxes = document.querySelectorAll('.box')
    for (let i = 0; i < 5; i++) {
      const index = currentRow * 5 + i
      const letterBox = boxes[index]
      const letter = guess[i]

      if (letter === word[i]) {
        letterBox.style.backgroundColor = 'green'
      } else if (word.includes(letter)) {
        letterBox.style.backgroundColor = 'yellow'
      } else {
        letterBox.style.backgroundColor = 'gray'
      }
    }
    // 2- I will create a function named "CheckWin" to check if the user win by checking if all the letter was correct and in the right position it will consider "playerWin" else "tryAgain"
    if (guess === word) {
      document.getElementById('win-message').style.display = 'block'
      return
    }
    currentRow++
    currentCol = 0
    guess = ''

    if (currentRow === maxRows) {
      document.getElementById('lose-message').style.display = 'block'
    }
  }
}
