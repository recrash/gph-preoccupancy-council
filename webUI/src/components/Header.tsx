import React from 'react'   
import { AppBar, Toolbar, Typography, Button } from '@mui/material'

function Header () {
    return (
        <AppBar position = "static">
            <Toolbar>
                <Typography variant ="h6" component="div" sx={{ flexGrow: 1 }}>
                    고척 푸르지오 힐스테이트 입주예정자협의회
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