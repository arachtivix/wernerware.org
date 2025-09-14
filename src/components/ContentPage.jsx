import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import ContentSection from './ContentSection'
import './ContentPage.css'

function ContentPage({ 
  pageConfig,
  className = '',
  children 
}) {
  const {
    title,
    description,
    pageType = 'standard',
    contentSections = [],
    cardSections = []
  } = pageConfig

  const pageClass = `content-page content-page-${pageType} ${className}`.trim()
  
  return (
    <div className={pageClass}>
      <div className="content-page-wrapper">
        <h1>{title}</h1>
        {description && (
          <p className="content-page-description">
            {typeof description === 'string' ? 
              <span dangerouslySetInnerHTML={{ __html: description }} /> :
              description
            }
          </p>
        )}
        
        {/* Render card sections for navigation */}
        {cardSections.length > 0 && (
          <div className="content-card-sections">
            {cardSections.map((card, index) => (
              <div key={index} className="content-card-item">
                <h2>
                  <Link to={card.to} className="section-link">
                    {card.title}
                  </Link>
                </h2>
                {card.description && <p>{card.description}</p>}
              </div>
            ))}
          </div>
        )}
        
        {/* Render content sections */}
        {contentSections.map((section, index) => (
          <ContentSection
            key={index}
            title={section.title}
            content={section.content}
            type={section.type || 'subsection'}
            className={section.className}
            links={section.links}
            {...section.props}
          />
        ))}
        
        {/* Custom children content */}
        {children}
      </div>
    </div>
  )
}

ContentPage.propTypes = {
  pageConfig: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    pageType: PropTypes.oneOf(['standard', 'chess', 'home']),
    contentSections: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
        PropTypes.element
      ]),
      type: PropTypes.string,
      className: PropTypes.string,
      links: PropTypes.array,
      props: PropTypes.object
    })),
    cardSections: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      description: PropTypes.string
    }))
  }).isRequired,
  className: PropTypes.string,
  children: PropTypes.node
}

export default ContentPage