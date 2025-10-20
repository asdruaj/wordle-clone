import { useState } from 'react'

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0)
  const [currentGuess, setCurrentGuess] = useState('')
  const [guesses, setGuesses] = useState(Array(6).fill(null)) // formatted guesses
  const [history, setHistory] = useState([]) // string guesses
  const [isCorrect, setIsCorrect] = useState(false)

  // Format a guess into an array of letter objexts
  // e.g [{key: a, status: 'correct'}]
  const formatGuess = () => {
    const solutionArray = [...solution]
    const formattedGuess = [...currentGuess].map(char => {
      return { char: char.toUpperCase(), status: 'absent' }
    })

    // check if letter is correct

    formattedGuess.forEach((item, i) => {
      if (solutionArray[i] === item.char) {
        formattedGuess[i].status = 'correct'
        solutionArray[i] = null
      }
    })

    formattedGuess.forEach((item, i) => {
      if (item.status === 'correct') return

      if (solutionArray.includes(item.char)) {
        formattedGuess[i].status = 'present'
        solutionArray[solutionArray.indexOf(item.char)] = null
      }
    })

    return formattedGuess
  }

  // add a new guess to the guesses state
  // update the isCorrect state if the guess is correct
  // add one to the turn state
  const adddNewGuess = (formattedGuess) => {
    if (currentGuess.toLocaleUpperCase() === solution) {
      setIsCorrect(true)
    }

    setGuesses(prev => {
      const newGuesses = [...prev]

      newGuesses[turn] = formattedGuess
      return newGuesses
    })

    setHistory((prev) => {
      return [...prev, currentGuess]
    })

    setTurn(prev => ++prev)

    setCurrentGuess('')
  }

  // handle keydown event & track current guess
  // if user presses enter, add the new guess
  const handleKeydown = ({ key }) => {
    if (key === 'Enter') {
      // only add guess if turn is less than 5
      if (turn > 5) {
        console.log('You used all your guesses')
        return
      }
      // do not allow duplicate words
      if (history.includes(currentGuess)) {
        console.log('you already tried that word')
        return
      }
      // check word is 5 char long
      if (currentGuess.length !== 5) {
        console.log('word must be 5 characters long')
        return
      }
      const formatted = formatGuess()
      adddNewGuess(formatted)
    }

    if (key === 'Backspace' && currentGuess.length > 0) {
      setCurrentGuess(prev => (prev.slice(0, -1)))
      return
    }

    if (/^[A-Za-z]$/.test(key) && currentGuess.length < 5) {
      setCurrentGuess(prev => (prev + key))
    }
  }

  return { turn, currentGuess, guesses, isCorrect, handleKeydown }
}

export default useWordle
