import './ChessPage.css'

function ChessGameStatesPage() {
  return (
    <div className="chess-page">
      <div className="chess-content">
        <h1>Counting Game States</h1>
        <p className="chess-description">
          The mathematical analysis of chess involves counting and categorizing the vast number
          of possible game states. This combinatorial approach provides insights into the
          complexity of chess and helps in developing efficient algorithms for chess engines
          and analysis tools.
        </p>
        
        <div className="subsection">
          <h3>Position Counting</h3>
          <p>
            Chess has an estimated 10⁴⁰ to 10⁵⁰ possible positions (<a href="https://web.archive.org/web/20200523062243/http://archive.computerhistory.org/projects/chess/related_materials/text/2-0%20and%202-1.Programming_a_computer_for_playing_chess.shannon/2-0%20and%202-1.Programming_a_computer_for_playing_chess.shannon.062303002.pdf" target="_blank" rel="noopener noreferrer">Shannon, 1950</a>), 
            making exhaustive analysis computationally impossible. However, the intent is to find 
            smaller positions whose state count may be more limited and thus may be more amenable 
            to computational analysis. By categorizing positions by material balance, pawn structure, 
            and piece activity, we can develop meaningful statistical measures and strategic 
            guidelines for different types of positions.
          </p>
        </div>

        <div className="subsection">
          <h3>Game Tree Complexity</h3>
          <p>
            The game tree complexity of chess is approximately 10¹²³ (<a href="http://fragrieu.free.fr/SearchingForSolutions.pdf" target="_blank" rel="noopener noreferrer">Allis, 1994</a>), representing 
            the number of possible games. This enormous branching factor necessitates sophisticated
            pruning techniques and heuristic evaluation methods in computer chess programs.
            Understanding these numbers helps in appreciating both the richness of chess
            and the computational challenges it presents, while motivating the search for 
            smaller, more tractable subsets of positions for detailed analysis.
          </p>
        </div>

        <div className="subsection">
          <h3>Practical Applications</h3>
          <p>
            Counting game states has practical applications in opening theory, where
            transposition tables help reduce redundant analysis, and in endgame databases,
            where complete enumeration of positions with few pieces provides perfect play
            solutions. These techniques bridge theoretical mathematics with practical
            chess improvement.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ChessGameStatesPage
