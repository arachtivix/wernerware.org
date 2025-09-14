import './ChessPage.css'

function ChessCombinatorialGamesPage() {
  return (
    <div className="chess-page">
      <div className="chess-content">
        <h1>Chess-like Combinatorial Games</h1>
        <p className="chess-description">
          Chess-like combinatorial games extend the principles of traditional chess into broader
          mathematical frameworks. These games maintain the strategic depth of chess while exploring
          different rule sets, board configurations, and winning conditions that provide insights
          into combinatorial game theory.
        </p>
        
        <div className="subsection">
          <h3>Game Variants</h3>
          <p>
            These games often feature modified rules such as different piece movements, altered
            board sizes, or unique objective conditions. Examples include Chess960 (Fischer Random Chess),
            King of the Hill, and Three-Check Chess, each offering distinct strategic challenges
            while maintaining the core tactical elements that make chess compelling.
          </p>
        </div>

        <div className="subsection">
          <h3>Mathematical Analysis</h3>
          <p>
            From a combinatorial perspective, these variants provide excellent case studies for
            analyzing game trees, strategic complexity, and the mathematical properties of
            perfect information games. They bridge the gap between recreational gaming and
            serious mathematical research.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ChessCombinatorialGamesPage