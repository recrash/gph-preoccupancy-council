import React from 'react'   
import { AppBar, Toolbar, Typography, Button } from '@mui/material'

function Header () {
    return (
        <AppBar position = "absolute" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <Toolbar>
                <Typography variant ="h6" component="div" sx={{ flexGrow: 1 }}>
                    Test Message
                </Typography>

                <Button color="inherit">소개</Button>
                <Button color="inherit">소식</Button>
                <Button color="inherit">자료실</Button>
                <Button color="inherit">오시는 길</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header