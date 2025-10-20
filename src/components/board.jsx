import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'

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
    <div>{currentGuess}</div>
  )
}

export default Board
