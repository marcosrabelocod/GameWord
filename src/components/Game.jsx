import { useState, useRef } from 'react'
import './Game.css'

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score
}) => {

  const [letter, setLetter] = useState("")
  const letterInputRef = useRef(null)
  
  const handleSubmit = (e) => {
    e.preventDefault()

    verifyLetter(letter)
    //deixa a caixa vazia após preencher
    setLetter("")

    letterInputRef.current.focus()
  }
  
  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Adivilhe a palavra: </h1>
      <h3 className='tip'>
        A palavea esta relacionada com: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem: <span>{guesses}</span> tentativas</p>
      <div className="wordContainer">
        {letters.map((letter, i) =>
        guessedLetters.includes(letter) ?(
          <span className="letter" key={i}>{letter}</span>
        ):(
          <span className="blankSquare" key={i}></span>
        ))}
      </div>
      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          name='letter' maxLength='1' 
          required 
          onChange={(e) => setLetter(e.target.value)}
          value={letter}
          ref={letterInputRef}
          />
          <button type="submit">Jogar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
        
        <span>b, </span>
      </div>
      <button className='btn btn-light' onClick={verifyLetter}>Fim de jogo</button>
    </div>
  )
}

export default Game