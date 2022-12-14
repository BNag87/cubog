import { React, useState } from "react";
import "../styles/scss/style.css";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";


export const Topbar = () => {

//useState to control top drawer component
const [drawerOpen, set_drawerOpen] = useState(false)

const marginStyle = {
    margin: "15px"
}

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

            {/* <IconButton sx={{ width: "100px", height: "64px", borderRadius: 4,}} size="medium" edge="start"  color="inherit" aria-label="logo" onClick={() => set_drawerOpen(true)}>
                Games  
            </IconButton> */}

            <button className="optBtn" style={marginStyle} onClick={() => set_drawerOpen(true)}>
                Games
            </button>

            <Drawer anchor="top" open={drawerOpen} onClose={() => set_drawerOpen(false)}>
                <Box p={2} width="100%" textAlign="left" role="presentation">
                    <Typography variant="h6" component="div">
                        Top Panel
                    </Typography>

                    <div className="invisiDiv">
                        <Link to="/">    
                            <div className="nacCard">
                                Home
                            </div>  
                        </Link>                     
                        
                        <Link to="NaC">
                            <div className="nacCard">
                                Fuckin Tosh
                            </div>
                        </Link>
                        
                        <div className="nacCard">3</div>
                    </div>
                
                </Box>
            </Drawer>

        </div>
        </>
    )
}