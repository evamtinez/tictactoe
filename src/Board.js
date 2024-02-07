import {useState} from "react";

export default function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;

    if (winner) {
        status = 'Winner: ' + winner;
    } else {
        status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    function checkIsWinner(index) {
        console.log(squares[index])
        if (squares[index]) {
            return squares[index] === winner;
        }
        console.log('falseeee')
        return false;
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} isWinner={checkIsWinner(0)}/>
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} isWinner={checkIsWinner(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} isWinner={checkIsWinner(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} isWinner={checkIsWinner(3)}/>
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} isWinner={checkIsWinner(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} isWinner={checkIsWinner(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} isWinner={checkIsWinner(6)}/>
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} isWinner={checkIsWinner(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} isWinner={checkIsWinner(8)}/>
            </div>
        </>
    );
}

function Square({value, onSquareClick, isWinner}) {
    console.log(isWinner)
    return (
        // <button className="square" onClick={onSquareClick}>
        <button className={`square ${isWinner ? "winner" : ""}`} onClick={onSquareClick}>
            {value}
        </button>
    );
}


function calculateWinner(squares) {
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