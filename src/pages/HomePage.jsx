import './HomePage.css'

function HomePage() {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1>WernerWare</h1>
        <p className="intro">Welcome to a site dedicated to the exploration of <a href="https://en.wikipedia.org/wiki/Combinatorial_game_theory" target="_blank" rel="noopener noreferrer">combinatorial game theory</a>, <a href="https://en.wikipedia.org/wiki/Chess" target="_blank" rel="noopener noreferrer">chess</a>, and programming.</p>
        
        <div className="content-section">
          <h2>Mathematical Foundations</h2>
          <p><strong><a href="https://en.wikipedia.org/wiki/On_Numbers_and_Games" target="_blank" rel="noopener noreferrer">On Numbers and Games</a></strong> by John Conway is a foundational text that introduces surreal numbers and provides the mathematical framework for analyzing combinatorial games. It establishes the theory of partizan games and demonstrates how numbers emerge naturally from game positions.</p>
          
          <p><strong><a href="https://en.wikipedia.org/wiki/Winning_Ways_for_Your_Mathematical_Plays" target="_blank" rel="noopener noreferrer">Winning Ways for your Mathematical Plays</a></strong> by Berlekamp, Conway, and Guy is the comprehensive guide to combinatorial game theory. This multi-volume work explores impartial games, nim-like games, and provides practical strategies for analyzing and solving complex game positions.</p>
        </div>

        <div className="content-section">
          <h2>Chess Programming</h2>
          <p>The <a href="https://www.chessprogramming.org/" target="_blank" rel="noopener noreferrer">Chess Programming Wiki</a> serves as the definitive resource for chess engine development and computer chess research.</p>
          
          <p>Chess programming encompasses several fascinating areas:</p>
          <ul>
            <li><strong>Search Algorithms:</strong> Alpha-beta pruning, minimax search, and advanced techniques like principal variation search</li>
            <li><strong>Evaluation Functions:</strong> Position assessment, material balance, and positional factors</li>
            <li><strong>Move Generation:</strong> Efficient algorithms for generating legal moves and attack detection</li>
            <li><strong>Opening Books:</strong> Database-driven opening play and book learning</li>
            <li><strong>Endgame Tablebases:</strong> Perfect play databases for simplified positions</li>
            <li><strong>Machine Learning:</strong> Neural networks and deep learning approaches in modern engines</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HomePage