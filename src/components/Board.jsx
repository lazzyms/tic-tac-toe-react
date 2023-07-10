import Square from "./Square";
import { Row, Card } from "react-bootstrap";

function Board(props) {
  return (
    <Card bg="light" text="dark" style={{ width: "max-content" }}>
      <Card.Body>
        {props.squares.map((box, i) => (
          <Row key={i} className="row align-content-center justify-content-center">
            {box.map((val, j) => (
              <Square
                value={val}
                    key={j}
                    keyi={i}
                    keyj={j}
                setSquare={() => props.setSquare(i, j)}
              />
            ))}
          </Row>
        ))}
      </Card.Body>
    </Card>
  );
}

export default Board;
