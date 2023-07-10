import { Badge } from "react-bootstrap";

import { FaTimes, FaRegCircle } from "react-icons/fa";

function Square(props) {
  return (
    <Badge
      bg="dark"
      className="square col"
      onClick={() => props.setSquare(props.keyi, props.keyj)}
    >
      <span>
        {props.value ? (
          props.value === "X" ? (
            <FaTimes size="100px" />
          ) : (
            <FaRegCircle size="100px" />
          )
        ) : (
          ""
        )}
      </span>
    </Badge>
  );
}

export default Square;
