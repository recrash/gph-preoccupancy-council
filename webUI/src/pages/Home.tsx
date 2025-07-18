import React from 'react'
import { Box, Typography } from '@mui/material'

const Home: React.FC = () => {
  return (
    <Box sx={{
      width: '100%',
      height: '100%',
      backgroundImage: 'url(/src/assets/images/overview-img.jpg)',      
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <Typography variant="h1" color="black">테스트 메세지</Typography>
    </Box>
  )
}

export default Home 