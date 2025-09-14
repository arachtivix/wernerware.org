import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Chessboard from '../components/Chessboard'

describe('Chessboard', () => {
  const testFEN = "4k3/8/8/8/8/8/8/RN2K3 w - - 0 1"

  it('renders chessboard with correct pieces', () => {
    render(<Chessboard fen={testFEN} />)
    
    // Check if pieces are rendered
    const blackKing = screen.getByText('♚')
    const whiteRook = screen.getByText('♖')
    const whiteKnight = screen.getByText('♘')
    const whiteKing = screen.getByText('♔')
    
    expect(blackKing).toBeInTheDocument()
    expect(whiteRook).toBeInTheDocument()
    expect(whiteKnight).toBeInTheDocument()
    expect(whiteKing).toBeInTheDocument()
  })

  it('renders 64 squares', () => {
    const { container } = render(<Chessboard fen={testFEN} />)
    const squares = container.querySelectorAll('.square')
    expect(squares).toHaveLength(64)
  })

  it('has alternating light and dark squares', () => {
    const { container } = render(<Chessboard fen={testFEN} />)
    const lightSquares = container.querySelectorAll('.square.light')
    const darkSquares = container.querySelectorAll('.square.dark')
    
    expect(lightSquares).toHaveLength(32)
    expect(darkSquares).toHaveLength(32)
  })
})