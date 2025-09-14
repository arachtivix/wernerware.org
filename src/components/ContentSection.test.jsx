import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, test, expect } from 'vitest'
import ContentSection from './ContentSection'

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('ContentSection', () => {
  test('renders basic content section with title and text', () => {
    renderWithRouter(
      <ContentSection 
        title="Test Title" 
        content="Test content" 
        type="subsection"
      />
    )
    
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('Test content')).toBeInTheDocument()
  })

  test('renders content section with array content', () => {
    const content = [
      'First paragraph',
      'Second paragraph'
    ]
    
    renderWithRouter(
      <ContentSection 
        title="Array Test" 
        content={content} 
        type="subsection"
      />
    )
    
    expect(screen.getByText('Array Test')).toBeInTheDocument()
    expect(screen.getByText('First paragraph')).toBeInTheDocument()
    expect(screen.getByText('Second paragraph')).toBeInTheDocument()
  })

  test('renders content section with list items', () => {
    const content = [
      'Introduction text',
      {
        type: 'list',
        items: ['Item 1', 'Item 2', 'Item 3']
      }
    ]
    
    renderWithRouter(
      <ContentSection 
        title="List Test" 
        content={content} 
        type="subsection"
      />
    )
    
    expect(screen.getByText('List Test')).toBeInTheDocument()
    expect(screen.getByText('Introduction text')).toBeInTheDocument()
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
    expect(screen.getByText('Item 3')).toBeInTheDocument()
  })

  test('renders content section with links', () => {
    const links = [
      {
        title: 'Test Link',
        to: '/test',
        description: 'Test description'
      }
    ]
    
    renderWithRouter(
      <ContentSection 
        title="Links Test" 
        content="Main content" 
        links={links}
        type="card"
      />
    )
    
    expect(screen.getByText('Links Test')).toBeInTheDocument()
    expect(screen.getByText('Main content')).toBeInTheDocument()
    expect(screen.getByText('Test Link')).toBeInTheDocument()
    expect(screen.getByText('Test description')).toBeInTheDocument()
  })

  test('renders without title when not provided', () => {
    renderWithRouter(
      <ContentSection 
        content="Content without title" 
        type="subsection"
      />
    )
    
    expect(screen.getByText('Content without title')).toBeInTheDocument()
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
  })
})