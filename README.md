# WernerWare.org

A clean, modern React website for WernerWare - coming soon placeholder with automated deployment to AWS S3.

![WernerWare Website](https://github.com/user-attachments/assets/c841494c-eb19-4c22-b135-c96610166f57)

## Features

- Clean, responsive design with modern gradient styling
- React 19 with Vite for fast development and builds
- Comprehensive test suite with Vitest and React Testing Library
- Automated CI/CD pipeline with GitHub Actions
- Deployment to AWS S3 with optional CloudFront invalidation
- ESLint for code quality

## Development

### Prerequisites

- Node.js 18 or higher
- npm

### Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Run tests once
npm run test:run

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Deployment

The project is automatically deployed to S3 when changes are pushed to the main branch.

### Prerequisites

1. AWS S3 bucket named `wernerware.org` configured for static website hosting
2. AWS OIDC provider configured with appropriate permissions
3. GitHub repository secrets configured:
   - `AWS_ROLE_ARN`: The ARN of the AWS role to assume
   - `CLOUDFRONT_DISTRIBUTION_ID` (optional): For cache invalidation

### Workflow

The GitHub Actions workflow:
1. Runs on push to main branch and pull requests
2. Installs dependencies
3. Runs linter and tests
4. Builds the React application
5. Deploys to S3 (main branch only)
6. Optionally invalidates CloudFront cache

### AWS Permissions

The AWS role should have the following permissions:
- `s3:PutObject`, `s3:DeleteObject`, `s3:ListBucket` for the S3 bucket
- `cloudfront:CreateInvalidation` (if using CloudFront)

## Technology Stack

- **Frontend**: React 19, Vite
- **Testing**: Vitest, React Testing Library, Jest DOM
- **Linting**: ESLint
- **CI/CD**: GitHub Actions
- **Hosting**: AWS S3 + CloudFront (optional)

## License

MIT
