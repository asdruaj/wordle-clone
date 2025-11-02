import { useEffect, useState } from 'react'
import fetchWord from '../helpers/fetchWord'
import Board from '../components/Board'
import Keyboard from '../components/Keyboard'
import useWordle from '../hooks/useWordle'
import Modal from '../components/Modal'

const Main = () => {
  const [solution, setSolution] = useState(null)
  const { currentGuess, handleKeydown, guesses, isCorrect, turn, usedKeys, resetGame } = useWordle(solution)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const getWord = async () => {
      const word = await fetchWord()
      setSolution(word)
    }

    getWord()
  }, [])

  // restart: fetch a new solution, reset the hook state, and close modal
  const handleRestart = async () => {
    const word = await fetchWord()
    setSolution(word)
    resetGame()
    setShowModal(false)
  }

  return (
    <>
      <main>
        <h1 className='text-center'>Wordle</h1>
        {
        solution &&
          <Board currentGuess={currentGuess} handleKeydown={handleKeydown} guesses={guesses} isCorrect={isCorrect} turn={turn} setShowModal={setShowModal} />
        }
        <Keyboard usedKeys={usedKeys} />
      </main>
      {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} onRestart={handleRestart} />}
    </>
  )
}

export default Main
