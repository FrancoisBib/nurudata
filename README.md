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


