import './GameOver.css'

const GameOver = ({retry}) => {
  return (
    <div>GameOver <br />
    <button className='btn btn-light' onClick={retry}>retry</button>

    </div>
  )
}

export default GameOver