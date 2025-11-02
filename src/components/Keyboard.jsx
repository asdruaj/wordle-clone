import React from 'react'

const Keyboard = ({ usedKeys, setCurrentGuess, currentGuess, handleKeydown }) => {
  const row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
  const row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
  const row3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm']

  const handleKeyboardClick = (key) => {
    if (key === 'BACKSPACE') {
      if (handleKeydown) {
        handleKeydown({ key: 'Backspace' })
        return
      }
      if (currentGuess.length > 0) setCurrentGuess(prev => prev.slice(0, -1))
      return
    }

    if (key === 'ENTER') {
      if (handleKeydown) {
        handleKeydown({ key: 'Enter' })
        return
      }
      return
    }

    // append letter (ensure lowercase)
    setCurrentGuess(prev => prev + key.toLowerCase())
  }

  const Key = ({ label, value, isSpecial }) => {
    const color = value && usedKeys ? usedKeys[value] : ''
    const baseClass = 'cursor-pointer m-1.5 rounded-lg leading-12 font-bold uppercase text-xl inline-block text-center'
    const specialClass = isSpecial ? 'px-4 py-2 min-w-[5rem] text-sm bg-gray-200' : 'w-11 h-11'
    return (
      <div onClick={() => handleKeyboardClick(value || label)} className={`${color} ${baseClass} ${specialClass}`}>
        {label}
      </div>
    )
  }

  return (
    <div className='max-w-xl m-[20px_auto]'>
      <div className='flex justify-center mb-2'>
        {row1.map(k => <Key key={k} label={k} value={k} />)}
      </div>
      <div className='flex justify-center mb-2'>
        {row2.map(k => <Key key={k} label={k} value={k} />)}
      </div>
      <div className='flex justify-center items-center'>
        <Key label='Enter' value='ENTER' isSpecial />
        <div className='flex mx-2'>
          {row3.map(k => <Key key={k} label={k} value={k} />)}
        </div>
        <Key label='⌫' value='BACKSPACE' isSpecial />
      </div>
    </div>
  )
}

export default Keyboard
