import React from "react";

export const square = ({value, onClick }) => {
    const style = value ? `squares ${value}` : `squares`;
    return ( 
        <button className = {style} onClick= {onClick}>
            {value}
        </button>
    )
}