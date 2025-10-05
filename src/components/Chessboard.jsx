import './Chessboard.css'

// Piece Unicode characters (based on chess-variants-display v0.0.46)
const PIECE_UNICODE = {
  'K': '♔', 'Q': '♕', 'R': '♖', 'B': '♗', 'N': '♘', 'P': '♙',
  'k': '♚', 'q': '♛', 'r': '♜', 'b': '♝', 'n': '♞', 'p': '♟'
}

/**
 * Chessboard component that renders an SVG-based chessboard
 * Implementation based on chess-variants-display v0.0.46
 * https://github.com/arachtivix/chess-variants-display
 */
function Chessboard({ fen }) {
  const SQUARE_SIZE = 50
  const BOARD_WIDTH = 8
  const BOARD_HEIGHT = 8
  
  // Parse FEN notation to get piece positions
  // Returns a map of [row, col] -> piece character
  const parseFEN = (fen) => {
    const [boardPart] = fen.split(' ')
    const ranks = boardPart.split('/')
    const pieces = {}
    
    for (let rankIndex = 0; rankIndex < ranks.length; rankIndex++) {
      let fileIndex = 0
      for (let char of ranks[rankIndex]) {
        if (isNaN(char)) {
          // It's a piece
          pieces[`${rankIndex},${fileIndex}`] = char
          fileIndex++
        } else {
          // It's a number indicating empty squares
          fileIndex += parseInt(char)
        }
      }
    }
    
    return pieces
  }

  const pieces = parseFEN(fen)
  const svgWidth = BOARD_WIDTH * SQUARE_SIZE
  const svgHeight = BOARD_HEIGHT * SQUARE_SIZE

  // Generate squares (based on checkerboard function from chess-variants-display)
  const renderSquares = () => {
    const squares = []
    const topLeftColor = 'dark' // Standard chess board has dark top-left square
    
    for (let row = 0; row < BOARD_HEIGHT; row++) {
      for (let col = 0; col < BOARD_WIDTH; col++) {
        const isEvenSum = (row + col) % 2 === 0
        const isDark = topLeftColor === 'dark' ? isEvenSum : !isEvenSum
        const x = col * SQUARE_SIZE
        const y = row * SQUARE_SIZE
        const className = isDark ? 'dark-square' : 'light-square'
        
        squares.push(
          <rect
            key={`square-${row}-${col}`}
            x={x}
            y={y}
            width={SQUARE_SIZE}
            height={SQUARE_SIZE}
            className={className}
          />
        )
      }
    }
    
    return squares
  }

  // Generate piece elements (based on checkerboard-with-pieces from chess-variants-display)
  const renderPieces = () => {
    const pieceElements = []
    
    for (let [position, pieceChar] of Object.entries(pieces)) {
      const [row, col] = position.split(',').map(Number)
      const x = col * SQUARE_SIZE
      const y = row * SQUARE_SIZE
      const textX = x + SQUARE_SIZE / 2
      const textY = y + SQUARE_SIZE / 2
      const unicodeChar = PIECE_UNICODE[pieceChar]
      
      pieceElements.push(
        <text
          key={`piece-${row}-${col}`}
          x={textX}
          y={textY}
          className="chess-piece"
          textAnchor="middle"
          dominantBaseline="central"
        >
          {unicodeChar}
        </text>
      )
    }
    
    return pieceElements
  }

  return (
    <div className="chessboard-container">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        xmlns="http://www.w3.org/2000/svg"
        className="chessboard"
      >
        {renderSquares()}
        {renderPieces()}
      </svg>
    </div>
  )
}

export default Chessboard