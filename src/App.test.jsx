import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders navigation and home page content', () => {
    render(<App />)
    
    // Check navigation
    const navBrand = screen.getByRole('link', { name: /wernerware/i })
    expect(navBrand).toBeInTheDocument()
    
    // Check home page content (default route)
    const heading = screen.getByRole('heading', { name: /wernerware/i, level: 1 })
    expect(heading).toBeInTheDocument()
    
    const introText = screen.getByText(/welcome to a site dedicated to the exploration/i)
    expect(introText).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<App />)
    
    const homeLink = screen.getByRole('link', { name: /home/i })
    // Get the navigation chess link specifically by checking for the /chess href
    const navLinks = screen.getAllByRole('link', { name: /chess/i })
    const chessNavLink = navLinks.find(link => link.getAttribute('href') === '/chess')
    
    expect(homeLink).toBeInTheDocument()
    expect(chessNavLink).toBeInTheDocument()
  })

  it('renders combinatorial game theory content on home page', () => {
    render(<App />)
    const gameTheoryLink = screen.getByRole('link', { name: /combinatorial game theory/i })
    expect(gameTheoryLink).toBeInTheDocument()
    expect(gameTheoryLink).toHaveAttribute('href', 'https://en.wikipedia.org/wiki/Combinatorial_game_theory')
    
    // Check for the chess Wikipedia link specifically
    const wikipediaChessLink = screen.getByText('chess')
    expect(wikipediaChessLink.closest('a')).toHaveAttribute('href', 'https://en.wikipedia.org/wiki/Chess')
  })
})