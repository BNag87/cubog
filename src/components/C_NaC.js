import { React } from "react";
import { square } from "./C-NacSquare";
import "../styles/scss/style.css";

export const NaC = ({squares, onClick}) => {

    return(
        <>
            <div className="invisiDiv">
                {squares.map((square, i) => (
                  <square key={i} value={square} onClick={() => onClick(i)} />  
                ))}
            </div>
        </>
        
    )
}