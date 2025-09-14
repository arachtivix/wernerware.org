import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ChessCombinatorialGamesPage from '../pages/ChessCombinatorialGamesPage'

describe('ChessCombinatorialGamesPage', () => {
  it('renders chess-like combinatorial games heading', () => {
    render(<ChessCombinatorialGamesPage />)
    const heading = screen.getByRole('heading', { name: /chess-like combinatorial games/i })
    expect(heading).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<ChessCombinatorialGamesPage />)
    const description = screen.getByText(/chess-like combinatorial games extend the principles/i)
    expect(description).toBeInTheDocument()
  })

  it('renders game variants section', () => {
    render(<ChessCombinatorialGamesPage />)
    const variantsHeading = screen.getByRole('heading', { name: /game variants/i })
    const variantsText = screen.getByText(/these games often feature modified rules/i)
    expect(variantsHeading).toBeInTheDocument()
    expect(variantsText).toBeInTheDocument()
  })

  it('renders mathematical analysis section', () => {
    render(<ChessCombinatorialGamesPage />)
    const analysisHeading = screen.getByRole('heading', { name: /mathematical analysis/i })
    const analysisText = screen.getByText(/from a combinatorial perspective/i)
    expect(analysisHeading).toBeInTheDocument()
    expect(analysisText).toBeInTheDocument()
  })
})