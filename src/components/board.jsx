import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Row from './Row'

const Board = ({ solution }) => {
  const { currentGuess, handleKeydown, guesses, isCorrect, turn } = useWordle(solution)

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown)

    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [handleKeydown])

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
