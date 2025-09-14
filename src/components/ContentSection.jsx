import PropTypes from 'prop-types'
import './ContentSection.css'

function ContentSection({ 
  title, 
  content, 
  type = 'subsection',
  className = '',
  links = [],
  ...props 
}) {
  const sectionClass = `content-section-${type} ${className}`.trim()
  
  const renderContent = () => {
    if (typeof content === 'string') {
      return <p dangerouslySetInnerHTML={{ __html: content }} />
    }
    
    if (Array.isArray(content)) {
      return content.map((item, index) => {
        if (typeof item === 'string') {
          return <p key={index} dangerouslySetInnerHTML={{ __html: item }} />
        }
        if (item.type === 'list') {
          return (
            <ul key={index}>
              {item.items.map((listItem, listIndex) => (
                <li key={listIndex} dangerouslySetInnerHTML={{ __html: listItem }} />
              ))}
            </ul>
          )
        }
        return null
      })
    }
    
    // If content is a React element, render it directly
    return content
  }

  const renderLinks = () => {
    if (links.length === 0) return null
    
    return (
      <div className="section-links">
        {links.map((link, index) => (
          <div key={index} className="section-link-item">
            <h3>
              <a 
                href={link.to} 
                className="section-link"
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
              >
                {link.title}
              </a>
            </h3>
            {link.description && <p>{link.description}</p>}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={sectionClass} {...props}>
      {title && <h3>{title}</h3>}
      {renderContent()}
      {renderLinks()}
    </div>
  )
}

ContentSection.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element
  ]),
  type: PropTypes.oneOf(['subsection', 'content-section', 'card']),
  className: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    description: PropTypes.string,
    external: PropTypes.bool
  }))
}

export default ContentSection