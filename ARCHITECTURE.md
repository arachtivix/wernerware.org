# Reusable Page Architecture

## Overview

This project now uses a reusable component architecture that allows for consistent page layouts and content organization. The architecture consists of two main components and a configuration system.

## Components

### ContentPage

The `ContentPage` component is a reusable page wrapper that handles the common page structure. It accepts a `pageConfig` object that defines the page's content and structure.

**Props:**
- `pageConfig`: Object containing page configuration
- `className`: Optional additional CSS classes
- `children`: Optional custom content to render

### ContentSection

The `ContentSection` component renders discrete content sections within a page. It supports various content types including text, lists, and links.

**Props:**
- `title`: Section title
- `content`: Content to render (string, array of content, or React element)
- `type`: Section type ('subsection', 'content-section', 'card')
- `className`: Optional additional CSS classes
- `links`: Array of link objects for navigation sections

## Page Configuration

Pages are configured using JavaScript objects that define their structure and content. These configurations are stored in `src/config/pageConfigs.js`.

### Configuration Structure

```javascript
{
  title: "Page Title",
  description: "Page description (supports HTML)",
  pageType: "standard" | "chess" | "home",
  contentSections: [
    {
      title: "Section Title",
      content: "Section content or array of content",
      type: "subsection" | "content-section" | "card"
    }
  ],
  cardSections: [
    {
      title: "Card Title",
      to: "/route/path",
      description: "Card description"
    }
  ]
}
```

## Content Types

### Text Content
- String: Rendered as a paragraph with HTML support
- Array of strings: Each string becomes a separate paragraph

### List Content
```javascript
{
  type: 'list',
  items: ['Item 1', 'Item 2', 'Item 3']
}
```

### Navigation Cards
Used for sections that link to other pages. Defined in the `cardSections` array.

## Route Association

Each page component is associated with a specific route in the main App component. The reusable architecture maintains this association while providing consistent structure.

## Benefits

1. **Consistency**: All pages follow the same visual and structural patterns
2. **Maintainability**: Content changes can be made in configuration files
3. **Reusability**: Components can be used across different page types
4. **Separation of Concerns**: Content is separated from presentation logic
5. **Type Safety**: PropTypes provide runtime validation
6. **Testability**: Components are easily testable in isolation

## Migration

Existing pages have been refactored to use this new architecture while maintaining their exact functionality and appearance. The migration involved:

1. Creating page configurations that mirror the existing content
2. Replacing page components with ContentPage instances
3. Preserving special content (like the Chessboard component) using the children prop
4. Maintaining all existing CSS classes and styling

## Adding New Pages

To add a new page:

1. Create a page configuration in `pageConfigs.js`
2. Create a simple page component that uses ContentPage
3. Add the route to the App component
4. Add tests following the existing patterns

Example:
```javascript
import ContentPage from '../components/ContentPage'
import { myPageConfig } from '../config/pageConfigs'

function MyPage() {
  return <ContentPage pageConfig={myPageConfig} />
}

export default MyPage
```