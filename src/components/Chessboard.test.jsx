import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import Chessboard from '../components/Chessboard'

// Mock SVG content for testing
const mockSVG = `<svg width="100%" height="100%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="50" height="50" class="dark-square"/>
<rect x="50" y="0" width="50" height="50" class="light-square"/>
<text x="225" y="25" class="chess-piece" text-anchor="middle" dominant-baseline="central">♚</text>
<text x="25" y="375" class="chess-piece" text-anchor="middle" dominant-baseline="central">♖</text>
<text x="75" y="375" class="chess-piece" text-anchor="middle" dominant-baseline="central">♘</text>
<text x="225" y="375" class="chess-piece" text-anchor="middle" dominant-baseline="central">♔</text>
</svg>`

describe('Chessboard', () => {
  const testFEN = "4k3/8/8/8/8/8/8/RN2K3 w - - 0 1"

  beforeEach(() => {
    // Mock fetch to return SVG content
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        text: () => Promise.resolve(mockSVG),
      })
    )
  })

  it('renders chessboard with correct pieces', async () => {
    render(<Chessboard fen={testFEN} />)
    
    // Wait for the SVG to load and render
    await waitFor(() => {
      const blackKing = screen.getByText('♚')
      expect(blackKing).toBeInTheDocument()
    })
    
    const whiteRook = screen.getByText('♖')
    const whiteKnight = screen.getByText('♘')
    const whiteKing = screen.getByText('♔')
    
    expect(whiteRook).toBeInTheDocument()
    expect(whiteKnight).toBeInTheDocument()
    expect(whiteKing).toBeInTheDocument()
  })

  it('renders SVG element', async () => {
    const { container } = render(<Chessboard fen={testFEN} />)
    
    await waitFor(() => {
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })
  })

  it('has dark and light squares in SVG', async () => {
    const { container } = render(<Chessboard fen={testFEN} />)
    
    await waitFor(() => {
      const darkSquares = container.querySelectorAll('.dark-square')
      const lightSquares = container.querySelectorAll('.light-square')
      
      expect(darkSquares.length).toBeGreaterThan(0)
      expect(lightSquares.length).toBeGreaterThan(0)
    })
  })
})