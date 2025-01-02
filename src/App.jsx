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

  console.log(words)
  return (
    <div className='container'>
      <main className='App'>
        {gameStage === 'start' && <StartScreen/>}
        {gameStage === 'game' && <Game/>}
        {gameStage === 'end' && <GameOver/>}
      </main> 
    </div>
  )
}

export default App
