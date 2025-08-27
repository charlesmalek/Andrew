# Andrew Distribution - Project Structure

## 📁 Folder Organization

```
andrew/
├── 📁 public/                  # Static assets
│   ├── favicon.ico
│   ├── robots.txt
│   └── _redirects             # Netlify/Vercel redirects
├── 📁 scripts/                # Deployment & maintenance scripts
│   ├── deploy.sh             # Standard deployment
│   ├── force-deploy.sh       # Force fresh deployment
│   ├── nuclear-deploy.sh     # Complete reset deployment
│   ├── test-routes.sh        # Route testing
│   ├── validate-deployment.js # Pre-deployment validation
│   └── README.md             # Scripts documentation
├── 📁 src/                    # Source code
│   ├── 📁 assets/            # Images, fonts, etc.
│   ├── 📁 components/        # React components
│   │   ├── 📁 ui/           # ShadCN UI components
│   │   ├── Header.tsx       # Site header
│   │   ├── Footer.tsx       # Site footer
│   │   └── *.tsx            # Other components
│   ├── 📁 constants/         # Application constants
│   │   └── index.ts         # Routes, contact info, etc.
│   ├── 📁 hooks/             # Custom React hooks
│   │   ├── use-mobile.tsx   # Mobile detection
│   │   └── use-toast.ts     # Toast notifications
│   ├── 📁 lib/               # Third-party integrations
│   │   └── utils.ts         # Utility functions
│   ├── 📁 pages/             # Page components
│   │   ├── Index.tsx        # Home page
│   │   ├── About.tsx        # About page
│   │   ├── Contact.tsx      # Contact page
│   │   ├── Transportation.tsx # Transportation services
│   │   ├── Newspapers.tsx   # Newspaper distribution
│   │   ├── Magazines.tsx    # Magazine distribution
│   │   ├── Careers.tsx      # Careers page
│   │   └── NotFound.tsx     # 404 page
│   ├── 📁 services/          # API services & integrations
│   │   └── index.ts         # Contact, newsletter, etc.
│   ├── 📁 types/             # TypeScript type definitions
│   │   └── index.ts         # Global types
│   ├── 📁 utils/             # Utility functions
│   │   └── index.ts         # Validation, formatting, etc.
│   ├── App.tsx              # Main App component
│   ├── main.tsx             # React entry point
│   └── index.css            # Global styles
├── 📄 components.json         # ShadCN UI configuration
├── 📄 eslint.config.js       # ESLint configuration
├── 📄 package.json           # Dependencies & scripts
├── 📄 postcss.config.js      # PostCSS configuration
├── 📄 tailwind.config.ts     # Tailwind CSS configuration
├── 📄 tsconfig.json          # TypeScript configuration
├── 📄 tsconfig.app.json      # App-specific TypeScript config
├── 📄 tsconfig.node.json     # Node-specific TypeScript config
├── 📄 vercel.json            # Vercel deployment configuration
└── 📄 vite.config.ts         # Vite build configuration
```

## 🛠 Framework Stack

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.19
- **Language**: TypeScript 5.8.3
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: ShadCN UI
- **Routing**: React Router 6.30.1
- **State Management**: TanStack Query 5.83.0
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📋 Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run preview          # Preview production build
npm run lint             # Run ESLint
npm run type-check       # TypeScript type checking

# Validation & Testing
npm run validate         # Pre-deployment validation
npm run test:routes      # Test all routes for 404s
npm run health-check     # Site health check

# Deployment
npm run deploy:force     # Force fresh deployment
npm run deploy:nuclear   # Complete reset deployment
```

## 🔧 Configuration Files

### TypeScript Configuration
- `tsconfig.json` - Base TypeScript configuration
- `tsconfig.app.json` - Application-specific settings
- `tsconfig.node.json` - Node.js-specific settings

### Build Configuration
- `vite.config.ts` - Vite bundler configuration
- `tailwind.config.ts` - Tailwind CSS customization
- `postcss.config.js` - PostCSS plugins

### Quality Assurance
- `eslint.config.js` - Code linting rules
- `components.json` - ShadCN UI component configuration

### Deployment
- `vercel.json` - Vercel deployment settings
- `public/_redirects` - SPA routing redirects

## 🏗 Architecture Principles

### Component Organization
- **Pages**: Top-level route components in `src/pages/`
- **Components**: Reusable UI components in `src/components/`
- **UI Components**: ShadCN components in `src/components/ui/`

### Type Safety
- All components use TypeScript
- Global types defined in `src/types/`
- Strict type checking for forms and APIs

### State Management
- TanStack Query for server state
- React hooks for component state
- Constants for application configuration

### Styling Approach
- Tailwind CSS for utility-first styling
- CSS variables for theme consistency
- Responsive design mobile-first

## 🔄 Development Workflow

1. **Start Development**: `npm run dev`
2. **Make Changes**: Edit files in `src/`
3. **Type Check**: `npm run type-check`
4. **Lint Code**: `npm run lint`
5. **Validate**: `npm run validate`
6. **Build**: `npm run build`
7. **Test Routes**: `npm run test:routes`
8. **Deploy**: `npm run deploy:force`

## 🚀 Deployment Process

1. **Pre-deployment**: Run `npm run validate`
2. **Build**: Automatic via Vercel on git push
3. **Post-deployment**: Run `npm run test:routes`
4. **Monitoring**: Regular `npm run health-check`

## 📦 Key Dependencies

### Production
- `react` & `react-dom` - Core React
- `react-router-dom` - Client-side routing
- `@tanstack/react-query` - Server state management
- `tailwindcss` - CSS framework
- `lucide-react` - Icon library
- `@radix-ui/*` - Headless UI components

### Development
- `vite` - Build tool
- `typescript` - Type safety
- `eslint` - Code linting
- `@vitejs/plugin-react-swc` - Fast React compilation

## 🔍 Code Quality

- **TypeScript**: Full type safety
- **ESLint**: Code quality enforcement
- **Prettier**: Code formatting (via IDE)
- **Pre-commit**: Validation before deployment

## 📈 Performance Optimizations

- **Vite**: Fast development and build
- **SWC**: Speedy Web Compiler for React
- **Code Splitting**: Automatic route-based splitting
- **Asset Optimization**: Image and CSS optimization
- **CDN**: Vercel edge network delivery

## 🛡 Security Features

- **TypeScript**: Type safety prevents runtime errors
- **ESLint**: Security-focused linting rules
- **SPA Configuration**: Proper routing and redirects
- **Vercel Security**: Built-in security headers
