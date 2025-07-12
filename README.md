# 🚀 Next.js 15 Modern Frontend Template

A comprehensive, production-ready Next.js 15 frontend template with TypeScript, Tailwind CSS v4, and everything you need to build modern web applications.

![Next.js](https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)

## ✨ Features

- ⚡️ **Next.js 15** - Latest version with App Router and React Server Components
- 🔥 **TypeScript** - Strict configuration for type safety
- 💨 **Tailwind CSS v4** - Latest version with new features and improved performance
- 📱 **Fully Responsive** - Mobile-first design approach
- 🎨 **Modern UI** - Beautiful interface with Geist font family
- 🌙 **Dark Mode** - Built-in support with system preference detection
- 🔍 **SEO Optimized** - Comprehensive meta tags and structured data
- 📦 **Static Export** - Ready for deployment to any static host
- 🎭 **Accessible** - WCAG 2.1 AA compliant components
- 🚀 **Performance** - Optimized for Core Web Vitals
- 🔧 **Developer Experience** - ESLint, Prettier, and pre-commit hooks
- 🎯 **Plugin Ready** - Easy integration with popular UI libraries


## 📋 Table of Contents

- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🎨 Customization](#-customization)
- [🔌 UI Library Integration](#-ui-library-integration)
- [🚀 Deployment](#-deployment)
- [🧪 Testing](#-testing)
- [🔧 Development](#-development)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🚀 Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm 8.0 or higher (or yarn/pnpm)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ashendes/nextjs-frontend-template.git
   cd nextjs-frontend-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### First-time Setup

1. **Update package.json**
   - Change the `name`, `description`, and `author` fields
   - Update repository URLs

2. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

3. **Update metadata**
   - Edit `src/app/layout.tsx` to update SEO metadata
   - Replace favicon and social media images in `public/`

4. **Customize colors and fonts**
   - Edit `tailwind.config.js` for color scheme
   - Update CSS variables in `src/app/globals.css`

## 📁 Project Structure

```
nextjs-15-frontend-template/
├── src/
│   ├── app/                    # Next.js 15 App Router
│   │   ├── globals.css         # Global styles with Tailwind
│   │   ├── layout.tsx          # Root layout with providers
│   │   ├── page.tsx            # Home page
│   │   ├── loading.tsx         # Loading UI
│   │   ├── not-found.tsx       # 404 page
│   │   └── favicon.ico         # Favicon
│   ├── components/             # Reusable components
│   │   ├── ui/                 # Basic UI components
│   │   │   ├── button.tsx      # Button component with variants
│   │   │   ├── card.tsx        # Card component
│   │   │   └── theme-toggle.tsx # Theme switcher
│   │   ├── layout/             # Layout components
│   │   │   ├── header.tsx      # Site header
│   │   │   ├── footer.tsx      # Site footer
│   │   │   └── navigation.tsx  # Navigation components
│   │   └── providers/          # Context providers
│   │       └── theme-provider.tsx # Theme context
│   ├── lib/                    # Utility functions
│   │   └── utils.ts            # Common utilities
│   ├── plugins/                # UI library integrations
│   │   └── ui-integrations/    # Plugin architecture
│   │       ├── framer-motion.ts
│   │       ├── headless-ui.ts
│   │       └── radix-ui.ts
│   └── types/                  # TypeScript definitions
│       └── index.ts            # Common types
├── public/                     # Static assets
│   ├── images/                 # Image assets
│   ├── robots.txt              # SEO robots file
│   ├── sitemap.xml             # XML sitemap
│   └── site.webmanifest        # PWA manifest
├── docs/                       # Documentation
│   ├── CUSTOMIZATION.md        # Customization guide
│   ├── DEPLOYMENT.md           # Deployment instructions
│   └── UI-LIBRARIES.md         # UI library integration
├── .eslintrc.json             # ESLint configuration
├── .prettierrc.json           # Prettier configuration
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── next.config.js             # Next.js configuration
└── package.json               # Dependencies and scripts
```

### Key Directories

- **`src/app/`** - Next.js 15 App Router files
- **`src/components/`** - Reusable React components
- **`src/lib/`** - Utility functions and helpers
- **`src/plugins/`** - UI library integration plugins
- **`src/types/`** - TypeScript type definitions
- **`public/`** - Static assets and files

## 🎨 Customization

### Colors and Themes

The template uses a CSS variable-based theming system that supports both light and dark modes.

#### Updating Colors

1. **Edit CSS variables in `src/app/globals.css`:**
   ```css
   :root {
     --primary: 210 100% 50%;
     --secondary: 210 40% 90%;
     /* ... other variables */
   }
   ```

2. **Update Tailwind config in `tailwind.config.js`:**
   ```javascript
   module.exports = {
     theme: {
       extend: {
         colors: {
           primary: {
             50: '#f0f9ff',
             500: '#0ea5e9',
             900: '#0c4a6e',
           }
         }
       }
     }
   }
   ```

#### Typography

The template uses the Geist font family by default. To change fonts:

1. **Update font imports in `src/app/layout.tsx`:**
   ```typescript
   import { Inter } from 'next/font/google'
   
   const inter = Inter({ subsets: ['latin'] })
   ```

2. **Update Tailwind config:**
   ```javascript
   fontFamily: {
     sans: ['Inter', 'system-ui', 'sans-serif'],
   }
   ```

### Components

#### Creating New Components

1. **Create component file:**
   ```typescript
   // src/components/ui/my-component.tsx
   import { cn } from '@/lib/utils'
   
   interface MyComponentProps {
     className?: string
     children: React.ReactNode
   }
   
   export function MyComponent({ className, children }: MyComponentProps) {
     return (
       <div className={cn("base-styles", className)}>
         {children}
       </div>
     )
   }
   ```

2. **Add to barrel export (optional):**
   ```typescript
   // src/components/ui/index.ts
   export { MyComponent } from './my-component'
   ```

#### Component Variants

Use `class-variance-authority` for component variants:

```typescript
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input bg-background hover:bg-accent",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
```

### Layout Customization

#### Header

Customize the header in `src/components/layout/header.tsx`:

- Update navigation items
- Change logo and branding
- Modify mobile menu behavior

#### Footer

Customize the footer in `src/components/layout/footer.tsx`:

- Update footer links and sections
- Change social media links
- Modify copyright information

## 🔌 UI Library Integration

The template includes plugin architecture for easy integration with popular UI libraries.

### Framer Motion

```bash
npm install framer-motion
```

```typescript
// Example usage
import { motion } from 'framer-motion'
import { animations } from '@/plugins/ui-integrations/framer-motion'

export function AnimatedCard() {
  return (
    <motion.div
      className="card"
      {...animations.fadeIn}
      whileHover={{ scale: 1.05 }}
    >
      Content
    </motion.div>
  )
}
```

### Headless UI

```bash
npm install @headlessui/react
```

```typescript
// Example usage
import { Dialog } from '@headlessui/react'

export function Modal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <Dialog.Panel>
        <Dialog.Title>Modal Title</Dialog.Title>
        {/* Content */}
      </Dialog.Panel>
    </Dialog>
  )
}
```

### Radix UI

```bash
npm install @radix-ui/react-dialog
```

```typescript
// Example usage
import * as Dialog from '@radix-ui/react-dialog'

export function Modal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>Open</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          {/* Content */}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
```

### Form Libraries

#### React Hook Form

```bash
npm install react-hook-form @hookform/resolvers zod
```

```typescript
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export function LoginForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  // Form implementation
}
```

#### Formik

```bash
npm install formik yup
```

```typescript
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
})

export function LoginForm() {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // Handle submission
      }}
    >
      <Form>
        <Field name="email" type="email" />
        <Field name="password" type="password" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}
```

### State Management

#### Zustand

```bash
npm install zustand
```

```typescript
import { create } from 'zustand'

interface BearState {
  bears: number
  increase: (by: number) => void
}

const useBearStore = create<BearState>()((set) => ({
  bears: 0,
  increase: (by) => set((state) => ({ bears: state.bears + by })),
}))

export function BearCounter() {
  const bears = useBearStore((state) => state.bears)
  const increase = useBearStore((state) => state.increase)
  
  return (
    <div>
      <h1>{bears} around here...</h1>
      <button onClick={() => increase(1)}>Add bear</button>
    </div>
  )
}
```

#### Redux Toolkit

```bash
npm install @reduxjs/toolkit react-redux
```

```typescript
import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

export const { increment, decrement } = counterSlice.actions

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
})
```

## 🚀 Deployment

### Static Export

The template supports static export for deployment to any static hosting service.

```bash
npm run build
npm run export
```

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/nextjs-frontend-template)

1. **Push to GitHub**
2. **Connect to Vercel**
3. **Deploy automatically**

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/nextjs-frontend-template)

1. **Build settings:**
   - Build command: `npm run build && npm run export`
   - Publish directory: `out`

### GitHub Pages

1. **Add GitHub Actions workflow:**
   ```yaml
   # .github/workflows/deploy.yml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         
         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'
             cache: 'npm'
         
         - name: Install dependencies
           run: npm ci
         
         - name: Build
           run: npm run build && npm run export
         
         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

### Docker

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/out ./out

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["npx", "serve", "out"]
```

## 🧪 Testing

### Unit Testing with Jest

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
```

```typescript
// __tests__/components/Button.test.tsx
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
```

### End-to-End Testing with Playwright

```bash
npm install --save-dev @playwright/test
```

```typescript
// e2e/example.spec.ts
import { test, expect } from '@playwright/test'

test('homepage has title', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Next.js 15 Template/)
})
```

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run export       # Static export

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # TypeScript type checking
npm run format       # Format with Prettier
npm run format:check # Check formatting

# Testing
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
npm run test:e2e     # Run e2e tests
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME="Next.js 15 Template"

# Analytics
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Database (if needed)
DATABASE_URL=your-database-url

# API Keys
NEXT_PUBLIC_API_KEY=your-api-key
```

### Development Workflow

1. **Create a new branch:**
   ```bash
   git checkout -b feature/new-feature
   ```

2. **Make your changes:**
   - Write code
   - Add tests
   - Update documentation

3. **Test your changes:**
   ```bash
   npm run lint
   npm run type-check
   npm run test
   ```

4. **Commit and push:**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   git push origin feature/new-feature
   ```

5. **Create a pull request**

### Code Style Guidelines

- Use TypeScript for all new files
- Follow the existing naming conventions
- Write tests for new features
- Update documentation when necessary
- Use semantic commit messages

## 📚 Additional Resources

### Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [React Documentation](https://react.dev)

### Community

- [Next.js Discord](https://discord.com/invite/nextjs)
- [Tailwind CSS Discord](https://discord.com/invite/tailwindcss)
- [React Community](https://react.dev/community)

### Learning Resources

- [Next.js Learn](https://nextjs.org/learn)
- [Tailwind CSS Tutorial](https://tailwindcss.com/docs/utility-first)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### Development Setup

1. Fork the repository
2. Clone your fork
3. Install dependencies: `npm install`
4. Create a branch: `git checkout -b feature/amazing-feature`
5. Make your changes
6. Test your changes: `npm run test`
7. Commit: `git commit -m 'feat: add amazing feature'`
8. Push: `git push origin feature/amazing-feature`
9. Open a Pull Request


## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Geist](https://vercel.com/font) for the beautiful font family
- [Lucide](https://lucide.dev/) for the icon library
- All contributors and the open-source community

---

<p align="center">
  <a href="https://github.com/ashendes/nextjs-frontend-template/stargazers">⭐ Star this project</a> •
  <a href="https://github.com/ashendes/nextjs-frontend-template/issues">🐛 Report Bug</a> •
  <a href="https://github.com/ashendes/nextjs-frontend-template/issues">💡 Request Feature</a>
</p> 