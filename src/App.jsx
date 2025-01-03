//Css
import './App.css'

//Rooks
import { useCallback, useEffect, useState } from 'react'

//data
import wordList from "./data/words"

//componentes
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'


const stage = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'}
]

function App() {
  const [gameStage, setGameStage] = useState(stage[0].name)
  const [words] = useState(wordList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])

  const [guessedLetters, setGuessedLetters] =useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(3)
  const [score, setScore] = useState(0)

  const pickedWordAndCategory = () => {
    //pick random category
    const categories = Object.keys(words)
    //selecionar uma categoria aleatoria
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]

    console.log(category)
    //selecionar uma palavra aleatoria da categoria
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    console.log(word)

    return {word, category}
 }

  //start game
  const startGame = () =>{
    const {word, category} = pickedWordAndCategory()

    let wordLetters = word.split("")
    //converter letras da palavra para minusculas antes de fazer as checagens
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    console.log(wordLetters)
    console.log(word, category)

    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stage[1].name)
  }

  //processar letra
  const verifyLetter = (letter) => {
    console.log(letter)
  }

  //reiniciar o jogo
  const retry = () => {
    setGameStage(stage[0].name)
  }

  return (
    <div className='container'>
      <main className='App'>
        {gameStage === 'start' && <StartScreen startGame ={startGame}/>}
        {gameStage === 'game' && 
        <Game 
        verifyLetter = {verifyLetter} 
        pickedWord={pickedWord} 
        pickedCategory={pickedCategory} 
        letters = {letters}
        guessedLetters = {guessedLetters}
        wrongLetters = {wrongLetters}
        guesses = {guesses}
        score = {score}
        />}
        {gameStage === 'end' && <GameOver retry = {retry}/>}
      </main> 
    </div>
  )
}

export default App
