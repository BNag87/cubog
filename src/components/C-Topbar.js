import React from "react";
import "../styles/style.css"
export const Topbar = () => {

    return(
        <>
        <div className="topbar">
            <a href = "/">Sausage</a>
            <a href = "/home">The Past</a>
            <a href = "/home">Chain</a>
            <h2>This is the TopBar component</h2>
            <p>Quest for the sausage fountain</p>
        </div>
        </>
    )
}