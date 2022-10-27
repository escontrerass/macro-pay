import { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { Header } from '../components/Header'
import { Home } from '../Pages/Home'
import { Footer } from '../components/Footer'
import { Theme } from '../theme'
import { appContext } from '../context/appContext'
import { ArticleModal } from '../components/ArticleModal'
import { ArticleSelected } from '../Pages/ArticleSelected'

function App() {
  const { addCart } = useContext(appContext)
  return (
    <ThemeProvider theme={Theme}>
      <div className='App'>
        <CssBaseline />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:category/:id' element={<ArticleSelected {...addCart} />} />
          <Route path='*' element={<Home />} />
        </Routes>
        <Footer />
        <ArticleModal {...addCart} />
      </div>
    </ThemeProvider>
  )
}

export default App
