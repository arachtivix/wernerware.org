import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import ChessPage from './pages/ChessPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chess" element={<ChessPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
