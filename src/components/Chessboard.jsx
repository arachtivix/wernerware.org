import './Chessboard.css'

// Piece symbols for different pieces
const PIECES = {
  'K': '♔', 'Q': '♕', 'R': '♖', 'B': '♗', 'N': '♘', 'P': '♙',
  'k': '♚', 'q': '♛', 'r': '♜', 'b': '♝', 'n': '♞', 'p': '♟'
}

function Chessboard({ fen }) {
  // Parse FEN notation to get board position
  const parseFEN = (fen) => {
    const [boardPart] = fen.split(' ')
    const ranks = boardPart.split('/')
    const board = []
    
    for (let rank of ranks) {
      const row = []
      for (let char of rank) {
        if (isNaN(char)) {
          // It's a piece
          row.push(char)
        } else {
          // It's a number indicating empty squares
          const emptySquares = parseInt(char)
          for (let i = 0; i < emptySquares; i++) {
            row.push('')
          }
        }
      }
      board.push(row)
    }
    
    return board
  }

  const board = parseFEN(fen)

  const renderSquare = (piece, rank, file) => {
    const isLightSquare = (rank + file) % 2 === 0
    const squareClass = `square ${isLightSquare ? 'light' : 'dark'}`
    
    return (
      <div key={`${rank}-${file}`} className={squareClass}>
        {piece && (
          <span className={`piece ${piece === piece.toUpperCase() ? 'white' : 'black'}`}>
            {PIECES[piece]}
          </span>
        )}
      </div>
    )
  }

  return (
    <div className="chessboard-container">
      <div className="chessboard">
        {board.map((rank, rankIndex) =>
          rank.map((piece, fileIndex) =>
            renderSquare(piece, rankIndex, fileIndex)
          )
        )}
      </div>
    </div>
  )
}

export default Chessboard