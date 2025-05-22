# Elite8Digital - Creative Digital Agency Website

A modern, responsive website for Elite8Digital, a creative digital agency specializing in web development, UI/UX design, 3D visualization, and digital marketing. Built with React, TypeScript, and Tailwind CSS, featuring stunning animations and interactive elements.

## Features

- ⚡️ **Vite** - Lightning fast build tool with instant HMR
- 🔄 **React 18** - Latest React with improved rendering and concurrent features
- 🧰 **TypeScript** - Type safety for robust application development
- 🛣️ **React Router** - Declarative routing for React applications
- 💅 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 🎭 **Framer Motion** - Powerful animation library for React
- 🖌️ **Custom UI Components** - Handcrafted components with modern design
- 📱 **Fully Responsive** - Optimized for all device sizes
- 🌟 **Interactive Elements** - Engaging user experience with hover effects and animations

## Pages

- **Home** - Showcase of services, featured work, testimonials, and tech stack
- **Work** - Portfolio of projects with filtering capability
- **About** - Company story, team members, values, and statistics
- **Contact** - Contact form with ThunderBorder effect and company information

## Custom Components

- **ThunderBorder** - Animated border effect with lightning-like animation
- **FloatingElements** - Animated floating particles for background effects
- **AnimatedCursor** - Custom cursor with trailing effect
- **PixelTransition** - Image hover effect with pixel transition
- **GlowingText** - Text with dynamic glow effect
- **AnimatedButton** - Interactive buttons with hover animations
- **AnimatedCard** - 3D tilt effect cards with mouse tracking

## Project Structure

```bash
src/
├── assets/         # Static assets like images, fonts
├── components/     # Reusable UI components
│   ├── 3d/        # 3D and special effect components
│   └── ui/        # UI components like buttons, cards, etc.
├── hooks/          # Custom React hooks
├── layouts/        # Layout components including MainLayout
├── pages/          # Page components for routing
├── routes/         # Routing configuration
├── store/          # State management setup
├── styles/         # Global styles and CSS utilities
└── types/          # TypeScript type definitions
```

## Getting Started

### Prerequisites

- Node.js (v18)
- npm

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/sohan-gupthak/elite8digital-assignment.git
   cd elite8digital-assignment
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## Key Features Implementation

### ThunderBorder Effect
The ThunderBorder component creates a dynamic lightning effect around elements, particularly used in the Contact form. It uses SVG paths with animated transformations to create the electric effect.

### Responsive Design
The website is fully responsive with a custom mobile menu that appears when the hamburger icon is clicked on smaller screens. The layout adjusts dynamically based on screen size.

### Interactive Elements
Most UI components feature interactive animations on hover or click, enhancing user engagement. The AnimatedCard component even responds to mouse movement with a 3D tilt effect.

### Custom Cursor
The site implements a custom cursor with a trailing effect that replaces the default browser cursor for a more immersive experience.

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router v6
- Vite

### Installation

1. Fork & Clone the repository:

```bash
git clone https://github.com/sohan-gupthak/elite8digital-assignment.git
cd elite8digital-assignment
```

2. Install dependencies:

```bash
nvm install v18.20.4
nvm use v18.20.4
npm install
```

3. Start the development server:

```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code quality checking
- `npm run preview` - Preview the production build locally

## Technology Stack

- **React** - UI library
- **TypeScript** - Type checking
- **Redux Toolkit** - State management
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **ESLint/Prettier** - Code quality and formatting
- **Axios** - HTTP client

## Why This Template?

This template follows industry best practices and provides:

- **Scalable Architecture**: Feature-based organization that scales with your application
- **Type Safety**: Full TypeScript integration for better developer experience
- **Performance Optimized**: Built with Vite for fast development and optimized production builds
- **State Management**: Redux Toolkit configured with best practices
- **Consistent Styling**: Tailwind CSS with custom utility classes
- **Path Aliases**: Configured with `@/` aliases for cleaner imports

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

