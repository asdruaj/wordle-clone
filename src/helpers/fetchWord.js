const fetchWord = async () => {
  try {
    const response = await fetch('https://random-words-api.kushcreates.com/api?language=en&length=5&type=uppercase&words=100')

    const result = await response.json()

    const solution = result[Math.floor(Math.random() * 100)].word
    return solution
  } catch (error) {
    console.log(error)
  }
}

export default fetchWord
