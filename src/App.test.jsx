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
    
    const comingSoon = screen.getByText(/coming soon/i)
    expect(comingSoon).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<App />)
    
    const homeLink = screen.getByRole('link', { name: /home/i })
    const chessLink = screen.getByRole('link', { name: /chess/i })
    
    expect(homeLink).toBeInTheDocument()
    expect(chessLink).toBeInTheDocument()
  })

  it('renders description text on home page', () => {
    render(<App />)
    const description = screen.getByText(/a clean, modern web presence/i)
    expect(description).toBeInTheDocument()
  })
})