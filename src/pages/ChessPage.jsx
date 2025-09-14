import { Link } from 'react-router-dom'
import './ChessPage.css'

function ChessPage() {
  return (
    <div className="chess-page">
      <div className="chess-content">
        <h1>Chess</h1>
        <p className="chess-description">
          Explore the mathematical and computational aspects of chess through three main areas
          of study: combinatorial game theory applications, endgame analysis, and state space
          enumeration.
        </p>
        
        <div className="chess-sections">
          <div className="chess-section-card">
            <h2>
              <Link to="/chess/combinatorial-games" className="section-link">
                Chess-like Combinatorial Games
              </Link>
            </h2>
            <p>
              Explore chess variants and modifications that provide insights into combinatorial
              game theory, strategic complexity, and mathematical game analysis.
            </p>
          </div>

          <div className="chess-section-card">
            <h2>
              <Link to="/chess/endgames" className="section-link">
                Endgames
              </Link>
            </h2>
            <p>
              Study classical chess endgames, theoretical positions, and the mathematical
              principles that govern play with reduced material.
            </p>
          </div>

          <div className="chess-section-card">
            <h2>
              <Link to="/chess/game-states" className="section-link">
                Counting Game States
              </Link>
            </h2>
            <p>
              Investigate the combinatorial complexity of chess through position counting,
              game tree analysis, and computational approaches to chess complexity.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChessPage