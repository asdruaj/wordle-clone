import { useState } from 'react'

const Keyboard = ({ usedKeys }) => {
  const [letters] = useState([
    { key: 'a' },
    { key: 'b' },
    { key: 'c' },
    { key: 'd' },
    { key: 'e' },
    { key: 'f' },
    { key: 'g' },
    { key: 'h' },
    { key: 'i' },
    { key: 'j' },
    { key: 'k' },
    { key: 'l' },
    { key: 'm' },
    { key: 'n' },
    { key: 'o' },
    { key: 'p' },
    { key: 'q' },
    { key: 'r' },
    { key: 's' },
    { key: 't' },
    { key: 'u' },
    { key: 'v' },
    { key: 'w' },
    { key: 'x' },
    { key: 'y' },
    { key: 'z' },
  ])

  return (
    <div className='max-w-xl m-[20px_auto] flex flex-wrap justify-center'>
      {letters.map(l => {
        const color = usedKeys[l.key]
        return (
          <div className={`${color} m-1.5 w-11 h-11 bg-gray-100 rounded-lg leading-12 font-bold uppercase text-xl inline-block text-center`} key={l.key}>{l.key}</div>
        )
      })}
    </div>
  )
}

export default Keyboard
