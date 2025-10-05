import { render, screen, waitFor } from '@testing-library/react'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import ChessEndgamesPage from '../pages/ChessEndgamesPage'

// Mock SVG content for testing
const mockSVG = `<svg width="100%" height="100%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
<text x="225" y="25" class="chess-piece">♚</text>
<text x="25" y="375" class="chess-piece">♖</text>
<text x="75" y="375" class="chess-piece">♘</text>
<text x="225" y="375" class="chess-piece">♔</text>
</svg>`

describe('ChessEndgamesPage', () => {
  beforeEach(() => {
    // Mock fetch to return SVG content
    globalThis.fetch = vi.fn(() =>
      Promise.resolve({
        text: () => Promise.resolve(mockSVG),
      })
    )
  })

  it('renders chess endgames heading', () => {
    render(<ChessEndgamesPage />)
    const heading = screen.getByRole('heading', { name: /chess endgames/i })
    expect(heading).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<ChessEndgamesPage />)
    const description = screen.getByText(/chess endgames represent the culmination/i)
    expect(description).toBeInTheDocument()
  })

  it('renders knight and rook vs king section', () => {
    render(<ChessEndgamesPage />)
    const heading = screen.getByRole('heading', { name: /knight and rook vs king/i })
    const description = screen.getByText(/this is a classic chess endgame position/i)
    expect(heading).toBeInTheDocument()
    expect(description).toBeInTheDocument()
  })

  it('renders position details', () => {
    render(<ChessEndgamesPage />)
    const positionDetails = screen.getByText(/position details/i)
    const fenLabel = screen.getByText(/fen:/i)
    const materialLabel = screen.getByText(/material:/i)
    const evaluationLabel = screen.getByText(/evaluation:/i)
    
    expect(positionDetails).toBeInTheDocument()
    expect(fenLabel).toBeInTheDocument()
    expect(materialLabel).toBeInTheDocument()
    expect(evaluationLabel).toBeInTheDocument()
  })

  it('renders chessboard with pieces', async () => {
    render(<ChessEndgamesPage />)
    // Wait for the SVG to load and check if chess pieces are present
    await waitFor(() => {
      const pieces = screen.getAllByText(/[♔♕♖♗♘♙♚♛♜♝♞♟]/)
      expect(pieces.length).toBeGreaterThan(0)
    })
  })

  it('renders endgame theory section', () => {
    render(<ChessEndgamesPage />)
    const theoryHeading = screen.getByRole('heading', { name: /endgame theory/i })
    const theoryText = screen.getByText(/endgame theory encompasses/i)
    expect(theoryHeading).toBeInTheDocument()
    expect(theoryText).toBeInTheDocument()
  })
})