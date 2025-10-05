import './Chessboard.css'
import { useEffect, useState } from 'react'

// Map FEN positions to pre-generated SVG files
// Generated using chess-variants-display library approach
// https://github.com/arachtivix/chess-variants-display/releases/tag/v0.0.46
const FEN_TO_SVG = {
  '4k3/8/8/8/8/8/8/RN2K3 w - - 0 1': '/chessboards/endgame-rook-knight-vs-king.svg'
}

function Chessboard({ fen }) {
  const [svgContent, setSvgContent] = useState(null)
  const svgPath = FEN_TO_SVG[fen]
  
  useEffect(() => {
    if (!svgPath) return
    
    // Fetch and inline the SVG so CSS styling works
    fetch(svgPath)
      .then(response => response.text())
      .then(svg => setSvgContent(svg))
      .catch(error => console.error('Error loading chessboard SVG:', error))
  }, [svgPath])
  
  if (!svgPath) {
    console.warn(`No pre-generated SVG found for FEN: ${fen}`)
    return (
      <div className="chessboard-container">
        <div className="chessboard-error">
          Chessboard not available for this position
        </div>
      </div>
    )
  }

  if (!svgContent) {
    return (
      <div className="chessboard-container">
        <div className="chessboard">
          <div className="chessboard-loading">Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="chessboard-container">
      <div 
        className="chessboard"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </div>
  )
}

export default Chessboard