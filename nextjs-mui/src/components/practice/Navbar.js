"use client";

import { AppBar, Button, Toolbar, Typography } from "@mui/material";

export default function Navbar (){
    return(
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5" sx={{ flexGrow:   1}} >
                    Cupid
                </Typography>
                <Button color="inherit">Products</Button>
                <Button color="inherit">Services</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Resources</Button>
                <Button color="inherit">Contact</Button>
            </Toolbar>
        </AppBar>
    )

}