import { useState } from "react";
import { Row, Container, Col, Button } from "react-bootstrap";
import { MdRefresh } from 'react-icons/md'
import { Board } from './components'
import './App.css'

const setInitSquare = () => [['', '', ''], ['', '', ''], ['', '', '']]

function App() {
  const [squares, setSquares] = useState(setInitSquare());
  const [turn, setTurn] = useState('X');
  const [winner, setWinner] = useState('')

  let setSquare = (i, j) => {
    if (winner == '' && squares[i][j] == '') {
      squares[i][j] = turn
      setSquares([...squares])

      if (checkForWin(flatten())) {
        setWinner(turn)
      } else {
        if (checkForDraw(flatten())) {
          setWinner('Draw')
        } else {
          setTurn(turn == 'X' ? 'O' : 'X')
        }
      }
    }
  }

  const flatten = () => squares.reduce((acc, cur) => [...acc, ...cur], [])

  const checkThree = (a, b, c) => {
    if (!a || !b || !c) return false
    return a === b && b === c
  }

  function checkForWin(flatGrid) {
    const [nw, n, ne, w, c, e, sw, s, se] = flatGrid

    return (
      checkThree(nw, n, ne) ||
      checkThree(w, c, e) ||
      checkThree(sw, s, se) ||
      checkThree(nw, w, sw) ||
      checkThree(n, c, s) ||
      checkThree(ne, e, se) ||
      checkThree(nw, c, se) ||
      checkThree(ne, c, sw)
    )
  }

  function checkForDraw(flatGrid) {
    return (
      flatGrid.filter(Boolean).length === flatGrid.length
    )
  }

  let resetBoard = () => {
    console.log(squares, setInitSquare())
    setSquares([...setInitSquare()])
    setWinner('')
    setTurn('X')
    console.log(squares)
  }

  return (
    <Container fluid className="bg-dark text-light p-5" style={{ height: '100vh' }}>
      <Row className="justify-content-center">
        <h1>TIC-TAC-TOE</h1>
      </Row>

      <Container>
        <Row className="justify-content-center align-items-center my-3">
          <h2 className="text text-info">{turn + "'s Turn"}</h2>
        </Row>
      </Container>
      <Row className="justify-content-center align-items-center my-5">
        <Board squares={squares} turn={turn} setSquare={setSquare} />
      </Row>
      <Row className="justify-content-center align-items-center text-success">
        <Button variant="outline-danger" onClick={resetBoard}><MdRefresh size="1.5em" /> Reset</Button>
      </Row>
      {winner ? <Row className="justify-content-center align-items-center text-success my-2">
        {winner == 'Draw' ? <h2 className="text-info">It's a Draw!</h2> : <h2 className="text-success">{winner} Won!!</h2>}
      </Row> : ''}

    </Container>
  );
}





export default App;
