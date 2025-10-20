import { useEffect, useState } from 'react'
import fetchWord from '../helpers/fetchWord'
import Board from '../components/Board'

const Main = () => {
  const [solution, setSolution] = useState(null)
  const [guesses, setGuesses] = useState(Array(6)
    .fill(null))
  const [currentGuess, setCurrentGuess] = useState('')

  useEffect(() => {
    const getWord = async () => {
      const word = await fetchWord()
      setSolution(word)
    }

    getWord()
  }, [])

  return (
    <main>
      <h1 className='text-center'>Wordle</h1>
      <p>{solution}</p>
      {
        solution &&
          <Board solution={solution} />
      }
    </main>
  )
}

export default Main
