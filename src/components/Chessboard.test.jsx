import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Chessboard from '../components/Chessboard'

describe('Chessboard', () => {
  const testFEN = "4k3/8/8/8/8/8/8/RN2K3 w - - 0 1"

  it('renders chessboard image for known position', () => {
    const { container } = render(<Chessboard fen={testFEN} />)
    
    // Check if image is rendered
    const img = container.querySelector('img.chessboard')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/chessboards/knight-rook-vs-king.svg')
    expect(img).toHaveAttribute('alt', `Chess position: ${testFEN}`)
  })

  it('shows error for unknown position', () => {
    const unknownFEN = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
    render(<Chessboard fen={unknownFEN} />)
    
    // Check if error message is shown
    const errorDiv = screen.getByText(/Chessboard not available for position/)
    expect(errorDiv).toBeInTheDocument()
  })

  it('renders chessboard container', () => {
    const { container } = render(<Chessboard fen={testFEN} />)
    const chessboardContainer = container.querySelector('.chessboard-container')
    
    expect(chessboardContainer).toBeInTheDocument()
  })
})