import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders WernerWare heading', () => {
    render(<App />)
    const heading = screen.getByRole('heading', { name: /wernerware/i })
    expect(heading).toBeInTheDocument()
  })

  it('renders coming soon message', () => {
    render(<App />)
    const comingSoon = screen.getByText(/coming soon/i)
    expect(comingSoon).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<App />)
    const description = screen.getByText(/a clean, modern web presence/i)
    expect(description).toBeInTheDocument()
  })

  it('renders stay tuned message', () => {
    render(<App />)
    const stayTuned = screen.getByText(/stay tuned for updates/i)
    expect(stayTuned).toBeInTheDocument()
  })
})