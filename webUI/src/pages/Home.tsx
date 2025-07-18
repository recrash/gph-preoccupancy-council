import React from 'react'
import { Box, Typography } from '@mui/material'

const Home: React.FC = () => {
  return (
    <Box sx={{
      width: '100vw',
      height: '100vh',
      backgroundImage: 'url(/src/assets/images/overview-img.jpg)',      
    }}>
      <Typography variant="h1">테스트 메세지</Typography>
    </Box>
  )
}

export default Home 