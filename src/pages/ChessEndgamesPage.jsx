import Chessboard from '../components/Chessboard'
import './ChessPage.css'

function ChessEndgamesPage() {
  // FEN for Knight and Rook vs King endgame position
  // White: King on e1, Rook on a1, Knight on b1
  // Black: King on e8
  const endgameFEN = "4k3/8/8/8/8/8/8/RN2K3 w - - 0 1"

  return (
    <div className="chess-page">
      <div className="chess-content">
        <h1>Chess Endgames</h1>
        <p className="chess-description">
          Chess endgames represent the culmination of strategic play where precise calculation
          and deep understanding of fundamental principles determine the outcome. These positions,
          typically involving fewer pieces, reveal the pure essence of chess tactics and strategy.
        </p>

        <div className="endgame-example">
          <h2>Knight and Rook vs King</h2>
          <p>
            This is a classic chess endgame position featuring a Knight and Rook against a solo King.
            This endgame is generally winning for the side with the pieces, though it requires proper technique.
          </p>
          <Chessboard fen={endgameFEN} />
          <div className="position-info">
            <h3>Position Details</h3>
            <p><strong>FEN:</strong> {endgameFEN}</p>
            <p><strong>Material:</strong> White has a significant material advantage</p>
            <p><strong>Evaluation:</strong> White is winning with best play</p>
          </div>
        </div>

        <div className="subsection">
          <h3>Endgame Theory</h3>
          <p>
            Endgame theory encompasses the systematic study of positions with reduced material.
            Key concepts include king and pawn endings, rook endings, minor piece endings, and
            complex multi-piece endgames. Understanding these fundamental positions is crucial
            for converting advantages and defending difficult positions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ChessEndgamesPage