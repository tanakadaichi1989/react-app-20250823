import Square from "./Square";
import { useState } from "react";

const Board = () => {

    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));

    const handleSquareClick = (index) => {
        if (squares[index] || calculateWinner(squares)) { return; }
        const newSquares = squares.slice();
        newSquares[index] = xIsNext ? "X" : "O";
        setSquares(newSquares);
        setXIsNext(!xIsNext);
    };

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }


    return (
        <div className="board">
            <div className="status">{status}</div>
            <div>
                <Square value={squares[0]} onClick={() => handleSquareClick(0)} />
                <Square value={squares[1]} onClick={() => handleSquareClick(1)} />
                <Square value={squares[2]} onClick={() => handleSquareClick(2)} />
            </div>
            <div>
                <Square value={squares[3]} onClick={() => handleSquareClick(3)} />
                <Square value={squares[4]} onClick={() => handleSquareClick(4)} />
                <Square value={squares[5]} onClick={() => handleSquareClick(5)} />
            </div>
            <div>
                <Square value={squares[6]} onClick={() => handleSquareClick(6)} />
                <Square value={squares[7]} onClick={() => handleSquareClick(7)} />
                <Square value={squares[8]} onClick={() => handleSquareClick(8)} />
            </div>
        </div>
    );
};

export default Board;