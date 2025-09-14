import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ChessGameStatesPage from '../pages/ChessGameStatesPage'

describe('ChessGameStatesPage', () => {
  it('renders counting game states heading', () => {
    render(<ChessGameStatesPage />)
    const heading = screen.getByRole('heading', { name: /counting game states/i })
    expect(heading).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<ChessGameStatesPage />)
    const description = screen.getByText(/the mathematical analysis of chess involves counting/i)
    expect(description).toBeInTheDocument()
  })

  it('renders position counting section', () => {
    render(<ChessGameStatesPage />)
    const countingHeading = screen.getByRole('heading', { name: /position counting/i })
    const countingText = screen.getByText(/chess has an estimated 10⁴⁰ to 10⁵⁰ possible positions/i)
    expect(countingHeading).toBeInTheDocument()
    expect(countingText).toBeInTheDocument()
  })

  it('renders game tree complexity section', () => {
    render(<ChessGameStatesPage />)
    const complexityHeading = screen.getByRole('heading', { name: /game tree complexity/i })
    const complexityText = screen.getByText(/the game tree complexity of chess is approximately 10¹²³/i)
    expect(complexityHeading).toBeInTheDocument()
    expect(complexityText).toBeInTheDocument()
  })

  it('renders practical applications section', () => {
    render(<ChessGameStatesPage />)
    const applicationsHeading = screen.getByRole('heading', { name: /practical applications/i })
    const applicationsText = screen.getByText(/counting game states has practical applications/i)
    expect(applicationsHeading).toBeInTheDocument()
    expect(applicationsText).toBeInTheDocument()
  })
})