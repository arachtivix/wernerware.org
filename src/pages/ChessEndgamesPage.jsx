import Chessboard from '../components/Chessboard'
import ContentPage from '../components/ContentPage'
import { chessEndgamesPageConfig } from '../config/pageConfigs'

function ChessEndgamesPage() {
  // FEN for Knight and Rook vs King endgame position
  // White: King on e1, Rook on a1, Knight on b1
  // Black: King on e8
  const endgameFEN = "4k3/8/8/8/8/8/8/RN2K3 w - - 0 1"

  return (
    <ContentPage pageConfig={chessEndgamesPageConfig}>
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
    </ContentPage>
  )
}

export default ChessEndgamesPage