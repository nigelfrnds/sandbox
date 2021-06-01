import { useMemo } from 'react';

import './ChessBoard.css';

const ChessBoard = () => {
    const renderSquares = () => {
        const squares = [];

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                let color = 'white';

                if ((i + j) % 2 === 0) {
                    color = 'black';
                }

                squares.push(
                    <Square key={`${i}${j}`} id={`${i}${j}`} color={color} />
                )
            }
        }

        return squares;
    }

    const memoSquares = useMemo(() => renderSquares());

    return (
        <div className="chessboard">
            {memoSquares}
        </div>
    );
}

const Square = ({ id, color }) => {
    return (
        <div key={id} style={{ backgroundColor: color }} />
    )
}

export { ChessBoard };