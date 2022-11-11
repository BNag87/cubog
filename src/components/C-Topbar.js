import React from "react";
import "../styles/scss/style.css";
export const Topbar = () => {

    return(
        <>
            <div className="topbar">
                <div className="InvisiDiv">
                <a href = "/">Sausage</a>
                <a href = "/home">The Past</a>
                <a href = "/home">Chain</a>
            </div>
            
            <div className="InvisiDiv">
                <h1>This is the TopBar component</h1>
            </div>

        </div>
        </>
    )
}