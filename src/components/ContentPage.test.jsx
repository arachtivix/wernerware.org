import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, test, expect } from 'vitest'
import ContentPage from './ContentPage'

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  )
}

describe('ContentPage', () => {
  test('renders basic page with title and description', () => {
    const pageConfig = {
      title: 'Test Page',
      description: 'Test description',
      pageType: 'standard',
      contentSections: [],
      cardSections: []
    }
    
    renderWithRouter(<ContentPage pageConfig={pageConfig} />)
    
    expect(screen.getByText('Test Page')).toBeInTheDocument()
    expect(screen.getByText('Test description')).toBeInTheDocument()
  })

  test('renders page with content sections', () => {
    const pageConfig = {
      title: 'Test Page',
      description: 'Test description',
      pageType: 'standard',
      contentSections: [
        {
          title: 'Section 1',
          content: 'Section 1 content',
          type: 'subsection'
        },
        {
          title: 'Section 2',
          content: 'Section 2 content',
          type: 'subsection'
        }
      ],
      cardSections: []
    }
    
    renderWithRouter(<ContentPage pageConfig={pageConfig} />)
    
    expect(screen.getByText('Test Page')).toBeInTheDocument()
    expect(screen.getByText('Section 1')).toBeInTheDocument()
    expect(screen.getByText('Section 1 content')).toBeInTheDocument()
    expect(screen.getByText('Section 2')).toBeInTheDocument()
    expect(screen.getByText('Section 2 content')).toBeInTheDocument()
  })

  test('renders page with card sections', () => {
    const pageConfig = {
      title: 'Test Page',
      description: 'Test description',
      pageType: 'chess',
      contentSections: [],
      cardSections: [
        {
          title: 'Card 1',
          to: '/card1',
          description: 'Card 1 description'
        },
        {
          title: 'Card 2',
          to: '/card2',
          description: 'Card 2 description'
        }
      ]
    }
    
    renderWithRouter(<ContentPage pageConfig={pageConfig} />)
    
    expect(screen.getByText('Test Page')).toBeInTheDocument()
    expect(screen.getByText('Card 1')).toBeInTheDocument()
    expect(screen.getByText('Card 1 description')).toBeInTheDocument()
    expect(screen.getByText('Card 2')).toBeInTheDocument()
    expect(screen.getByText('Card 2 description')).toBeInTheDocument()
  })

  test('renders page with custom children', () => {
    const pageConfig = {
      title: 'Test Page',
      description: 'Test description',
      pageType: 'standard',
      contentSections: [],
      cardSections: []
    }
    
    renderWithRouter(
      <ContentPage pageConfig={pageConfig}>
        <div>Custom child content</div>
      </ContentPage>
    )
    
    expect(screen.getByText('Test Page')).toBeInTheDocument()
    expect(screen.getByText('Custom child content')).toBeInTheDocument()
  })

  test('renders home page type correctly', () => {
    const pageConfig = {
      title: 'Home Page',
      description: 'Welcome home',
      pageType: 'home',
      contentSections: [],
      cardSections: []
    }
    
    renderWithRouter(<ContentPage pageConfig={pageConfig} />)
    
    const pageElement = screen.getByText('Home Page').closest('.content-page')
    expect(pageElement).toHaveClass('content-page-home')
  })
})