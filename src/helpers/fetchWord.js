const fetchWord = async () => {
  try {
    const response = await fetch('https://random-word-api.herokuapp.com/word?number=100&length=5')

    const result = await response.json()

    const solution = result[Math.floor(Math.random() * 100)].word
    return solution
  } catch (error) {
    console.log(error)
  }
}

export default fetchWord
