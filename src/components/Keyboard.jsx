const Keyboard = () => {
  const keyboard = {
    firstRow: 'QWERTYUIOP',
    secondRow: 'ASDFGHJKL',
    thirdRow: 'ZXCVBNM'
  }

  return (
    <div className='mt-12'>
      <div id='firstRow' className='w-full flex gap-2 mb-2'>
        {
                keyboard.firstRow.split('').map((letter) => (
                  <div key={letter} className='w-16 h-16 flex bg-gray-200 items-center justify-center hover:scale-110 transition-all rounded-2xl font-bold text-2xl'>{letter}</div>
                ))
            }
      </div>
      <div id='secondRow' className='w-full flex justify-center gap-2 mb-2'>
        {
                keyboard.secondRow.split('').map((letter) => (
                  <div key={letter} className='w-16 h-16 flex bg-gray-200 items-center justify-center hover:scale-110 transition-all rounded-2xl font-bold text-2xl'>{letter}</div>
                ))
            }
      </div>
      <div id='thirdRow' className='w-full flex gap-2 justify-center select-none'>
        {
                keyboard.thirdRow.split('').map((letter) => (
                  <div key={letter} className='w-16 h-16 flex  bg-gray-200 items-center justify-center hover:scale-110 transition-all rounded-2xl font-bold text-2xl'>{letter}</div>
                ))
            }
      </div>
    </div>
  )
}

export default Keyboard
