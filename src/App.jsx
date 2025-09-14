import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import ChessPage from './pages/ChessPage'
import ChessCombinatorialGamesPage from './pages/ChessCombinatorialGamesPage'
import ChessEndgamesPage from './pages/ChessEndgamesPage'
import ChessGameStatesPage from './pages/ChessGameStatesPage'
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
            <Route path="/chess/combinatorial-games" element={<ChessCombinatorialGamesPage />} />
            <Route path="/chess/endgames" element={<ChessEndgamesPage />} />
            <Route path="/chess/game-states" element={<ChessGameStatesPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
