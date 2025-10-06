import './Chessboard.css'

/**
 * Chessboard component that displays pre-generated SVG chessboards
 * SVGs are generated using chess-variants-display v0.0.50
 * https://github.com/arachtivix/chess-variants-display
 */
function Chessboard({ fen }) {
  // Map FEN positions to pre-generated SVG files
  const FEN_TO_SVG = {
    '4k3/8/8/8/8/8/8/RN2K3 w - - 0 1': '/chessboards/knight-rook-vs-king.svg'
  }

  const svgPath = FEN_TO_SVG[fen]
  
  if (!svgPath) {
    console.warn(`No pre-generated SVG for FEN: ${fen}`)
    return (
      <div className="chessboard-container">
        <div className="chessboard-error">
          Chessboard not available for position: {fen}
        </div>
      </div>
    )
  }

  return (
    <div className="chessboard-container">
      <img 
        src={svgPath} 
        alt={`Chess position: ${fen}`}
        className="chessboard"
      />
    </div>
  )
}

export default Chessboard