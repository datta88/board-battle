import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [player, setPlayer] = useState(1);
  const [board, setBoard] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
  })
  const [winner, setWinner] = useState(null)

  const reset = () => {
    setPlayer(1);
    setBoard({
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
    })
    setWinner(null);
  }

  const checkwinner = () => {
    const symboll = player === 1 ? "🐵" : "🐱"
    console.log(player)
    console.log(board)

    if (board[1] === symboll && board[2] === symboll && board[3] === symboll)
      setWinner(player);
    else if (board[4] === symboll && board[5] === symboll && board[6] === symboll)
      setWinner(player);
    else if (board[7] === symboll && board[8] === symboll && board[9] === symboll)
      setWinner(player);
    else if (board[1] === symboll && board[4] === symboll && board[7] === symboll)
      setWinner(player);
    else if (board[2] === symboll && board[5] === symboll && board[8] === symboll)
      setWinner(player);
    else if (board[3] === symboll && board[6] === symboll && board[9] === symboll)
      setWinner(player);
    else if (board[1] === symboll && board[5] === symboll && board[9] === symboll)
      setWinner(player);
    else if (board[3] === symboll && board[5] === symboll && board[7] === symboll)
      setWinner(player);
    else {
      return
    }
    setPlayer(player === 1 ? 2 : 1);
  }

  const play = (boxNo) => {
    if (board[boxNo] !== "" || winner !== null) {
      return;
    }
    console.log("box no : ", boxNo);
    if (player === 1) {
      setBoard({ ...board, [boxNo]: "🐵" })
    }
    else {
      setBoard({ ...board, [boxNo]: "🐱" })
    }

    setPlayer(player === 1 ? 2 : 1)

  }

  useEffect(() => {
    checkwinner();
  }, [board])
  return (
    <>
      <div className='center'>
        <h1 className='text-center main-container'>🐵 Hic Tac Toe🐱</h1>
        <div className='text-center player-tag'>
          <span className='player-span'>Player 1 :  🐵 </span>
          <span className='player-span'>Current Player :  {player === 1 ? "🐵" : "🐱"}</span>
          <span className='player-span'>Player 2 :  🐱 </span>
        </div>
        {
          winner ?
            (
              <h1 className='winner-text'>Winner is  {winner === 1 ? "🐵" : "🐱"}</h1>
            ) : null
        }
        <div className='board'>
          <div className='row'>
            <div className='box' onClick={() => { play(1) }}>{board[1]}</div>
            <div className='box' onClick={() => { play(2) }}>{board[2]}</div>
            <div className='box' onClick={() => { play(3) }}>{board[3]}</div>
          </div>
          <div className='row'>
            <div className='box' onClick={() => { play(4) }}>{board[4]}</div>
            <div className='box' onClick={() => { play(5) }}>{board[5]}</div>
            <div className='box' onClick={() => { play(6) }}>{board[6]}</div>
          </div>
          <div className='row'>
            <div className='box' onClick={() => { play(7) }}>{board[7]}</div>
            <div className='box' onClick={() => { play(8) }}>{board[8]}</div>
            <div className='box' onClick={() => { play(9) }}>{board[9]}</div>
          </div>
        </div>

        <button type='button' className='reset-btn' onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export default App;
