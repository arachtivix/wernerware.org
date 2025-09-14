import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import Navigation from '../components/Navigation'

describe('Navigation', () => {
  it('renders navigation brand', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    )
    const brand = screen.getByText(/wernerware/i)
    expect(brand).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    )
    const homeLink = screen.getByRole('link', { name: /home/i })
    const chessLink = screen.getByRole('link', { name: /chess/i })
    
    expect(homeLink).toBeInTheDocument()
    expect(chessLink).toBeInTheDocument()
  })

  it('shows active state for current route', () => {
    render(
      <MemoryRouter initialEntries={['/chess']}>
        <Navigation />
      </MemoryRouter>
    )
    const chessLink = screen.getByRole('link', { name: /chess/i })
    expect(chessLink).toHaveClass('active')
  })
})