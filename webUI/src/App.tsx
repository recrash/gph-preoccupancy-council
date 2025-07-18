import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { Box } from '@mui/material'

function App() {
  return (
    <div className="App">
      <Box sx={{ width: '100vw', height: '100vh' }}>  
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </Box>
      <Footer />
    </div>
  )
}

export default App 