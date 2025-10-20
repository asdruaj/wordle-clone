import React from 'react'

const Row = ({ guess, currentGuess }) => {
  if (guess) {
    return (
      <div className='flex gap-2'>
        {
        guess.map((item, i) => (
          <div key={i} className={item.status + ' cell'}>{item.char}</div>
        ))
        }
      </div>
    )
  }

  if (currentGuess) {
    const letters = currentGuess.split('')

    return (
      <div className='flex gap-2 '>
        {
        letters.map((item, i) => (
          <div key={i} className='cell'>{letters[i]}</div>
        ))
        }
        {[...Array(5 - letters.length)].map((_, i) => (
          <div key={i} className='cell' />
        ))}
      </div>
    )
  }

  return (
    <div className='flex justify-center text-center gap-2 items-center'>
      <div className='cell' />
      <div className='cell' />
      <div className='cell' />
      <div className='cell' />
      <div className='cell' />
    </div>
  )
}

export default Row
