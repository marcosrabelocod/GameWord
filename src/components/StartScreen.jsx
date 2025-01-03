import './StartScreen.css'

const StartScreen = ({startGame}) => {
  return (
    <div className='start'>
        <h1>Game Word</h1>
        <p>clique para começar</p>
        <button className='btn btn-light' onClick={startGame}>Start</button>
    </div>
  )
}

export default StartScreen