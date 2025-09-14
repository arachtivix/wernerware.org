import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import ChessPage from '../pages/ChessPage'

describe('ChessPage', () => {
  it('renders chess page heading', () => {
    render(
      <MemoryRouter>
        <ChessPage />
      </MemoryRouter>
    )
    const heading = screen.getByRole('heading', { name: /^chess$/i })
    expect(heading).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(
      <MemoryRouter>
        <ChessPage />
      </MemoryRouter>
    )
    const description = screen.getByText(/explore the mathematical and computational aspects/i)
    expect(description).toBeInTheDocument()
  })

  it('renders section links', () => {
    render(
      <MemoryRouter>
        <ChessPage />
      </MemoryRouter>
    )
    const combinatorialLink = screen.getByRole('link', { name: /chess-like combinatorial games/i })
    const endgamesLink = screen.getByRole('link', { name: /endgames/i })
    const gameStatesLink = screen.getByRole('link', { name: /counting game states/i })
    
    expect(combinatorialLink).toBeInTheDocument()
    expect(endgamesLink).toBeInTheDocument()
    expect(gameStatesLink).toBeInTheDocument()
  })

  it('renders section descriptions', () => {
    render(
      <MemoryRouter>
        <ChessPage />
      </MemoryRouter>
    )
    const combinatorialDesc = screen.getByText(/explore chess variants and modifications/i)
    const endgamesDesc = screen.getByText(/study classical chess endgames/i)
    const gameStatesDesc = screen.getByText(/investigate the combinatorial complexity/i)
    
    expect(combinatorialDesc).toBeInTheDocument()
    expect(endgamesDesc).toBeInTheDocument()
    expect(gameStatesDesc).toBeInTheDocument()
  })
})