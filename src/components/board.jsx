import React, { useEffect } from 'react'
import Row from './Row'

const Board = ({ currentGuess, guesses, isCorrect, turn, handleKeydown, setShowModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown)

    if (isCorrect) {
      setTimeout(() => {
        setShowModal(true)
      }, 2000)
      window.removeEventListener('keydown', handleKeydown)
    }

    if (turn > 5) {
      setTimeout(() => {
        setShowModal(true)
      }, 2000)
      window.removeEventListener('keydown', handleKeydown)
    }

    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [handleKeydown, isCorrect])

  useEffect(() => {
    console.log(guesses, turn, isCorrect)
  }, [guesses, turn, isCorrect])

  return (
    <div className='grid gap-2'>
      {
        guesses.map((guess, i) => {
          if (turn === i) {
            return <Row key={i} currentGuess={currentGuess} />
          }
          return <Row key={i} guess={guess} />
        })
      }
    </div>

  )
}

export default Board
