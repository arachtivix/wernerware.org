import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ChessPage from '../pages/ChessPage'

describe('ChessPage', () => {
  it('renders chess page heading', () => {
    render(<ChessPage />)
    const heading = screen.getByRole('heading', { name: /chess endgame: knight and rook vs king/i })
    expect(heading).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<ChessPage />)
    const description = screen.getByText(/this is a classic chess endgame position/i)
    expect(description).toBeInTheDocument()
  })

  it('renders position details', () => {
    render(<ChessPage />)
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
    render(<ChessPage />)
    // Check if chess pieces are present
    const pieces = screen.getAllByText(/[♔♕♖♗♘♙♚♛♜♝♞♟]/)
    expect(pieces.length).toBeGreaterThan(0)
  })
})