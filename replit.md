# Overview

This is a modern web3 wallet connection application built with React and Express. The application provides a user-friendly interface for connecting to various wallet providers, including external wallets like MetaMask and Coinbase, as well as in-app wallets with social login capabilities. The project uses a full-stack TypeScript architecture with a React frontend and Express backend, designed to facilitate secure blockchain wallet connections and user authentication.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The frontend uses React 18 with TypeScript and modern tooling:
- **Build System**: Vite for fast development and optimized builds
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Web3 Integration**: thirdweb SDK for wallet connections and blockchain interactions

## Backend Architecture  
The backend follows a minimal Express.js architecture:
- **Server Framework**: Express.js with TypeScript
- **Storage Interface**: Abstract storage pattern with in-memory implementation
- **Development Setup**: Custom Vite integration for SSR-style development
- **API Structure**: RESTful endpoints under `/api` prefix with comprehensive logging

## Database Architecture
The project uses Drizzle ORM with PostgreSQL:
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL via Neon serverless driver
- **Schema**: User management with username/password authentication
- **Migrations**: Drizzle Kit for schema migrations and management

## Web3 Integration
Comprehensive wallet connection capabilities:
- **thirdweb Integration**: Primary Web3 SDK for wallet connections
- **Wallet Support**: External wallets (MetaMask, Coinbase, Rainbow, Rabby, Zerion)
- **Social Login**: In-app wallets with 16+ social providers (Google, Discord, GitHub, etc.)
- **Connection Management**: Hooks for wallet state, connection, and disconnection

## Component Architecture
The UI follows a composable component structure:
- **Design System**: shadcn/ui components with consistent theming
- **Wallet Components**: Modular components for different wallet types and connection flows
- **Modal System**: Dialog-based wallet selection and social login interfaces
- **Status Management**: Real-time connection status and user feedback

# External Dependencies

## Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **thirdweb**: Web3 wallet integration and blockchain interactions
- **drizzle-orm**: Type-safe database ORM
- **@tanstack/react-query**: Server state management
- **express**: Backend web framework

## UI Dependencies  
- **@radix-ui/***: Accessible component primitives (25+ components)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon system

## Development Tools
- **vite**: Frontend build tool and dev server
- **tsx**: TypeScript execution for development
- **drizzle-kit**: Database schema management
- **@replit/***: Replit-specific development plugins

## Web3 Ecosystem
- **thirdweb/react**: React hooks for Web3 functionality
- **thirdweb/wallets**: Wallet connection implementations
- Multiple wallet providers through thirdweb's unified interface

## Authentication & Session Management
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used)
- User management through custom storage interface with database backing