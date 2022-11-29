import { React, useState } from "react";
import {calculateWinner } from "./helper";
import { NaC } from "./C_NaC";

export const Game = () => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const xO = xIsNext ? "X" : "O";

    const handleClick = (i) => {
        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];
        // return if won or occupied
        if (winner || squares[i]) return;
        // select a square
        squares[i] = xO;
        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setXisNext(!xIsNext);        
    }
    return(
        <>
            <h1>React Noughts & Crosses - With Hooks</h1>
            <NaC squares={history[stepNumber]} onClick={handleClick}/>
            <div className="invisiDiv">
                <h3>History</h3>
                {
                    renderMoves()
                }
                <h3>
                    {winner ? "Winner: " + winner : "Next Player: "+xO}
                </h3>

            </div>
        </>
    )
}