# Nurudata SaaS Application

## Project Overview

Nurudata is a Software-as-a-Service (SaaS) application designed to convert PDF, image, and document files into structured JSON format using advanced AI agents for Retrieval-Augmented Generation (RAG).

The core purpose of Nurudata is to simplify the conversion of unstructured documents into machine-readable JSON data, leveraging AI to intelligently parse and structure content for downstream applications such as data analysis, content management systems, or integration with other business tools.

## Author

François Bib - [GitHub](https://github.com/FrancoisBib)

## Features

- **File Conversion**: Upload and convert PDF, image, and document files to JSON format
- **AI-Powered Extraction**: Utilize AI agents for intelligent content parsing and RAG-based data structuring
- **User Authentication**: Secure login and registration system with JWT-based authentication
- **Conversion History**: Track and manage past conversions for easy reference
- **Template Management**: Create and reuse conversion templates for consistent data extraction
- **API Access**: RESTful API endpoints for programmatic access and integrations
- **Billing & Credits**: User credit system for managing usage and billing
- **Automation Workflows**: Integration with n8n backend for automated processing pipelines
- **Responsive UI**: Modern, responsive interface built with Next.js and Tailwind CSS

## Tech Stack

### Frontend
- **Next.js 16**: React framework for server-side rendering and API routes
- **React 19**: UI library for building interactive components
- **TypeScript**: Type-safe JavaScript for better development experience
- **Tailwind CSS**: Utility-first CSS framework for styling
- **shadcn/ui**: High-quality UI components built on Radix UI primitives

### Backend & Authentication
- **Next.js API Routes**: Serverless API endpoints
- **JWT (jsonwebtoken)**: Token-based authentication
- **bcryptjs**: Password hashing for secure user authentication

### Development Tools
- **ESLint**: Code linting and formatting
- **TypeScript**: Type checking and compilation
- **PostCSS & Autoprefixer**: CSS processing and vendor prefixing

### Key Dependencies
- **@radix-ui/***: Accessible UI primitives
- **react-hook-form**: Form handling with validation
- **zod**: Schema validation
- **lucide-react**: Icon library
- **next-themes**: Theme management

## Project Structure

```
nurudata/
├── app/                          # Next.js App Router directory
│   ├── api/                     # API routes
│   │   ├── auth/               # Authentication endpoints
│   │   │   ├── login/          # User login
│   │   │   ├── register/       # User registration
│   │   │   └── me/             # Get current user info
│   │   ├── conversion/         # File conversion processing
│   │   ├── upload/             # File upload handling
│   │   ├── history/            # Conversion history management
│   │   ├── templates/          # Template CRUD operations
│   │   └── user/               # User management
│   │       └── credits/        # User credit system
│   ├── convert/                # File conversion page
│   ├── history/                # Conversion history page
│   ├── templates/              # Template management page
│   ├── automations/            # n8n automation workflows page
│   ├── billing/                # Billing and credits page
│   ├── api-page/               # API documentation page
│   ├── help/                   # Help and support page
│   ├── login/                  # User login page
│   ├── register/               # User registration page
│   ├── settings/               # User settings page
│   ├── layout.tsx              # Root layout component
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles
├── components/                 # Reusable UI components
│   ├── ui/                    # shadcn/ui components
│   ├── navbar.tsx             # Navigation component
│   └── footer.tsx             # Footer component
├── contexts/                   # React context providers
│   └── AuthContext.tsx        # Authentication context
├── lib/                        # Utility functions and configurations
│   ├── users.ts               # User-related utilities
│   └── utils.ts               # General utilities
├── public/                     # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── middleware.ts               # Next.js middleware
├── next.config.ts              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Project dependencies and scripts
├── components.json             # shadcn/ui configuration
└── README.md                   # Project documentation
```

## Installation and Setup

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nurudata
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory with the following variables:
   ```env
   # Database connection (if applicable)
   DATABASE_URL=your_database_url

   # JWT Secret
   JWT_SECRET=your_jwt_secret

   # AI API Keys
   OPENAI_API_KEY=your_openai_key
   # Add other AI service keys as needed


   # Other configuration
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000
   ```

4. **Database Setup** (if using a database)
   - Set up your preferred database (PostgreSQL, MongoDB, etc.)
   - Run database migrations if applicable

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Access the application**
   Open [http://localhost:3000](http://localhost:3000) in your browser

## Basic Commands

### Development
```bash
npm run dev          # Start development server on http://localhost:3000
npm run build        # Build the application for production
npm run start        # Start production server
npm run lint         # Run ESLint for code quality checks
```

### Additional Scripts
- The application uses Next.js standard scripts
- Custom scripts can be added to `package.json` as needed

## API Documentation Summary

The Nurudata API provides RESTful endpoints for all core functionality. Below is a summary of key endpoints:

### Authentication Endpoints
- `POST /api/auth/login` - Authenticate user and return JWT token
- `POST /api/auth/register` - Register new user account
- `GET /api/auth/me` - Retrieve current authenticated user information

### File Processing Endpoints
- `POST /api/upload` - Upload files for processing
- `POST /api/conversion` - Convert uploaded files to JSON using AI agents

### Data Management Endpoints
- `GET /api/history` - Retrieve user's conversion history
- `GET /api/templates` - Get available conversion templates
- `POST /api/templates` - Create new conversion template
- `PUT /api/templates/[id]` - Update existing template
- `DELETE /api/templates/[id]` - Delete template

### User Management Endpoints
- `GET /api/user/credits` - Get current user credit balance
- `POST /api/user/credits` - Add credits to user account

### API Usage Notes
- All endpoints require authentication except `/api/auth/login` and `/api/auth/register`
- Include JWT token in Authorization header: `Bearer <token>`
- File uploads use multipart/form-data
- Responses are in JSON format
- Rate limiting and credit consumption apply to conversion endpoints

For detailed API documentation, visit the `/api-page` route in the application or refer to individual route files in `app/api/`.

## Deployment Notes

### Deployment Steps
1. **Build the application**
   ```bash
   npm run build
   ```

2. **Environment Variables**
   Ensure all production environment variables are set in your deployment platform

3. **Database**
   Set up production database and update `DATABASE_URL`


5. **Domain and SSL**
   Configure custom domain and SSL certificates

### Performance Considerations
- Enable Next.js optimizations for production
- Configure proper caching strategies
- Monitor API usage and credit consumption
- Set up error tracking and monitoring

## Contribution Guidelines

We welcome contributions to improve Nurudata! Please follow these guidelines:

### Development Workflow
1. **Fork the repository** on GitHub
2. **Create a feature branch** from `main`
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** following the existing code style
4. **Test thoroughly** - ensure all tests pass and new features work as expected
5. **Commit with clear messages**
   ```bash
   git commit -m "Add: brief description of changes"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request** with detailed description

### Code Standards
- Use TypeScript for all new code
- Follow ESLint configuration
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components modular and reusable

### Testing
- Test your changes across different browsers
- Verify API endpoints work correctly
- Check responsive design on mobile devices

### Reporting Issues
- Use GitHub Issues for bug reports and feature requests
- Provide detailed steps to reproduce bugs
- Include browser/OS information when relevant

### Code of Conduct
- Be respectful and inclusive
- Provide constructive feedback
- Help other contributors when possible

Thank you for contributing to Nurudata!
