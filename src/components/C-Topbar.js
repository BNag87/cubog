import { React, useState } from "react";
import "../styles/scss/style.css";
import { Drawer, Box, Typography, IconButton } from "@mui/material";


export const Topbar = () => {

//useState to control top drawer component
const [drawerOpen, set_drawerOpen] = useState(false)

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

            <IconButton sx={{ width: "100px", height: "64px", borderRadius: 4,}} size="medium" edge="start"  color="inherit" aria-label="logo" onClick={() => set_drawerOpen(true)}>
                Games  
            </IconButton>

            <Drawer anchor="top" open={drawerOpen} onClose={() => set_drawerOpen(false)}>
                <Box p={2} width="250px" textAlign="center" role="presentation">
                    <Typography variant="h6" component="div">
                        Top Panel
                    </Typography>
                </Box>
            </Drawer>

        </div>
        </>
    )
}