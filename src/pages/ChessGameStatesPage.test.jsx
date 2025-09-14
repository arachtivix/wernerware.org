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
    const shannonLink = screen.getByRole('link', { name: /shannon, 1950/i })
    const deBruinLink = screen.getByRole('link', { name: /de bruin, 1963/i })
    expect(countingHeading).toBeInTheDocument()
    expect(shannonLink).toBeInTheDocument()
    expect(deBruinLink).toBeInTheDocument()
  })

  it('renders game tree complexity section', () => {
    render(<ChessGameStatesPage />)
    const complexityHeading = screen.getByRole('heading', { name: /game tree complexity/i })
    const allisLink = screen.getByRole('link', { name: /allis, 1994/i })
    expect(complexityHeading).toBeInTheDocument()
    expect(allisLink).toBeInTheDocument()
  })

  it('renders practical applications section', () => {
    render(<ChessGameStatesPage />)
    const applicationsHeading = screen.getByRole('heading', { name: /practical applications/i })
    const applicationsText = screen.getByText(/counting game states has practical applications/i)
    expect(applicationsHeading).toBeInTheDocument()
    expect(applicationsText).toBeInTheDocument()
  })
})