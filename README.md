# React Wizard Demo

A React application built with Vite and TypeScript, featuring a wizard component with various examples.

## Live Demo

🌐 **[View Live Demo](https://medanmilos1831.github.io/react-wizard-demo/)**

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Deployment

This project is configured for automatic deployment to GitHub Pages:

### Manual Deployment

```bash
npm run deploy
```

### Automatic Deployment

The project uses GitHub Actions for automatic deployment. Every push to the `main` branch will automatically build and deploy the application to GitHub Pages.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## Configuration

- **Base URL**: `/react-wizard-demo/` (configured in `vite.config.ts`)
- **Build Output**: `docs/` directory
- **Homepage**: Set to GitHub Pages URL in `package.json`
