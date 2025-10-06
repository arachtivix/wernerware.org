import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ChessEndgamesPage from '../pages/ChessEndgamesPage'

describe('ChessEndgamesPage', () => {
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

  it('renders chessboard with pieces', () => {
    const { container } = render(<ChessEndgamesPage />)
    // Check if chessboard image is present (pieces are in the SVG file)
    const chessboardImg = container.querySelector('img.chessboard')
    expect(chessboardImg).toBeInTheDocument()
    expect(chessboardImg).toHaveAttribute('src', '/chessboards/knight-rook-vs-king.svg')
  })

  it('renders endgame theory section', () => {
    render(<ChessEndgamesPage />)
    const theoryHeading = screen.getByRole('heading', { name: /endgame theory/i })
    const theoryText = screen.getByText(/endgame theory encompasses/i)
    expect(theoryHeading).toBeInTheDocument()
    expect(theoryText).toBeInTheDocument()
  })
})