import React from 'react'

const Modal = ({ isCorrect, turn, solution, onRestart }) => {
  return (
    <div className='bg-white/70 fixed w-full h-full top-0 left-0 '>
      <div className='max-w-md bg-white !p-10 rounded-xl m-[10%_auto] shadow-xl text-center'>
        {isCorrect && (
          <div>
            <h1>You Win!</h1>
            <p className='text-red-600 font-bold text-2xl uppercase tracking-widest '>{solution}</p>
            <p>You found the solution in {turn} guesses! 😁</p>
            <button onClick={onRestart} className='!px-4 !py-2 mt-4 bg-blue-600 text-white rounded'>Restart</button>
          </div>
        )}

        {!isCorrect && (
          <div className='max-w-md bg-white !p-10 rounded-xl m-[10%_auto] shadow-xl text-center'>
            <h1>I'm so sorry.</h1>
            <p className='text-red-600 font-bold text-2xl uppercase tracking-wide'>{solution}</p>
            <p>Better luck next time! 😔</p>
            <button onClick={onRestart} className='!px-4 !py-2 mt-4 bg-blue-600 text-white rounded'>Restart</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Modal
