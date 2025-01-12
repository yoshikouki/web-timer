├── .cursorrules
├── .dockerignore
├── .env.test
├── .github
    ├── dependabot.yml
    └── workflows
    │   ├── ci.yml
    │   ├── dependabot-auto-merge.yml
    │   ├── dependabot.yml
    │   └── fly-deploy.yml
├── .gitignore
├── .tool-versions
├── .vscode
    ├── extensions.json
    └── settings.json
├── Dockerfile
├── README.md
├── biome.json
├── bun.lockb
├── components.json
├── cspell.json
├── docs
    └── analytics-events.md
├── fly.toml
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── public
    ├── audio
    │   └── sfx
    │   │   ├── maoudamashii_se_effect11.mp3
    │   │   ├── maoudamashii_se_onepoint09.mp3
    │   │   ├── maoudamashii_se_onepoint22.mp3
    │   │   ├── maoudamashii_se_onepoint23.mp3
    │   │   ├── maoudamashii_se_onepoint26.mp3
    │   │   ├── maoudamashii_se_onepoint28.mp3
    │   │   ├── maoudamashii_se_system34.mp3
    │   │   ├── maoudamashii_se_system35.mp3
    │   │   ├── simple_01.mp3
    │   │   └── simple_02.mp3
    ├── icon-192x192.webp
    ├── icon-512x512.webp
    ├── icon.png
    ├── logo.png
    ├── logo.svg
    └── logo.webp
├── src
    ├── app
    │   ├── api
    │   │   └── [[...route]]
    │   │   │   └── route.ts
    │   ├── favicon.ico
    │   ├── fonts.ts
    │   ├── footer.tsx
    │   ├── globals.css
    │   ├── head-title-controller.tsx
    │   ├── layout.tsx
    │   ├── manifest.ts
    │   ├── metadata.ts
    │   ├── page.tsx
    │   ├── share-timer.tsx
    │   └── timers
    │   │   └── [id]
    │   │       ├── copy-link.tsx
    │   │       ├── events
    │   │           └── route.ts
    │   │       ├── page.tsx
    │   │       ├── qr-code.tsx
    │   │       ├── shared-timer.tsx
    │   │       └── use-shared-timer.ts
    ├── components
    │   ├── analytics
    │   │   ├── events.ts
    │   │   └── google-analytics.tsx
    │   ├── animated-link
    │   │   ├── index.tsx
    │   │   ├── safe-view-transition.ts
    │   │   ├── use-animated-router.ts
    │   │   └── view-transition-provider.tsx
    │   ├── head-title
    │   │   ├── index.tsx
    │   │   └── provider.tsx
    │   ├── icons
    │   │   ├── github-icon.tsx
    │   │   ├── logo-icon.tsx
    │   │   └── x-icon.tsx
    │   ├── timer
    │   │   ├── index.tsx
    │   │   ├── local-storage.ts
    │   │   ├── timer-controller-settings
    │   │   │   ├── finish-sound-selector.tsx
    │   │   │   ├── finish-sound-volume-slider.tsx
    │   │   │   ├── font-selector.tsx
    │   │   │   ├── horizontal-layout-toggle.tsx
    │   │   │   ├── index.tsx
    │   │   │   └── settings.ts
    │   │   ├── timer-controller.tsx
    │   │   ├── timer-header.tsx
    │   │   ├── timer-name.tsx
    │   │   ├── timer-provider.tsx
    │   │   ├── timer.test.ts
    │   │   ├── timer.ts
    │   │   ├── use-timer-core.ts
    │   │   └── use-timer.ts
    │   ├── ui
    │   │   ├── button-animation.module.css
    │   │   ├── button.tsx
    │   │   ├── collapsible.tsx
    │   │   ├── input.tsx
    │   │   ├── popover.tsx
    │   │   ├── scroll-area.tsx
    │   │   ├── select.tsx
    │   │   ├── slider.tsx
    │   │   ├── sonner.tsx
    │   │   └── toggle.tsx
    │   └── wheel-picker
    │   │   ├── helper.test.ts
    │   │   ├── helper.ts
    │   │   ├── index.tsx
    │   │   ├── number-wheel.module.css
    │   │   ├── number-wheel.tsx
    │   │   └── numbers-wheel.tsx
    ├── lib
    │   ├── url.test.ts
    │   ├── url.ts
    │   └── utils.ts
    ├── schema
    │   └── timer-event.ts
    └── server
    │   ├── client.ts
    │   ├── index.ts
    │   └── shared-times
    │       ├── index.ts
    │       └── sse.ts
├── tailwind.config.ts
├── tsconfig.json
├── typescript-graph.md
└── yarn.lock


/.cursorrules:
--------------------------------------------------------------------------------
  1 | You are an expert senior software engineer specializing in modern web development, with deep expertise in TypeScript, React 19, Next.js 15 (App Router), Shadcn UI, Radix UI, and Tailwind CSS. You are thoughtful, precise, and focus on delivering high-quality, maintainable solutions.
  2 | 
  3 | ## Analysis Process
  4 | 
  5 | Before responding to any request, follow these steps:
  6 | 
  7 | 1. Request Analysis
  8 |    - Determine task type (code creation, debugging, architecture, etc.)
  9 |    - Identify languages and frameworks involved
 10 |    - Note explicit and implicit requirements
 11 |    - Define core problem and desired outcome
 12 |    - Consider project context and constraints
 13 | 
 14 | 2. Solution Planning
 15 |    - Break down the solution into logical steps
 16 |    - Consider modularity and reusability
 17 |    - Identify necessary files and dependencies
 18 |    - Evaluate alternative approaches
 19 |    - Plan for testing and validation
 20 | 
 21 | 3. Implementation Strategy
 22 |    - Choose appropriate design patterns
 23 |    - Consider performance implications
 24 |    - Plan for error handling and edge cases
 25 |    - Ensure accessibility compliance
 26 |    - Verify best practices alignment
 27 | 
 28 | ## Code Style and Structure
 29 | 
 30 | ### General Principles
 31 | - Write concise, readable TypeScript code
 32 | - Use functional and declarative programming patterns
 33 | - Follow DRY (Don't Repeat Yourself) principle
 34 | - Implement early returns for better readability
 35 | - Structure components logically: exports, subcomponents, helpers, types
 36 | 
 37 | ### Naming Conventions
 38 | - Use descriptive names with auxiliary verbs (isLoading, hasError)
 39 | - Prefix event handlers with "handle" (handleClick, handleSubmit)
 40 | - Use lowercase with dashes for directories (components/auth-wizard)
 41 | - Favor named exports for components
 42 | 
 43 | ### TypeScript Usage
 44 | - Use TypeScript for all code
 45 | - Prefer interfaces over types
 46 | - Avoid enums; use const maps instead
 47 | - Implement proper type safety and inference
 48 | - Use `satisfies` operator for type validation
 49 | 
 50 | ## React 19 and Next.js 15 Best Practices
 51 | 
 52 | ### Component Architecture
 53 | - Favor React Server Components (RSC) where possible
 54 | - Minimize 'use client' directives
 55 | - Implement proper error boundaries
 56 | - Use Suspense for async operations
 57 | - Optimize for performance and Web Vitals
 58 | 
 59 | ### State Management
 60 | - Use `useActionState` instead of deprecated `useFormState`
 61 | - Leverage enhanced `useFormStatus` with new properties (data, method, action)
 62 | - Implement URL state management with 'nuqs'
 63 | - Minimize client-side state
 64 | 
 65 | ### Async Request APIs
 66 | ```typescript
 67 | // Always use async versions of runtime APIs
 68 | const cookieStore = await cookies()
 69 | const headersList = await headers()
 70 | const { isEnabled } = await draftMode()
 71 | 
 72 | // Handle async params in layouts/pages
 73 | const params = await props.params
 74 | const searchParams = await props.searchParams
 75 | ```
 76 | 
 77 | ### Data Fetching
 78 | - Fetch requests are no longer cached by default
 79 | - Use `cache: 'force-cache'` for specific cached requests
 80 | - Implement `fetchCache = 'default-cache'` for layout/page-level caching
 81 | - Use appropriate fetching methods (Server Components, SWR, React Query)
 82 | 
 83 | ### Route Handlers
 84 | ```typescript
 85 | // Cached route handler example
 86 | export const dynamic = 'force-static'
 87 | 
 88 | export async function GET(request: Request) {
 89 |   const params = await request.params
 90 |   // Implementation
 91 | }
 92 | ```
 93 | 
 94 | ## UI Development
 95 | 
 96 | ### Styling
 97 | - Use Tailwind CSS with a mobile-first approach
 98 | - Implement Shadcn UI and Radix UI components
 99 | - Follow consistent spacing and layout patterns
100 | - Ensure responsive design across breakpoints
101 | - Use CSS variables for theme customization
102 | 
103 | ### Accessibility
104 | - Implement proper ARIA attributes
105 | - Ensure keyboard navigation
106 | - Provide appropriate alt text
107 | - Follow WCAG 2.1 guidelines
108 | - Test with screen readers
109 | 
110 | ### Performance
111 | - Optimize images (WebP, sizing, lazy loading)
112 | - Implement code splitting
113 | - Use `next/font` for font optimization
114 | - Configure `staleTimes` for client-side router cache
115 | - Monitor Core Web Vitals
116 | 
117 | ## Configuration
118 | 
119 | ### Next.js Config
120 | ```typescript
121 | /** @type {import('next').NextConfig} */
122 | const nextConfig = {
123 |   // Stable features (formerly experimental)
124 |   bundlePagesRouterDependencies: true,
125 |   serverExternalPackages: ['package-name'],
126 | 
127 |   // Router cache configuration
128 |   experimental: {
129 |     staleTimes: {
130 |       dynamic: 30,
131 |       static: 180,
132 |     },
133 |   },
134 | }
135 | ```
136 | 
137 | ### TypeScript Config
138 | ```json
139 | {
140 |   "compilerOptions": {
141 |     "strict": true,
142 |     "target": "ES2022",
143 |     "lib": ["dom", "dom.iterable", "esnext"],
144 |     "jsx": "preserve",
145 |     "module": "esnext",
146 |     "moduleResolution": "bundler",
147 |     "noEmit": true,
148 |     "paths": {
149 |       "@/*": ["./src/*"]
150 |     }
151 |   }
152 | }
153 | ```
154 | 
155 | ## Testing and Validation
156 | 
157 | ### Code Quality
158 | - Implement comprehensive error handling
159 | - Write maintainable, self-documenting code
160 | - Follow security best practices
161 | - Ensure proper type coverage
162 | - Use ESLint and Prettier
163 | 
164 | ### Testing Strategy
165 | - Plan for unit and integration tests
166 | - Implement proper test coverage
167 | - Consider edge cases and error scenarios
168 | - Validate accessibility compliance
169 | - Use Vitest
170 | 
171 | Remember: Prioritize clarity and maintainability while delivering robust, accessible, and performant solutions aligned with the latest React 19, Next.js 15, and motion (Framer Motion) features and best practices.


--------------------------------------------------------------------------------
/.dockerignore:
--------------------------------------------------------------------------------
 1 | # See https://help.github.com/articles/ignoring-files/ for more about ignoring files.
 2 | 
 3 | # dependencies
 4 | /node_modules
 5 | /.pnp
 6 | .pnp.*
 7 | .yarn/*
 8 | !.yarn/patches
 9 | !.yarn/plugins
10 | !.yarn/releases
11 | !.yarn/versions
12 | 
13 | # testing
14 | /coverage
15 | 
16 | # next.js
17 | /.next/
18 | /out/
19 | 
20 | # production
21 | /build
22 | 
23 | # misc
24 | .DS_Store
25 | *.pem
26 | 
27 | # debug
28 | npm-debug.log*
29 | yarn-debug.log*
30 | yarn-error.log*
31 | 
32 | # env files (can opt-in for commiting if needed)
33 | .env*
34 | 
35 | # vercel
36 | .vercel
37 | 
38 | # typescript
39 | *.tsbuildinfo
40 | next-env.d.ts
41 | 


--------------------------------------------------------------------------------
/.env.test:
--------------------------------------------------------------------------------
1 | NEXT_PUBLIC_APP_URL = "https://localhost:8888"
2 | 


--------------------------------------------------------------------------------
/.github/dependabot.yml:
--------------------------------------------------------------------------------
 1 | # To get started with Dependabot version updates, you'll need to specify which
 2 | # package ecosystems to update and where the package manifests are located.
 3 | # Please see the documentation for all configuration options:
 4 | # https://docs.github.com/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file
 5 | 
 6 | version: 2
 7 | updates:
 8 |   - package-ecosystem: "github-actions"
 9 |     # Workflow files stored in the default location of `.github/workflows`. (You don't need to specify `/.github/workflows` for `directory`. You can use `directory: "/"`.)
10 |     directory: "/"
11 |     schedule:
12 |       interval: "daily"
13 | 
14 |   - package-ecosystem: 'npm'
15 |     directory: '/'
16 |     schedule:
17 |       interval: 'daily'
18 | 


--------------------------------------------------------------------------------
/.github/workflows/ci.yml:
--------------------------------------------------------------------------------
 1 | name: CI
 2 | 
 3 | on:
 4 |   pull_request:
 5 |   push:
 6 |     branches:
 7 |       - main
 8 | 
 9 | jobs:
10 |   ci-web:
11 |     runs-on: ubuntu-latest
12 |     steps:
13 |       - name: Checkout
14 |         uses: actions/checkout@v4
15 | 
16 |       - name: Install bun
17 |         uses: oven-sh/setup-bun@v2
18 | 
19 |       - name: Install dependencies
20 |         run: bun install
21 | 
22 |       - name: Run Lint and Format
23 |         run: bun lint
24 | 
25 |       - name: Run tests
26 |         run: bun test
27 | 
28 |       - name: Run build
29 |         run: bun run build
30 | 


--------------------------------------------------------------------------------
/.github/workflows/dependabot-auto-merge.yml:
--------------------------------------------------------------------------------
 1 | name: 'Dependabot: Auto-merge'
 2 | 
 3 | on:
 4 |   pull_request:
 5 |     branches: [ main ]
 6 | 
 7 | permissions:
 8 |   contents: write
 9 |   pull-requests: write
10 | 
11 | jobs:
12 |   auto-merge:
13 |     runs-on: ubuntu-latest
14 |     if: github.actor == 'dependabot[bot]'
15 |     steps:
16 |       - uses: actions/checkout@v4
17 | 
18 |       - name: Enable auto-merge for Dependabot PRs
19 |         run: gh pr merge --auto --merge "$PR_URL"
20 |         env:
21 |           PR_URL: ${{ github.event.pull_request.html_url }}
22 |           GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
23 | 


--------------------------------------------------------------------------------
/.github/workflows/dependabot.yml:
--------------------------------------------------------------------------------
 1 | name: 'Dependabot: Update bun.lockb'
 2 | 
 3 | on:
 4 |   pull_request:
 5 |     paths:
 6 |       - "package.json"
 7 | 
 8 | permissions:
 9 |   contents: write
10 | 
11 | jobs:
12 |   update-bun-lockb:
13 |     name: "Update bun.lockb"
14 |     if: github.actor == 'dependabot[bot]'
15 |     runs-on: ubuntu-latest
16 |     steps:
17 |       - uses: oven-sh/setup-bun@v2
18 |       - uses: actions/checkout@v4
19 |         with:
20 |           fetch-depth: 0
21 |           ref: ${{ github.event.pull_request.head.ref }}
22 |       - run: |
23 |           bun install --yarn
24 |           git add bun.lockb
25 |           git config --global user.name 'dependabot[bot]'
26 |           git config --global user.email 'dependabot[bot]@users.noreply.github.com'
27 |           git commit --amend --no-edit
28 |           git push --force
29 | 


--------------------------------------------------------------------------------
/.github/workflows/fly-deploy.yml:
--------------------------------------------------------------------------------
 1 | # See https://fly.io/docs/app-guides/continuous-deployment-with-github-actions/
 2 | 
 3 | name: Deploy to Production
 4 | on:
 5 |   push:
 6 |     branches:
 7 |       - main
 8 | jobs:
 9 |   deploy:
10 |     name: Deploy app
11 |     runs-on: ubuntu-latest
12 |     concurrency: deploy-group
13 |     steps:
14 |       - uses: actions/checkout@v4
15 |       - uses: superfly/flyctl-actions/setup-flyctl@master
16 |       - run: flyctl deploy --remote-only
17 |         env:
18 |           FLY_API_TOKEN: ${{ secrets.FLY_API_TOKEN }}
19 | 
20 |   notify:
21 |     name: Discord Notification
22 |     needs: deploy
23 |     runs-on: ubuntu-latest
24 |     if: always()
25 |     steps:
26 |       - name: Send Discord notification
27 |         uses: sarisia/actions-status-discord@v1
28 |         with:
29 |           webhook: ${{ secrets.DISCORD_DEV_WEBHOOK }}
30 |           status: ${{ job.status }}
31 |           title: ${{ job.status == 'success' && '🚀 Deployed to Production' || '🚨 Deploy Failed' }}
32 |           description: ${{ job.status == 'success' && 'Production deployment completed successfully' || 'Production deployment failed' }}
33 |           color: ${{ job.status == 'success' && 0x28A745 || 0xFF0000 }}
34 | 


--------------------------------------------------------------------------------
/.gitignore:
--------------------------------------------------------------------------------
 1 | # See https://help.github.com/articles/ignoring-files/ for more about ignoring files.
 2 | 
 3 | # dependencies
 4 | /node_modules
 5 | /.pnp
 6 | .pnp.*
 7 | .yarn/*
 8 | !.yarn/patches
 9 | !.yarn/plugins
10 | !.yarn/releases
11 | !.yarn/versions
12 | 
13 | # testing
14 | /coverage
15 | 
16 | # next.js
17 | /.next/
18 | /out/
19 | 
20 | # production
21 | /build
22 | 
23 | # misc
24 | .DS_Store
25 | *.pem
26 | 
27 | # debug
28 | npm-debug.log*
29 | yarn-debug.log*
30 | yarn-error.log*
31 | 
32 | # env files (can opt-in for commiting if needed)
33 | .env*
34 | 
35 | # vercel
36 | .vercel
37 | 
38 | # typescript
39 | *.tsbuildinfo
40 | next-env.d.ts
41 | 


--------------------------------------------------------------------------------
/.tool-versions:
--------------------------------------------------------------------------------
1 | bun 1.1.42
2 | 


--------------------------------------------------------------------------------
/.vscode/extensions.json:
--------------------------------------------------------------------------------
1 | {
2 |   "recommendations": ["biomejs.biome", "bruceyuhb.hsl-preview"]
3 | }
4 | 


--------------------------------------------------------------------------------
/.vscode/settings.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "editor.formatOnSave": true,
 3 |   "editor.defaultFormatter": "biomejs.biome",
 4 |   "editor.codeActionsOnSave": {
 5 |     "quickfix.biome": "explicit",
 6 |     "source.organizeImports.biome": "explicit"
 7 |   },
 8 |   "[javascript]": {
 9 |     "editor.defaultFormatter": "biomejs.biome"
10 |   },
11 |   "workbench.editor.customLabels.patterns": {
12 |     "**/{index,page,actions,hooks,components,utils,types,functions}.{js,ts,jsx,tsx,mjs,mts}": "${dirname}/${filename}"
13 |   }
14 | }
15 | 


--------------------------------------------------------------------------------
/Dockerfile:
--------------------------------------------------------------------------------
 1 | # syntax = docker/dockerfile:1
 2 | 
 3 | # Adjust BUN_VERSION as desired
 4 | ARG BUN_VERSION=1.1
 5 | FROM oven/bun:${BUN_VERSION}-slim as base
 6 | 
 7 | LABEL fly_launch_runtime="Next.js"
 8 | 
 9 | # Next.js app lives here
10 | WORKDIR /app
11 | 
12 | # Set production environment
13 | ENV NODE_ENV="production"
14 | ENV NEXT_PUBLIC_APP_URL="https://web-timer.fly.dev"
15 | ENV NEXT_PUBLIC_GA_MEASUREMENT_ID="G-MMBJ6QJ3PM"
16 | 
17 | 
18 | # Throw-away build stage to reduce size of final image
19 | FROM base as build
20 | 
21 | # Install packages needed to build node modules
22 | RUN apt-get update -qq && \
23 |     apt-get install --no-install-recommends -y build-essential pkg-config python-is-python3
24 | 
25 | # Install node modules
26 | COPY bun.lockb package.json yarn.lock ./
27 | RUN bun install --frozen-lockfile
28 | 
29 | # Copy application code
30 | COPY . .
31 | 
32 | # Build application
33 | RUN bun --bun run build
34 | 
35 | # Remove development dependencies
36 | RUN rm -rf node_modules && \
37 |     bun install --ci
38 | 
39 | 
40 | # Final stage for app image
41 | FROM base
42 | 
43 | # Copy built application
44 | COPY --from=build /app /app
45 | 
46 | # Start the server by default, this can be overwritten at runtime
47 | EXPOSE 3000
48 | CMD [ "bun", "run", "start" ]
49 | 


--------------------------------------------------------------------------------
/README.md:
--------------------------------------------------------------------------------
 1 | # Web Timer
 2 | 
 3 | A modern, customizable web-based timer application built with Next.js. Perfect for productivity, workouts, presentations, or any timed activities.
 4 | 
 5 | ## Features
 6 | 
 7 | - 🎯 Precise timer with customizable resolution
 8 | - 🎨 Customizable UI with different fonts and orientations
 9 | - 🔔 Configurable finish sound and volume
10 | - 🤝 Real-time timer sharing functionality
11 | - 📱 Responsive design for all devices
12 | - 📊 Analytics integration for usage tracking
13 | 
14 | ## Tech Stack
15 | 
16 | - [Next.js 15](https://nextjs.org/) - React framework with Turbopack
17 | - [React 19](https://react.dev/) - UI library
18 | - [TypeScript](https://www.typescriptlang.org/) - Type safety
19 | - [Tailwind CSS](https://tailwindcss.com/) - Styling
20 | - [Radix UI](https://www.radix-ui.com/) - Headless UI components
21 | - [Hono](https://hono.dev/) - Web framework
22 | - [Motion](https://motion.dev/) - Animation library
23 | - [Google Analytics](https://analytics.google.com/) - Usage tracking
24 | 
25 | ## Getting Started
26 | 
27 | ### Prerequisites
28 | 
29 | - [Bun](https://bun.sh/) - JavaScript runtime and package manager
30 | 
31 | ### Installation
32 | 
33 | 1. Clone the repository:
34 | ```bash
35 | git clone https://github.com/yoshikouki/web-timer.git
36 | cd web-timer
37 | ```
38 | 
39 | 2. Install dependencies:
40 | ```bash
41 | bun install
42 | ```
43 | 
44 | 3. Run the development server:
45 | ```bash
46 | bun dev
47 | ```
48 | 
49 | The development server will start on port 8888. Open [http://localhost:8888](http://localhost:8888) with your browser to see the application.
50 | 


--------------------------------------------------------------------------------
/biome.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
 3 |   "files": {
 4 |     "ignoreUnknown": false,
 5 |     "ignore": []
 6 |   },
 7 |   "formatter": {
 8 |     "enabled": true,
 9 |     "indentStyle": "space",
10 |     "indentWidth": 2
11 |   },
12 |   "organizeImports": {
13 |     "enabled": true
14 |   },
15 |   "linter": {
16 |     "enabled": true,
17 |     "rules": {
18 |       "recommended": true,
19 |       "nursery": { "useSortedClasses": "warn" },
20 |       "correctness": {
21 |         "noUnusedImports": "warn",
22 |         "noUnusedVariables": "warn"
23 |       }
24 |     }
25 |   },
26 |   "css": {
27 |     "formatter": {
28 |       "enabled": true,
29 |       "indentStyle": "space",
30 |       "indentWidth": 2
31 |     },
32 |     "linter": {
33 |       "enabled": true
34 |     },
35 |     "parser": {
36 |       "cssModules": true
37 |     }
38 |   },
39 |   "vcs": {
40 |     "enabled": true,
41 |     "clientKind": "git",
42 |     "useIgnoreFile": true
43 |   },
44 |   "javascript": {
45 |     "formatter": {
46 |       "quoteStyle": "double"
47 |     }
48 |   }
49 | }
50 | 


--------------------------------------------------------------------------------
/bun.lockb:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/yoshikouki/web-timer/main/bun.lockb


--------------------------------------------------------------------------------
/components.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "$schema": "https://ui.shadcn.com/schema.json",
 3 |   "style": "new-york",
 4 |   "rsc": true,
 5 |   "tsx": true,
 6 |   "tailwind": {
 7 |     "config": "tailwind.config.ts",
 8 |     "css": "src/app/globals.css",
 9 |     "baseColor": "stone",
10 |     "cssVariables": true,
11 |     "prefix": ""
12 |   },
13 |   "aliases": {
14 |     "components": "@/components",
15 |     "utils": "@/lib/utils",
16 |     "ui": "@/components/ui",
17 |     "lib": "@/lib",
18 |     "hooks": "@/hooks"
19 |   }
20 | }
21 | 


--------------------------------------------------------------------------------
/cspell.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "version": "0.2",
 3 |   "language": "en",
 4 |   "ignorePaths": [
 5 |     "fly.toml",
 6 |     "Dockerfile",
 7 |     "src/components/timer/timer-controller-settings/settings.ts"
 8 |   ],
 9 |   "words": [
10 |     "flyctl",
11 |     "maoudamashii",
12 |     "superfly",
13 |     "onepoint",
14 |     "poppins",
15 |     "sora",
16 |     "teko",
17 |     "comfortaa"
18 |   ]
19 | }
20 | 


--------------------------------------------------------------------------------
/docs/analytics-events.md:
--------------------------------------------------------------------------------
  1 | # Analytics Events Design
  2 | 
  3 | This document describes the Google Analytics events tracked in the Web Timer application.
  4 | 
  5 | ## Event Categories
  6 | 
  7 | ### Timer
  8 | Events related to timer operations
  9 | 
 10 | #### Timer Operations
 11 | - **action**: `timer_start`
 12 |   - **category**: `timer`
 13 |   - **label**: `start`
 14 |   - **value**: Initial time set (in seconds)
 15 | 
 16 | - **action**: `timer_pause`
 17 |   - **category**: `timer`
 18 |   - **label**: `pause`
 19 |   - **value**: Remaining time (in seconds)
 20 | 
 21 | - **action**: `timer_reset`
 22 |   - **category**: `timer`
 23 |   - **label**: `reset`
 24 |   - **value**: Remaining time at reset (in seconds)
 25 | 
 26 | - **action**: `timer_complete`
 27 |   - **category**: `timer`
 28 |   - **label**: `complete`
 29 |   - **value**: Total time that was set (in seconds)
 30 | 
 31 | #### Timer Settings
 32 | - **action**: `timer_settings_open`
 33 |   - **category**: `timer_settings`
 34 |   - **label**: `open`
 35 | 
 36 | - **action**: `timer_settings_close`
 37 |   - **category**: `timer_settings`
 38 |   - **label**: `close`
 39 | 
 40 | - **action**: `timer_time_set`
 41 |   - **category**: `timer_settings`
 42 |   - **label**: `time`
 43 |   - **value**: Time set (in seconds)
 44 | 
 45 | - **action**: `timer_font_change`
 46 |   - **category**: `timer_settings`
 47 |   - **label**: Font name
 48 | 
 49 | - **action**: `timer_orientation_change`
 50 |   - **category**: `timer_settings`
 51 |   - **label**: `horizontal` | `vertical`
 52 | 
 53 | - **action**: `timer_resolution_change`
 54 |   - **category**: `timer_settings`
 55 |   - **label**: Resolution in milliseconds
 56 | 
 57 | - **action**: `timer_finish_sound_change`
 58 |   - **category**: `timer_settings`
 59 |   - **label**: Sound name
 60 | 
 61 | - **action**: `timer_finish_sound_volume_change`
 62 |   - **category**: `timer_settings`
 63 |   - **label**: `volume`
 64 |   - **value**: Volume level (0-1)
 65 | 
 66 | ### Share
 67 | Events related to sharing functionality
 68 | 
 69 | - **action**: `timer_share`
 70 |   - **category**: `share`
 71 |   - **label**: `create`
 72 |   - **value**: Time set when shared (in seconds)
 73 | 
 74 | - **action**: `timer_share_join`
 75 |   - **category**: `share`
 76 |   - **label**: `join`
 77 |   - **value**: Remaining time when joined (in seconds)
 78 | 
 79 | ### Error
 80 | Events related to error tracking
 81 | 
 82 | - **action**: `error`
 83 |   - **category**: `error`
 84 |   - **label**: Error message
 85 | 
 86 | ## Best Practices
 87 | 
 88 | ### Event Tracking Implementation
 89 | 
 90 | 1. **Centralize Event Tracking in Custom Hooks**
 91 |    - Consolidate related event tracking logic in custom hooks
 92 |    - Example: Timer settings events are tracked in `useTimerCore` hook
 93 |    - This approach reduces code duplication and improves maintainability
 94 | 
 95 | 2. **Event Tracking in State Management**
 96 |    - Track events where state changes occur
 97 |    - Avoid scattering event tracking across UI components
 98 |    - Example: All timer settings events are tracked in `updateTimerControlSettings`
 99 | 
100 | ```typescript
101 | // Good: Centralized event tracking in state management
102 | const updateTimerControlSettings = (settings: Partial<TimerControllerSettingsType>) => {
103 |   setTimerControlSettings((prev) => {
104 |     // Track all settings changes in one place
105 |     for (const [key, value] of Object.entries(settings)) {
106 |       switch (key) {
107 |         case "font":
108 |           events.timerFontChange(value);
109 |           break;
110 |         // ... other settings
111 |       }
112 |     }
113 |     return { ...prev, ...settings };
114 |   });
115 | };
116 | 
117 | // Bad: Scattered event tracking in components
118 | const FontSelector = () => {
119 |   return (
120 |     <Select
121 |       onValueChange={(font) => {
122 |         updateTimerControlSettings({ font });
123 |         events.timerFontChange(font); // Avoid tracking here
124 |       }}
125 |     />
126 |   );
127 | };
128 | ```
129 | 
130 | 3. **Type Safety**
131 |    - Use TypeScript to ensure event parameters are correct
132 |    - Define clear interfaces for event tracking functions
133 |    - Leverage type inference and validation
134 | 
135 | 4. **Testing Considerations**
136 |    - Event tracking should be easily mockable for testing
137 |    - Consider creating test utilities for event tracking
138 |    - Verify events are fired with correct parameters
139 | 
140 | ## Usage Example
141 | 
142 | ```typescript
143 | import { events } from "@/components/analytics/events";
144 | 
145 | // When timer starts
146 | events.timerStart(300); // 5 minutes = 300 seconds
147 | 
148 | // When timer settings change
149 | events.timerFontChange("Inter");
150 | events.timerOrientationChange("horizontal");
151 | 
152 | // When settings dialog opens/closes
153 | events.timerSettingsOpen();
154 | events.timerSettingsClose();
155 | 
156 | // When error occurs
157 | events.error("Failed to connect to shared timer");
158 | ```
159 | 
160 | ## Implementation Notes
161 | 
162 | 1. All time values are tracked in seconds for consistency
163 | 2. Events are categorized into four main groups: Timer, Timer Settings, Share, and Error
164 | 3. Each event follows a consistent naming pattern for better analytics organization
165 | 4. Error events capture the error message for debugging purposes 


--------------------------------------------------------------------------------
/fly.toml:
--------------------------------------------------------------------------------
 1 | # fly.toml app configuration file generated for web-timer on 2024-11-22T22:48:43+09:00
 2 | #
 3 | # See https://fly.io/docs/reference/configuration/ for information about how to use this file.
 4 | #
 5 | 
 6 | app = 'web-timer'
 7 | primary_region = 'nrt'
 8 | 
 9 | [build]
10 |   dockerfile = "Dockerfile"
11 | 
12 | [env]
13 |   NODE_ENV = "production"
14 |   NEXT_PUBLIC_APP_URL = "https://web-timer.fly.dev"
15 |   NEXT_PUBLIC_GA_MEASUREMENT_ID = "G-MMBJ6QJ3PM"
16 | 
17 | [http_service]
18 |   internal_port = 3000
19 |   force_https = true
20 |   auto_stop_machines = 'stop'
21 |   auto_start_machines = true
22 |   min_machines_running = 1
23 |   processes = ['app']
24 | 
25 | [[vm]]
26 |   memory = '1gb'
27 |   cpu_kind = 'shared'
28 |   cpus = 1
29 | 


--------------------------------------------------------------------------------
/next.config.ts:
--------------------------------------------------------------------------------
 1 | import type { NextConfig } from "next";
 2 | 
 3 | const nextConfig: NextConfig = {
 4 |   devIndicators: {
 5 |     appIsrStatus: false,
 6 |     buildActivity: true,
 7 |     buildActivityPosition: "bottom-right",
 8 |   },
 9 |   experimental: {
10 |     reactCompiler: true,
11 |   },
12 | };
13 | 
14 | export default nextConfig;
15 | 


--------------------------------------------------------------------------------
/package.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "name": "web-timer",
 3 |   "version": "0.1.0",
 4 |   "private": true,
 5 |   "scripts": {
 6 |     "dev": "PORT=8888 next dev --turbopack",
 7 |     "scan": "PORT=8888 next dev & bunx react-scan@latest localhost:8888",
 8 |     "build": "next build",
 9 |     "start": "next start",
10 |     "lint": "bunx @biomejs/biome check .",
11 |     "format": "bunx @biomejs/biome check --write .",
12 |     "format:unsafe": "bunx @biomejs/biome check --write --unsafe .",
13 |     "update:all": "bun update --latest"
14 |   },
15 |   "dependencies": {
16 |     "@hono/zod-validator": "^0.4.2",
17 |     "@next/third-parties": "^15.1.4",
18 |     "@radix-ui/react-collapsible": "^1.1.2",
19 |     "@radix-ui/react-icons": "^1.3.2",
20 |     "@radix-ui/react-popover": "^1.1.4",
21 |     "@radix-ui/react-scroll-area": "^1.2.2",
22 |     "@radix-ui/react-select": "^2.1.4",
23 |     "@radix-ui/react-slider": "^1.2.2",
24 |     "@radix-ui/react-slot": "^1.1.1",
25 |     "@radix-ui/react-toggle": "^1.1.1",
26 |     "babel-plugin-react-compiler": "^19.0.0-beta-55955c9-20241229",
27 |     "class-variance-authority": "^0.7.1",
28 |     "clsx": "^2.1.1",
29 |     "hono": "^4.6.16",
30 |     "lucide-react": "^0.469.0",
31 |     "motion": "12.0.0-alpha.2",
32 |     "next": "15.1.4",
33 |     "next-themes": "^0.4.4",
34 |     "next-view-transitions": "^0.3.4",
35 |     "qrcode.react": "^4.2.0",
36 |     "react": "^19.0.0",
37 |     "react-dom": "^19.0.0",
38 |     "sonner": "^1.7.1",
39 |     "tailwind-merge": "^2.6.0",
40 |     "tailwindcss-animate": "^1.0.7",
41 |     "zod": "^3.24.1"
42 |   },
43 |   "devDependencies": {
44 |     "@biomejs/biome": "1.9.4",
45 |     "@flydotio/dockerfile": "^0.6.1",
46 |     "@types/bun": "^1.1.16",
47 |     "@types/dom-view-transitions": "^1.0.5",
48 |     "@types/gtag.js": "^0.0.20",
49 |     "@types/node": "^22.10.5",
50 |     "@types/react": "^19.0.4",
51 |     "@types/react-dom": "^19.0.2",
52 |     "postcss": "^8.4.49",
53 |     "tailwindcss": "^3.4.17",
54 |     "typescript": "^5.7.3"
55 |   }
56 | }
57 | 


--------------------------------------------------------------------------------
/postcss.config.mjs:
--------------------------------------------------------------------------------
1 | /** @type {import('postcss-load-config').Config} */
2 | const config = {
3 |   plugins: {
4 |     tailwindcss: {},
5 |   },
6 | };
7 | 
8 | export default config;
9 | 


--------------------------------------------------------------------------------
/public/audio/sfx/maoudamashii_se_effect11.mp3:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/yoshikouki/web-timer/main/public/audio/sfx/maoudamashii_se_effect11.mp3


--------------------------------------------------------------------------------
/public/audio/sfx/maoudamashii_se_onepoint09.mp3:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/yoshikouki/web-timer/main/public/audio/sfx/maoudamashii_se_onepoint09.mp3


--------------------------------------------------------------------------------
/public/audio/sfx/maoudamashii_se_onepoint22.mp3:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/yoshikouki/web-timer/main/public/audio/sfx/maoudamashii_se_onepoint22.mp3


--------------------------------------------------------------------------------
/public/audio/sfx/maoudamashii_se_onepoint23.mp3:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/yoshikouki/web-timer/main/public/audio/sfx/maoudamashii_se_onepoint23.mp3


--------------------------------------------------------------------------------
/public/audio/sfx/maoudamashii_se_onepoint26.mp3:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/yoshikouki/web-timer/main/public/audio/sfx/maoudamashii_se_onepoint26.mp3


--------------------------------------------------------------------------------
/public/audio/sfx/maoudamashii_se_onepoint28.mp3:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/yoshikouki/web-timer/main/public/audio/sfx/maoudamashii_se_onepoint28.mp3


--------------------------------------------------------------------------------
/public/audio/sfx/maoudamashii_se_system34.mp3:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/yoshikouki/web-timer/main/public/audio/sfx/maoudamashii_se_system34.mp3


--------------------------------------------------------------------------------
/public/audio/sfx/maoudamashii_se_system35.mp3:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/yoshikouki/web-timer/main/public/audio/sfx/maoudamashii_se_system35.mp3


--------------------------------------------------------------------------------
/public/audio/sfx/simple_01.mp3:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/yoshikouki/web-timer/main/public/audio/sfx/simple_01.mp3


--------------------------------------------------------------------------------
/public/audio/sfx/simple_02.mp3:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/yoshikouki/web-timer/main/public/audio/sfx/simple_02.mp3


--------------------------------------------------------------------------------
/public/icon-192x192.webp:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/yoshikouki/web-timer/main/public/icon-192x192.webp


--------------------------------------------------------------------------------
/public/icon-512x512.webp:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/yoshikouki/web-timer/main/public/icon-512x512.webp


--------------------------------------------------------------------------------
/public/icon.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/yoshikouki/web-timer/main/public/icon.png


--------------------------------------------------------------------------------
/public/logo.png:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/yoshikouki/web-timer/main/public/logo.png


--------------------------------------------------------------------------------
/public/logo.svg:
--------------------------------------------------------------------------------
1 | <svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M512 1024c282.77 0 512-229.23 512-512 0-53.464-8.19-105.015-23.4-153.464L512 640 23.397 358.536C8.195 406.985 0 458.536 0 512c0 282.77 229.23 512 512 512Z" clip-rule="evenodd"/><path fill="currentColor" d="M944.945 238.558 512 488 79.055 238.558C169.794 95.191 329.78 0 512 0s342.206 95.191 432.945 238.558Z"/><path fill="currentColor" d="M233.27 479.436 512 640v384C229.23 1024 0 794.77 0 512S229.23 0 512 0v488L298.373 364.918C287.944 358.018 275.441 354 262 354c-36.451 0-66 29.549-66 66 0 26.153 15.212 48.754 37.27 59.436Z"/></svg>


--------------------------------------------------------------------------------
/public/logo.webp:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/yoshikouki/web-timer/main/public/logo.webp


--------------------------------------------------------------------------------
/src/app/api/[[...route]]/route.ts:
--------------------------------------------------------------------------------
 1 | import { server } from "@/server";
 2 | import { Hono } from "hono";
 3 | import { handle } from "hono/vercel";
 4 | 
 5 | export const runtime = "nodejs";
 6 | 
 7 | const app = new Hono().basePath("/api");
 8 | 
 9 | app.route("/", server);
10 | 
11 | export const GET = handle(app);
12 | export const POST = handle(app);
13 | export const PUT = handle(app);
14 | export const PATCH = handle(app);
15 | export const DELETE = handle(app);
16 | export const HEAD = handle(app);
17 | export const OPTIONS = handle(app);
18 | 


--------------------------------------------------------------------------------
/src/app/favicon.ico:
--------------------------------------------------------------------------------
https://raw.githubusercontent.com/yoshikouki/web-timer/main/src/app/favicon.ico


--------------------------------------------------------------------------------
/src/app/fonts.ts:
--------------------------------------------------------------------------------
 1 | import type { TimerControllerFont } from "@/components/timer/timer-controller-settings/settings";
 2 | import type { NextFont } from "next/dist/compiled/@next/font";
 3 | import { Comfortaa, Poppins, Sora, Teko } from "next/font/google";
 4 | 
 5 | const poppins = Poppins({
 6 |   subsets: ["latin"],
 7 |   weight: ["700"],
 8 | });
 9 | const sora = Sora({
10 |   subsets: ["latin"],
11 |   weight: ["700"],
12 | });
13 | const comfortaa = Comfortaa({
14 |   subsets: ["latin"],
15 |   weight: ["700"],
16 | });
17 | const teko = Teko({
18 |   subsets: ["latin"],
19 |   weight: ["700"],
20 | });
21 | 
22 | export const fonts: Record<TimerControllerFont, NextFont> = {
23 |   poppins,
24 |   sora,
25 |   comfortaa,
26 |   teko,
27 | };
28 | 


--------------------------------------------------------------------------------
/src/app/footer.tsx:
--------------------------------------------------------------------------------
 1 | import Link from "next/link";
 2 | 
 3 | import { GitHubIcon } from "@/components/icons/github-icon";
 4 | import { XIcon } from "@/components/icons/x-icon";
 5 | import { Button } from "@/components/ui/button";
 6 | 
 7 | export { metadata, viewport } from "./metadata";
 8 | 
 9 | export const Footer = () => {
10 |   return (
11 |     <footer className="mt-20 flex w-full flex-col items-center justify-center gap-4 p-4 pb-96">
12 |       <div className="flex items-center gap-4 p-4">
13 |         <Link
14 |           href="https://github.com/yoshikouki/web-timer"
15 |           target="_blank"
16 |           rel="noreferrer noopener"
17 |           prefetch={false}
18 |         >
19 |           <GitHubIcon className="size-6" />
20 |         </Link>
21 |         <Link
22 |           href="https://x.com/yoshikouki_"
23 |           target="_blank"
24 |           rel="noreferrer noopener"
25 |           prefetch={false}
26 |         >
27 |           <XIcon className="size-4" />
28 |         </Link>
29 |       </div>
30 |       <div>
31 |         <Button
32 |           variant="link"
33 |           asChild
34 |           className="text-muted-foreground text-sm"
35 |         >
36 |           <Link
37 |             href="https://maou.audio/"
38 |             target="_blank"
39 |             rel="noreferrer noopener"
40 |             prefetch={false}
41 |           >
42 |             SFX by MaouDamashii
43 |           </Link>
44 |         </Button>
45 |       </div>
46 |       {/* copyright */}
47 |       <div className="text-muted-foreground text-sm">
48 |         Copyright © 2024 yoshikouki
49 |       </div>
50 |     </footer>
51 |   );
52 | };
53 | 


--------------------------------------------------------------------------------
/src/app/globals.css:
--------------------------------------------------------------------------------
 1 | @tailwind base;
 2 | @tailwind components;
 3 | @tailwind utilities;
 4 | 
 5 | @layer base {
 6 |   :root {
 7 |     --background: 0 4.8% 12.4%; /* 2. #211E1E */
 8 |     --foreground: 60 9.1% 97.8%;
 9 |     --card: 0 4.8% 12.4%;
10 |     --card-foreground: 60 9.1% 97.8%;
11 |     --popover: 0 4.8% 12.4%;
12 |     --popover-foreground: 60 9.1% 97.8%;
13 |     --primary: 35.7 75.4% 63.3%; /* 2. #E8AF5B */
14 |     --primary-foreground: 24 9.8% 10%;
15 |     --secondary: 195 8.8% 16.8%;
16 |     --secondary-foreground: 60 9.1% 97.8%;
17 |     --muted: 195 8.8% 16.8%;
18 |     --muted-foreground: 24 5.4% 63.9%;
19 |     --accent: 195 68.8% 12.4%;
20 |     --accent-foreground: 60 9.1% 97.8%;
21 |     --destructive: 354.3 62.2% 36.3%; /* 2. #96232E */
22 |     --destructive-foreground: 60 9.1% 97.8%;
23 |     --border: 195 8.8% 16.8%;
24 |     --input: 195 8.8% 16.8%;
25 |     --ring: 24 5.7% 82.9%;
26 |     --chart-1: 220 70% 50%;
27 |     --chart-2: 160 60% 45%;
28 |     --chart-3: 30 80% 55%;
29 |     --chart-4: 280 65% 60%;
30 |     --chart-5: 340 75% 55%;
31 | 
32 |     --radius: 0.5rem;
33 |   }
34 |   .light {
35 |     --background: 0 0% 100%;
36 |     --foreground: 0 4.8% 12.4%;
37 |     --card: 0 0% 100%;
38 |     --card-foreground: 0 4.8% 12.4%;
39 |     --popover: 0 0% 100%;
40 |     --popover-foreground: 0 4.8% 12.4%;
41 |     --primary: 24 9.8% 10%;
42 |     --primary-foreground: 60 9.1% 97.8%;
43 |     --secondary: 60 4.8% 95.9%;
44 |     --secondary-foreground: 24 9.8% 10%;
45 |     --muted: 60 4.8% 95.9%;
46 |     --muted-foreground: 25 5.3% 44.7%;
47 |     --accent: 60 4.8% 95.9%;
48 |     --accent-foreground: 24 9.8% 10%;
49 |     --destructive: 0 84.2% 60.2%;
50 |     --destructive-foreground: 60 9.1% 97.8%;
51 |     --border: 20 5.9% 90%;
52 |     --input: 20 5.9% 90%;
53 |     --ring: 0 4.8% 12.4%;
54 |     --chart-1: 12 76% 61%;
55 |     --chart-2: 173 58% 39%;
56 |     --chart-3: 197 37% 24%;
57 |     --chart-4: 43 74% 66%;
58 |     --chart-5: 27 87% 67%;
59 |   }
60 |   /* --background: 285 14% 16%; /* 1. #202430 */
61 |   /* --primary: 308 34% 43%; /* 1. #934889 */
62 |   /* --destructive: 7 58% 48%; /* 1. #C14333 */
63 |   /* --background: 0 0% 9.8%; /* 3. #191919 */
64 |   /* --destructive: 1.7 81.1% 50.2%; /* 3. #E71F19 */
65 |   /* --primary: 0 0% 90.2%; /* 3. #E6E6E6 */
66 | }
67 | 
68 | @layer base {
69 |   * {
70 |     @apply border-border;
71 |   }
72 |   body {
73 |     @apply bg-background text-foreground;
74 |   }
75 | }
76 | 


--------------------------------------------------------------------------------
/src/app/head-title-controller.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { useHeadTitle } from "@/components/head-title";
 4 | import { useTimer } from "@/components/timer/use-timer";
 5 | import { useEffect } from "react";
 6 | 
 7 | export const HeadTitleController = () => {
 8 |   const { setTitle } = useHeadTitle();
 9 |   const { time, status } = useTimer();
10 | 
11 |   useEffect(() => {
12 |     if (status === "running") {
13 |       const mm =
14 |         time.fullMinutes >= 100
15 |           ? time.fullMinutes
16 |           : time.fullMinutes.toString().padStart(2, "0");
17 |       setTitle(`${mm}:${time.ss} - Web Timer`);
18 |     } else {
19 |       setTitle("");
20 |     }
21 |   }, [status, time.fullMinutes, time.ss, setTitle]);
22 | 
23 |   return null;
24 | };
25 | 


--------------------------------------------------------------------------------
/src/app/layout.tsx:
--------------------------------------------------------------------------------
 1 | import { Inter } from "next/font/google";
 2 | import "./globals.css";
 3 | import { GoogleAnalytics } from "@/components/analytics/google-analytics";
 4 | import { ViewTransitionProvider } from "@/components/animated-link/view-transition-provider";
 5 | import { HeadTitleProvider } from "@/components/head-title";
 6 | import { Toaster } from "@/components/ui/sonner";
 7 | import { cn } from "@/lib/utils";
 8 | import { Footer } from "./footer";
 9 | 
10 | const font = Inter({ subsets: ["latin"] });
11 | 
12 | export { metadata } from "./metadata";
13 | 
14 | export default function RootLayout({
15 |   children,
16 | }: Readonly<{
17 |   children: React.ReactNode;
18 | }>) {
19 |   return (
20 |     <ViewTransitionProvider>
21 |       <HeadTitleProvider>
22 |         <html lang="en" className="dark">
23 |           <body className={cn("antialiased", font.className)}>
24 |             <GoogleAnalytics />
25 |             {children}
26 |             <Footer />
27 |             <Toaster />
28 |           </body>
29 |         </html>
30 |       </HeadTitleProvider>
31 |     </ViewTransitionProvider>
32 |   );
33 | }
34 | 


--------------------------------------------------------------------------------
/src/app/manifest.ts:
--------------------------------------------------------------------------------
 1 | import type { MetadataRoute } from "next";
 2 | import { description } from "./metadata";
 3 | 
 4 | export default function manifest(): MetadataRoute.Manifest {
 5 |   return {
 6 |     name: "Web Timer",
 7 |     short_name: "Web Timer",
 8 |     description,
 9 |     start_url: "/",
10 |     display: "standalone",
11 |     background_color: "#211E1E",
12 |     theme_color: "#211E1E",
13 |     icons: [
14 |       {
15 |         src: "/favicon.ico",
16 |         sizes: "256x256",
17 |         type: "image/png",
18 |       },
19 |       {
20 |         src: "/icon.png",
21 |         sizes: "1024x1024",
22 |         type: "image/png",
23 |       },
24 |       {
25 |         src: "/icon-192x192.webp",
26 |         sizes: "192x192",
27 |         type: "image/webp",
28 |       },
29 |       {
30 |         src: "/icon-512x512.webp",
31 |         sizes: "512x512",
32 |         type: "image/webp",
33 |       },
34 |     ],
35 |   };
36 | }
37 | 


--------------------------------------------------------------------------------
/src/app/metadata.ts:
--------------------------------------------------------------------------------
 1 | import type { Metadata, Viewport } from "next";
 2 | 
 3 | export const title = "Web Timer";
 4 | export const description = "Web Timer is an awesome app!";
 5 | 
 6 | export const metadata: Metadata = {
 7 |   metadataBase: new URL("https://web-timer.vercel.app/"),
 8 |   title,
 9 |   description,
10 |   keywords: ["timer", "stopwatch", "countdown", "pomodoro", "pomodoro timer"],
11 |   authors: { name: "yoshikouki", url: "https://yoshikouki.com/" },
12 |   icons: [
13 |     {
14 |       url: "/icon.png",
15 |       sizes: "1024x1024",
16 |       type: "image/png",
17 |       color: "#211E1E",
18 |       fetchPriority: "high",
19 |     },
20 |     {
21 |       url: "/icon-192x192.webp",
22 |       sizes: "192x192",
23 |       type: "image/webp",
24 |       color: "#211E1E",
25 |       fetchPriority: "auto",
26 |     },
27 |     {
28 |       url: "/icon-512x512.webp",
29 |       sizes: "512x512",
30 |       type: "image/webp",
31 |       color: "#211E1E",
32 |       fetchPriority: "auto",
33 |     },
34 |   ],
35 |   robots: "index, follow",
36 |   openGraph: {
37 |     url: "/",
38 |     title,
39 |     description,
40 |     images: [
41 |       {
42 |         url: "/favicon",
43 |         alt: title,
44 |         width: 256,
45 |         height: 256,
46 |       },
47 |       {
48 |         url: "/icon.png",
49 |         alt: title,
50 |         width: 1024,
51 |         height: 1024,
52 |       },
53 |     ],
54 |   },
55 |   twitter: {
56 |     card: "summary",
57 |     site: "@yoshikouki_",
58 |     creator: "@yoshikouki_",
59 |     title,
60 |     description,
61 |     images: "/icon.png",
62 |   },
63 | };
64 | 
65 | export const viewport: Viewport = {
66 |   themeColor: "#211E1E",
67 | };
68 | 


--------------------------------------------------------------------------------
/src/app/page.tsx:
--------------------------------------------------------------------------------
 1 | import { Timer } from "@/components/timer";
 2 | import { TimerHeader } from "@/components/timer/timer-header";
 3 | import { TimerProvider } from "@/components/timer/timer-provider";
 4 | import { HeadTitleController } from "./head-title-controller";
 5 | import { ShareTimer } from "./share-timer";
 6 | 
 7 | export default function Home() {
 8 |   return (
 9 |     <TimerProvider>
10 |       <HeadTitleController />
11 |       <TimerHeader />
12 |       <main className="flex h-full w-full flex-col items-center justify-center gap-10">
13 |         <section className="flex h-full min-h-svh w-full items-center justify-center">
14 |           <Timer />
15 |         </section>
16 |         <section>
17 |           <ShareTimer />
18 |         </section>
19 |       </main>
20 |     </TimerProvider>
21 |   );
22 | }
23 | 


--------------------------------------------------------------------------------
/src/app/share-timer.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { useAnimatedRouter } from "@/components/animated-link/use-animated-router";
 4 | import { useTimer } from "@/components/timer/use-timer";
 5 | import { Button } from "@/components/ui/button";
 6 | import { client } from "@/server/client";
 7 | import { ShareIcon } from "lucide-react";
 8 | 
 9 | export const ShareTimer = () => {
10 |   const { currentTimer } = useTimer();
11 |   const router = useAnimatedRouter();
12 |   const onShareClick = async () => {
13 |     const response = await client.timers.$post({
14 |       json: currentTimer,
15 |     });
16 |     router.push(response.url);
17 |   };
18 |   return (
19 |     <div className="flex flex-col items-center justify-center gap-2">
20 |       <Button size="lg" onClick={onShareClick}>
21 |         <ShareIcon className="size-4" />
22 |         Share Timer
23 |       </Button>
24 |       <p className="text-muted-foreground text-sm">
25 |         Share the synced timer with others to collaborate.
26 |       </p>
27 |     </div>
28 |   );
29 | };
30 | 


--------------------------------------------------------------------------------
/src/app/timers/[id]/copy-link.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { Button } from "@/components/ui/button";
 4 | import { ClipboardIcon } from "lucide-react";
 5 | import { toast } from "sonner";
 6 | 
 7 | export const CopyLink = () => {
 8 |   const onCopyClick = async () => {
 9 |     const url = window.location.href;
10 |     await navigator.clipboard.writeText(url);
11 |     toast("Link copied to clipboard.");
12 |   };
13 | 
14 |   return (
15 |     <Button size="lg" onClick={onCopyClick}>
16 |       <ClipboardIcon className="size-4" />
17 |       Copy Link
18 |     </Button>
19 |   );
20 | };
21 | 


--------------------------------------------------------------------------------
/src/app/timers/[id]/events/route.ts:
--------------------------------------------------------------------------------
 1 | import {
 2 |   type ClientId,
 3 |   type Controller,
 4 |   sharedTimer,
 5 | } from "@/server/shared-times";
 6 | import { cookies } from "next/headers";
 7 | 
 8 | const COOKIE_NAME = "shared-timer-client-id";
 9 | 
10 | export const GET = async (
11 |   request: Request,
12 |   { params }: { params: Promise<{ id: string }> },
13 | ) => {
14 |   const { id: channelId } = await params;
15 |   const cookieStore = await cookies();
16 | 
17 |   let controller: Controller;
18 |   let clientId: ClientId;
19 | 
20 |   const stream = new ReadableStream<Uint8Array>({
21 |     start: (ctrl) => {
22 |       controller = ctrl;
23 |       clientId = sharedTimer.sse.addClient({
24 |         channelId: channelId,
25 |         controller,
26 |         clientId: cookieStore.get(COOKIE_NAME)?.value,
27 |       });
28 |       cookieStore.set(COOKIE_NAME, clientId);
29 |     },
30 |     cancel: () => {
31 |       sharedTimer.sse.removeClient({ channelId, clientId });
32 |     },
33 |     pull: () => {
34 |       if (!request.signal.aborted) return;
35 |       sharedTimer.sse.removeClient({ channelId, clientId });
36 |     },
37 |   });
38 |   request.signal.addEventListener("abort", () => {
39 |     sharedTimer.sse.removeClient({ channelId, clientId });
40 |   });
41 | 
42 |   return new Response(stream, {
43 |     status: 200,
44 |     headers: {
45 |       "Content-Type": "text/event-stream",
46 |       "Cache-Control": "no-cache",
47 |       Connection: "keep-alive",
48 |     },
49 |   });
50 | };
51 | 
52 | export const PATCH = async (
53 |   request: Request,
54 |   { params }: { params: Promise<{ id: string }> },
55 | ) => {
56 |   try {
57 |     const { id: channelId } = await params;
58 |     const parsed = sharedTimer.parseTimerEvent(await request.json());
59 |     if (!parsed.success) {
60 |       console.error("Invalid request body", parsed.error);
61 |       return new Response("Invalid request body", { status: 400 });
62 |     }
63 |     const newTimer = sharedTimer.updateCurrentTimer(channelId, parsed.data);
64 |     if (!newTimer) {
65 |       console.error("Invalid request", parsed.data);
66 |       return new Response("Invalid request", { status: 400 });
67 |     }
68 |     sharedTimer.sse.broadcast(channelId, parsed.data);
69 |     return new Response(null, { status: 204 }); // No Content
70 |   } catch (error) {
71 |     console.error(error);
72 |     return new Response("Error processing PATCH request", { status: 500 });
73 |   }
74 | };
75 | 


--------------------------------------------------------------------------------
/src/app/timers/[id]/page.tsx:
--------------------------------------------------------------------------------
 1 | import { HeadTitleController } from "@/app/head-title-controller";
 2 | import { TimerHeader } from "@/components/timer/timer-header";
 3 | import { TimerProvider } from "@/components/timer/timer-provider";
 4 | import { url } from "@/lib/url";
 5 | import { CopyLink } from "./copy-link";
 6 | import { QRCode } from "./qr-code";
 7 | import { SharedTimer } from "./shared-timer";
 8 | 
 9 | export default async function TimerPage({
10 |   params,
11 | }: {
12 |   params: Promise<{ id: string }>;
13 | }) {
14 |   const { id } = await params;
15 | 
16 |   return (
17 |     <TimerProvider>
18 |       <HeadTitleController />
19 |       <TimerHeader timerId={id} />
20 |       <main className="flex h-full w-full flex-col items-center justify-center gap-10">
21 |         <section className="flex h-full min-h-svh w-full items-center justify-center">
22 |           <SharedTimer timerId={id} />
23 |         </section>
24 |         <section className="flex w-full flex-col items-center justify-center gap-10">
25 |           <div className="flex w-full max-w-sm flex-col items-start justify-center gap-2 px-4">
26 |             <h2 className="text-center font-bold text-2xl">Share</h2>
27 |             <p className="text-muted-foreground text-sm">
28 |               Share the synced timer with others to collaborate.
29 |             </p>
30 |             <CopyLink />
31 |           </div>
32 |           <div className="flex aspect-square w-full max-w-sm items-center justify-center px-4">
33 |             <QRCode url={url.sharedTimers.show(id, { url: true })} />
34 |           </div>
35 |         </section>
36 |       </main>
37 |     </TimerProvider>
38 |   );
39 | }
40 | 


--------------------------------------------------------------------------------
/src/app/timers/[id]/qr-code.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | import { safeViewTransition } from "@/components/animated-link/safe-view-transition";
 3 | import { cn } from "@/lib/utils";
 4 | import { QRCodeSVG } from "qrcode.react";
 5 | import { useEffect, useRef, useState } from "react";
 6 | 
 7 | export const QRCode = ({
 8 |   url,
 9 |   className,
10 | }: { url: string; className?: string }) => {
11 |   const [size, setSize] = useState(1);
12 |   const [isZoomed, setIsZoomed] = useState(false);
13 |   const renderedSizeRef = useRef(1);
14 |   const containerRef = useRef<HTMLDivElement>(null);
15 |   const qrCodeSvgRef = useRef<SVGSVGElement>(null);
16 | 
17 |   useEffect(() => {
18 |     if (!containerRef.current) return;
19 |     renderedSizeRef.current = containerRef.current.clientWidth;
20 |     setSize(renderedSizeRef.current);
21 |   }, []);
22 | 
23 |   const onZoom = safeViewTransition(() => {
24 |     setIsZoomed((prev) => !prev);
25 |     setSize(
26 |       isZoomed
27 |         ? renderedSizeRef.current
28 |         : Math.min(window.innerWidth, window.innerHeight) - 16,
29 |     );
30 |   });
31 | 
32 |   // const onDownload = () => {
33 |   //   // TODO: WIP
34 |   //   if (!qrCodeSvgRef.current) return;
35 |   //   const svg = qrCodeSvgRef.current;
36 |   //   const svgData = new XMLSerializer().serializeToString(svg);
37 |   //   const canvas = document.createElement("canvas");
38 |   //   canvas.width = svg.clientWidth;
39 |   //   canvas.height = svg.clientHeight;
40 |   //   const ctx = canvas.getContext("2d");
41 |   //   const img = new Image();
42 |   //   img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
43 |   //   ctx?.drawImage(img, 0, 0);
44 |   //   const a = document.createElement("a");
45 |   //   a.href = canvas.toDataURL("image/png");
46 |   //   a.download = "qr-code.png";
47 |   //   a.click();
48 |   // };
49 | 
50 |   return (
51 |     <div
52 |       ref={containerRef}
53 |       className={cn(
54 |         "flex h-full w-full items-center justify-center transition-all duration-300 ease-in-out",
55 |         isZoomed ? "fixed inset-0 bg-background/80 p-10" : "",
56 |         className,
57 |       )}
58 |       onClick={onZoom}
59 |       onKeyDown={(event) => {
60 |         if (event.key !== "q") return;
61 |         onZoom();
62 |       }}
63 |     >
64 |       <div className="">
65 |         <QRCodeSVG
66 |           ref={qrCodeSvgRef}
67 |           value={url}
68 |           size={size}
69 |           marginSize={0}
70 |           bgColor="transparent"
71 |           fgColor="currentColor"
72 |           imageSettings={{
73 |             src: "/icon-192x192.webp",
74 |             x: undefined,
75 |             y: undefined,
76 |             height: size / 2,
77 |             width: size / 2,
78 |             opacity: 1,
79 |             excavate: false,
80 |           }}
81 |           className="transition-all duration-300 ease-in-out"
82 |           style={{
83 |             viewTransitionName: "qr-code",
84 |           }}
85 |         />
86 |       </div>
87 |       {/* <Button
88 |         variant="secondary"
89 |         size="icon"
90 |         className="absolute rounded-xl p-10 opacity-0 transition-opacity duration-300 group-hover:opacity-80 [&_svg]:size-10"
91 |         onClick={onDownload}
92 |       >
93 |         <DownloadIcon />
94 |       </Button> */}
95 |     </div>
96 |   );
97 | };
98 | 


--------------------------------------------------------------------------------
/src/app/timers/[id]/shared-timer.tsx:
--------------------------------------------------------------------------------
1 | "use client";
2 | 
3 | import { Timer } from "@/components/timer";
4 | import { useSharedTimer } from "./use-shared-timer";
5 | 
6 | export const SharedTimer = ({ timerId }: { timerId: string }) => {
7 |   return <Timer useTimer={() => useSharedTimer({ id: timerId })} />;
8 | };
9 | 


--------------------------------------------------------------------------------
/src/app/timers/[id]/use-shared-timer.ts:
--------------------------------------------------------------------------------
  1 | "use client";
  2 | 
  3 | import { events } from "@/components/analytics/events";
  4 | import { TimerContext } from "@/components/timer/timer-provider";
  5 | import {
  6 |   type TimerUpdater,
  7 |   type UpdateCurrentTimerProps,
  8 |   isTimerUpdater,
  9 | } from "@/components/timer/use-timer-core";
 10 | import {
 11 |   type TimerActionEventType,
 12 |   TimerEventMessageSchema,
 13 |   type TimerEventMessageType,
 14 | } from "@/schema/timer-event";
 15 | import { useContext, useEffect, useRef } from "react";
 16 | 
 17 | const pushEvent = async (id: string, event: TimerActionEventType["event"]) => {
 18 |   return await push(id, { event });
 19 | };
 20 | 
 21 | const push = async (id: string, data: TimerEventMessageType) => {
 22 |   return await fetch(`/timers/${id}/events`, {
 23 |     method: "PATCH",
 24 |     body: JSON.stringify(data),
 25 |   });
 26 | };
 27 | 
 28 | export const useSharedTimer = ({
 29 |   id,
 30 | }: {
 31 |   id: string;
 32 | }) => {
 33 |   const eventSourceRef = useRef<EventSource | null>(null);
 34 |   const {
 35 |     start: startTimer,
 36 |     pause: pauseTimer,
 37 |     resume: resumeTimer,
 38 |     stop: stopTimer,
 39 |     reset: resetTimer,
 40 |     updateTime: updateCurrentTime,
 41 |     updateCurrentTimer: updateLocalTimer,
 42 |     ...timer
 43 |   } = useContext(TimerContext);
 44 | 
 45 |   const start = async () => {
 46 |     await pushEvent(id, "start");
 47 |   };
 48 |   const pause = async () => {
 49 |     await pushEvent(id, "pause");
 50 |   };
 51 |   const resume = async () => {
 52 |     await pushEvent(id, "resume");
 53 |   };
 54 |   const reset = async () => {
 55 |     await pushEvent(id, "reset");
 56 |   };
 57 |   const stop = async () => {
 58 |     await pushEvent(id, "stop");
 59 |   };
 60 |   const updateTime = (time: Partial<{ minutes: number; seconds: number }>) => {
 61 |     const newTimer = updateCurrentTime(time);
 62 |     if (!newTimer) return;
 63 |     push(id, {
 64 |       event: "updateTime",
 65 |       time: {
 66 |         minutes: time.minutes ?? timer.time.fullMinutes,
 67 |         seconds: time.seconds ?? timer.time.s,
 68 |       },
 69 |     });
 70 |     return newTimer;
 71 |   };
 72 |   const updateCurrentTimer = (
 73 |     props: UpdateCurrentTimerProps | TimerUpdater,
 74 |   ) => {
 75 |     updateLocalTimer((prev) => {
 76 |       const newTimer = isTimerUpdater(props)
 77 |         ? props(prev)
 78 |         : { ...prev, ...props };
 79 |       push(id, {
 80 |         event: "currentTimer",
 81 |         currentTimer: newTimer,
 82 |       });
 83 |       return newTimer;
 84 |     });
 85 |   };
 86 | 
 87 |   const onEventMessage = (message: TimerEventMessageType) => {
 88 |     switch (message.event) {
 89 |       case "start":
 90 |         startTimer();
 91 |         events.timerShareJoin(timer.time.fullSeconds);
 92 |         break;
 93 |       case "pause":
 94 |         pauseTimer();
 95 |         break;
 96 |       case "resume":
 97 |         resumeTimer();
 98 |         break;
 99 |       case "stop":
100 |         stopTimer();
101 |         break;
102 |       case "reset":
103 |         resetTimer();
104 |         break;
105 |       case "updateTime":
106 |         updateCurrentTime(message.time);
107 |         break;
108 |       case "currentTimer":
109 |         updateLocalTimer(message.currentTimer);
110 |         events.timerShare(timer.time.fullSeconds);
111 |         break;
112 |       default:
113 |         break;
114 |     }
115 |   };
116 | 
117 |   // biome-ignore lint/correctness/useExhaustiveDependencies: onSSE is a dependency
118 |   useEffect(() => {
119 |     if (!eventSourceRef.current) {
120 |       const eventSource = new EventSource(`/timers/${id}/events`);
121 |       eventSourceRef.current = eventSource;
122 |     }
123 |     const eventSource = eventSourceRef.current;
124 |     if (!eventSource) return () => eventSourceRef.current?.close();
125 |     eventSource.onmessage = (event) => {
126 |       const parsed = TimerEventMessageSchema.safeParse(JSON.parse(event.data));
127 |       if (!parsed.success) {
128 |         console.error("Invalid timer event message", event.data);
129 |         events.error("Invalid timer event message");
130 |         return;
131 |       }
132 |       onEventMessage(parsed.data);
133 |     };
134 |     eventSource.onerror = () => {
135 |       console.error("Server-Sent Events connection error");
136 |       events.error("Server-Sent Events connection error");
137 |       eventSource.close();
138 |     };
139 |     return () => {
140 |       eventSourceRef.current?.close();
141 |     };
142 |   }, [id]);
143 | 
144 |   return {
145 |     start,
146 |     pause,
147 |     resume,
148 |     stop,
149 |     reset,
150 |     updateTime,
151 |     updateCurrentTimer,
152 |     ...timer,
153 |   };
154 | };
155 | 


--------------------------------------------------------------------------------
/src/components/analytics/events.ts:
--------------------------------------------------------------------------------
  1 | type GtagEvent = {
  2 |   action: string;
  3 |   category: string;
  4 |   label: string;
  5 |   value?: number;
  6 | };
  7 | 
  8 | const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  9 | 
 10 | const pageview = (url: string) => {
 11 |   if (!GA_MEASUREMENT_ID) return;
 12 |   window.gtag("config", GA_MEASUREMENT_ID, {
 13 |     page_path: url,
 14 |   });
 15 | };
 16 | 
 17 | const event = ({ action, category, label, value }: GtagEvent) => {
 18 |   if (!GA_MEASUREMENT_ID) return;
 19 |   window.gtag("event", action, {
 20 |     event_category: category,
 21 |     event_label: label,
 22 |     value: value,
 23 |   });
 24 | };
 25 | 
 26 | // Timer Events
 27 | const timerStart = (seconds: number) =>
 28 |   event({
 29 |     action: "timer_start",
 30 |     category: "timer",
 31 |     label: "start",
 32 |     value: seconds,
 33 |   });
 34 | 
 35 | const timerPause = (remainingSeconds: number) =>
 36 |   event({
 37 |     action: "timer_pause",
 38 |     category: "timer",
 39 |     label: "pause",
 40 |     value: remainingSeconds,
 41 |   });
 42 | 
 43 | const timerReset = (remainingSeconds: number) =>
 44 |   event({
 45 |     action: "timer_reset",
 46 |     category: "timer",
 47 |     label: "reset",
 48 |     value: remainingSeconds,
 49 |   });
 50 | 
 51 | const timerComplete = (totalSeconds: number) =>
 52 |   event({
 53 |     action: "timer_complete",
 54 |     category: "timer",
 55 |     label: "complete",
 56 |     value: totalSeconds,
 57 |   });
 58 | 
 59 | // Timer Settings Events
 60 | const timerTimeSet = (seconds: number) =>
 61 |   event({
 62 |     action: "timer_time_set",
 63 |     category: "timer_settings",
 64 |     label: "time",
 65 |     value: seconds,
 66 |   });
 67 | 
 68 | const timerFontChange = (fontName: string) =>
 69 |   event({
 70 |     action: "timer_font_change",
 71 |     category: "timer_settings",
 72 |     label: fontName,
 73 |   });
 74 | 
 75 | const timerOrientationChange = (orientation: "horizontal" | "vertical") =>
 76 |   event({
 77 |     action: "timer_orientation_change",
 78 |     category: "timer_settings",
 79 |     label: orientation,
 80 |   });
 81 | 
 82 | const timerSettingsOpen = () =>
 83 |   event({
 84 |     action: "timer_settings_open",
 85 |     category: "timer_settings",
 86 |     label: "open",
 87 |   });
 88 | 
 89 | const timerSettingsClose = () =>
 90 |   event({
 91 |     action: "timer_settings_close",
 92 |     category: "timer_settings",
 93 |     label: "close",
 94 |   });
 95 | 
 96 | const timerResolutionChange = (resolution: number) =>
 97 |   event({
 98 |     action: "timer_resolution_change",
 99 |     category: "timer_settings",
100 |     label: `${resolution}ms`,
101 |   });
102 | 
103 | const timerFinishSoundChange = (soundName: string) =>
104 |   event({
105 |     action: "timer_finish_sound_change",
106 |     category: "timer_settings",
107 |     label: soundName,
108 |   });
109 | 
110 | const timerFinishSoundVolumeChange = (volume: number) =>
111 |   event({
112 |     action: "timer_finish_sound_volume_change",
113 |     category: "timer_settings",
114 |     label: "volume",
115 |     value: volume,
116 |   });
117 | 
118 | // Share Events
119 | const timerShare = (seconds: number) =>
120 |   event({
121 |     action: "timer_share",
122 |     category: "share",
123 |     label: "create",
124 |     value: seconds,
125 |   });
126 | 
127 | const timerShareJoin = (remainingSeconds: number) =>
128 |   event({
129 |     action: "timer_share_join",
130 |     category: "share",
131 |     label: "join",
132 |     value: remainingSeconds,
133 |   });
134 | 
135 | // Error Events
136 | const error = (message: string) =>
137 |   event({
138 |     action: "error",
139 |     category: "error",
140 |     label: message,
141 |   });
142 | 
143 | export const events = {
144 |   pageview,
145 |   event,
146 |   timerStart,
147 |   timerPause,
148 |   timerReset,
149 |   timerComplete,
150 |   timerTimeSet,
151 |   timerFontChange,
152 |   timerOrientationChange,
153 |   timerSettingsOpen,
154 |   timerSettingsClose,
155 |   timerResolutionChange,
156 |   timerFinishSoundChange,
157 |   timerFinishSoundVolumeChange,
158 |   timerShare,
159 |   timerShareJoin,
160 |   error,
161 | };
162 | 


--------------------------------------------------------------------------------
/src/components/analytics/google-analytics.tsx:
--------------------------------------------------------------------------------
1 | import { GoogleAnalytics as NextGoogleAnalytics } from "@next/third-parties/google";
2 | 
3 | export const GoogleAnalytics = () => {
4 |   const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
5 |   if (!gaMeasurementId) return null;
6 |   return <NextGoogleAnalytics gaId={gaMeasurementId} />;
7 | };
8 | 


--------------------------------------------------------------------------------
/src/components/animated-link/index.tsx:
--------------------------------------------------------------------------------
1 | import { Link } from "next-view-transitions";
2 | 
3 | export const AnimatedLink = Link;
4 | 


--------------------------------------------------------------------------------
/src/components/animated-link/safe-view-transition.ts:
--------------------------------------------------------------------------------
1 | export const safeViewTransition = (callback: () => void) => () => {
2 |   if ("startViewTransition" in document) {
3 |     document.startViewTransition(callback);
4 |   } else {
5 |     callback();
6 |   }
7 | };
8 | 


--------------------------------------------------------------------------------
/src/components/animated-link/use-animated-router.ts:
--------------------------------------------------------------------------------
1 | import { useTransitionRouter } from "next-view-transitions";
2 | 
3 | export const useAnimatedRouter = useTransitionRouter;
4 | 


--------------------------------------------------------------------------------
/src/components/animated-link/view-transition-provider.tsx:
--------------------------------------------------------------------------------
1 | import { ViewTransitions } from "next-view-transitions";
2 | 
3 | export const ViewTransitionProvider = ViewTransitions;
4 | 


--------------------------------------------------------------------------------
/src/components/head-title/index.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { useContext, useEffect, useRef } from "react";
 4 | import { HeadTitleContext } from "./provider";
 5 | 
 6 | export { HeadTitleProvider } from "./provider";
 7 | 
 8 | export const useHeadTitle = () => {
 9 |   const { title, setTitle } = useContext(HeadTitleContext);
10 |   const prevTitleRef = useRef<string | null>(null);
11 | 
12 |   useEffect(() => {
13 |     if (!prevTitleRef.current) return;
14 |     document.title = title || prevTitleRef.current;
15 |   }, [title]);
16 | 
17 |   useEffect(() => {
18 |     if (prevTitleRef.current) return;
19 |     prevTitleRef.current = document.title;
20 |   }, []);
21 | 
22 |   return { title, setTitle };
23 | };
24 | 


--------------------------------------------------------------------------------
/src/components/head-title/provider.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { createContext, useState } from "react";
 4 | 
 5 | export const HeadTitleContext = createContext<{
 6 |   title: string;
 7 |   setTitle: (title: string) => void;
 8 | }>({
 9 |   title: "",
10 |   setTitle: () => {},
11 | });
12 | 
13 | export const HeadTitleProvider = ({
14 |   children,
15 | }: { children: React.ReactNode }) => {
16 |   const [title, setTitle] = useState<string>("");
17 |   return (
18 |     <HeadTitleContext.Provider value={{ title, setTitle }}>
19 |       {children}
20 |     </HeadTitleContext.Provider>
21 |   );
22 | };
23 | 


--------------------------------------------------------------------------------
/src/components/icons/github-icon.tsx:
--------------------------------------------------------------------------------
 1 | import { cn } from "@/lib/utils";
 2 | 
 3 | export const GitHubIcon = ({
 4 |   className,
 5 |   ...props
 6 | }: React.SVGProps<SVGSVGElement>) => (
 7 |   // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
 8 |   <svg
 9 |     width="98"
10 |     height="96"
11 |     viewBox="0 0 98 96"
12 |     xmlns="http://www.w3.org/2000/svg"
13 |     className={cn("fill-muted-foreground", className)}
14 |     {...props}
15 |   >
16 |     <path
17 |       fillRule="evenodd"
18 |       clipRule="evenodd"
19 |       d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
20 |     />
21 |   </svg>
22 | );
23 | 


--------------------------------------------------------------------------------
/src/components/icons/logo-icon.tsx:
--------------------------------------------------------------------------------
 1 | export const LogoIcon = ({ className }: { className?: string }) => {
 2 |   return (
 3 |     <svg
 4 |       xmlns="http://www.w3.org/2000/svg"
 5 |       width="1024"
 6 |       height="1024"
 7 |       fill="none"
 8 |       viewBox="0 0 1024 1024"
 9 |       className={className}
10 |     >
11 |       <title>Web Timer</title>
12 |       <path
13 |         fill="currentColor"
14 |         fillRule="evenodd"
15 |         d="M512 1024c282.77 0 512-229.23 512-512 0-53.464-8.19-105.015-23.4-153.464L512 640 23.397 358.536C8.195 406.985 0 458.536 0 512c0 282.77 229.23 512 512 512Z"
16 |         clipRule="evenodd"
17 |       />
18 |       <path
19 |         fill="currentColor"
20 |         d="M944.945 238.558 512 488 79.055 238.558C169.794 95.191 329.78 0 512 0s342.206 95.191 432.945 238.558Z"
21 |       />
22 |       <path
23 |         fill="currentColor"
24 |         d="M233.27 479.436 512 640v384C229.23 1024 0 794.77 0 512S229.23 0 512 0v488L298.373 364.918C287.944 358.018 275.441 354 262 354c-36.451 0-66 29.549-66 66 0 26.153 15.212 48.754 37.27 59.436Z"
25 |       />
26 |     </svg>
27 |   );
28 | };
29 | 


--------------------------------------------------------------------------------
/src/components/icons/x-icon.tsx:
--------------------------------------------------------------------------------
 1 | import { cn } from "@/lib/utils";
 2 | 
 3 | export const XIcon = ({
 4 |   className,
 5 |   ...props
 6 | }: React.SVGProps<SVGSVGElement>) => (
 7 |   // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
 8 |   <svg
 9 |     width="1200"
10 |     height="1227"
11 |     viewBox="0 0 1200 1227"
12 |     xmlns="http://www.w3.org/2000/svg"
13 |     {...props}
14 |     className={cn("fill-muted-foreground", className)}
15 |   >
16 |     <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
17 |   </svg>
18 | );
19 | 


--------------------------------------------------------------------------------
/src/components/timer/index.tsx:
--------------------------------------------------------------------------------
  1 | "use client";
  2 | 
  3 | import { fonts } from "@/app/fonts";
  4 | import { cn } from "@/lib/utils";
  5 | import { MinusIcon, PlusIcon, RotateCcwIcon } from "lucide-react";
  6 | import { motion, useScroll, useTransform } from "motion/react";
  7 | import { Button } from "../ui/button";
  8 | import { WheelPicker } from "../wheel-picker";
  9 | import { TimerController } from "./timer-controller";
 10 | import { useTimer as useTimerHook } from "./use-timer";
 11 | import type { useTimerCore } from "./use-timer-core";
 12 | 
 13 | export type UseTimerType = typeof useTimerCore;
 14 | 
 15 | export const Timer = (props?: {
 16 |   useTimer?: typeof useTimerHook;
 17 | }) => {
 18 |   const useTimer = props?.useTimer || useTimerHook;
 19 |   const { time, status, updateTime, isOvertime, timerControlSettings, reset } =
 20 |     useTimer();
 21 |   const font = fonts[timerControlSettings.font];
 22 |   const isUpdatable = ["ready"].includes(status);
 23 |   const { scrollY } = useScroll();
 24 |   const timerY = useTransform(scrollY, [0, 1000], [0, 600], { clamp: false });
 25 | 
 26 |   return (
 27 |     <div
 28 |       className={cn("flex h-full w-full flex-col items-center justify-center")}
 29 |     >
 30 |       <motion.div
 31 |         initial={{ opacity: 0, y: 10 }}
 32 |         animate={{ opacity: 1, y: 0 }}
 33 |         transition={{ duration: 0.5, ease: "easeOut" }}
 34 |         style={{ y: timerY }}
 35 |       >
 36 |         <div
 37 |           className={cn(
 38 |             "relative flex items-center justify-center gap-1 font-bold text-[clamp(3rem,25vw,100vh)] tabular-nums transition-all ease-in-out",
 39 |             !["ready", "running"].includes(status) && "opacity-70",
 40 |             isOvertime && "text-destructive",
 41 |             timerControlSettings.orientation === "horizontal" && "rotate-90",
 42 |             font.className,
 43 |           )}
 44 |           style={{
 45 |             viewTransitionName: "web-timer",
 46 |           }}
 47 |         >
 48 |           <div className="relative flex items-center justify-center">
 49 |             <WheelPicker
 50 |               value={time.fullMinutes}
 51 |               max={999}
 52 |               isInteractive={isUpdatable}
 53 |               onChange={(value) => {
 54 |                 updateTime({ minutes: value });
 55 |               }}
 56 |               className="inline-flex items-center justify-center"
 57 |             />
 58 | 
 59 |             <div
 60 |               className={cn(
 61 |                 "-translate-y-full absolute top-0 flex h-1/4 min-h-10 w-full flex-col justify-between opacity-0 transition-all duration-300 ease-in-out",
 62 |                 isUpdatable && "opacity-50",
 63 |               )}
 64 |             >
 65 |               <Button
 66 |                 onClick={() => updateTime({ minutes: time.fullMinutes + 1 })}
 67 |                 variant="ghost"
 68 |                 size="sm"
 69 |                 className="h-full hover:bg-transparent active:bg-transparent"
 70 |               >
 71 |                 <PlusIcon className="size-6" />
 72 |               </Button>
 73 |             </div>
 74 |             <div
 75 |               className={cn(
 76 |                 "absolute bottom-0 flex h-1/4 min-h-10 w-full translate-y-full flex-col justify-between opacity-0 transition-all duration-300 ease-in-out",
 77 |                 isUpdatable && "opacity-50",
 78 |               )}
 79 |             >
 80 |               <Button
 81 |                 onClick={() => updateTime({ minutes: time.fullMinutes - 1 })}
 82 |                 variant="ghost"
 83 |                 size="sm"
 84 |                 className="h-full hover:bg-transparent active:bg-transparent"
 85 |               >
 86 |                 <MinusIcon className="size-6" />
 87 |               </Button>
 88 |             </div>
 89 |           </div>
 90 | 
 91 |           <motion.span
 92 |             layout
 93 |             className={cn(
 94 |               "font-normal opacity-20 transition-opacity duration-500 ease-in-out",
 95 |               0 < time.ms && time.ms < 500 && "opacity-10",
 96 |             )}
 97 |           >
 98 |             :
 99 |           </motion.span>
100 | 
101 |           <div className="relative inline-flex items-center justify-center">
102 |             <WheelPicker
103 |               value={time.s}
104 |               max={59}
105 |               increment={10}
106 |               isInteractive={isUpdatable}
107 |               onChange={(value) => {
108 |                 updateTime({ seconds: value });
109 |               }}
110 |               className="inline-flex items-center justify-center"
111 |             />
112 | 
113 |             <div
114 |               className={cn(
115 |                 "-translate-y-full absolute top-0 flex h-1/4 min-h-10 w-full flex-col justify-between opacity-0 transition-all duration-300 ease-in-out",
116 |                 isUpdatable && "opacity-50",
117 |               )}
118 |             >
119 |               <Button
120 |                 onClick={() => updateTime({ seconds: time.s + 10 })}
121 |                 variant="ghost"
122 |                 size="sm"
123 |                 className="h-full hover:bg-transparent active:bg-transparent"
124 |               >
125 |                 <PlusIcon className="size-6" />
126 |               </Button>
127 |             </div>
128 |             <div
129 |               className={cn(
130 |                 "absolute bottom-0 flex h-1/4 min-h-10 w-full translate-y-full flex-col justify-between opacity-0 transition-all duration-300 ease-in-out",
131 |                 isUpdatable && "opacity-50",
132 |               )}
133 |             >
134 |               <Button
135 |                 onClick={() => updateTime({ seconds: time.s - 10 })}
136 |                 variant="ghost"
137 |                 size="sm"
138 |                 className="h-full hover:bg-transparent active:bg-transparent"
139 |               >
140 |                 <MinusIcon className="size-6" />
141 |               </Button>
142 |             </div>
143 |           </div>
144 | 
145 |           <div
146 |             className={cn(
147 |               "absolute top-0 right-0 flex items-center justify-center",
148 |               status !== "paused" &&
149 |                 "pointer-events-none touch-none select-none",
150 |             )}
151 |           >
152 |             <Button
153 |               onClick={() => reset()}
154 |               variant="outline"
155 |               size="icon"
156 |               className={cn(
157 |                 "group w-full rounded-full p-3 opacity-100 transition-all duration-500 [&_svg]:size-6",
158 |                 "md:p-[clamp(1rem,2vw,1.25rem)] md:[&_svg]:size-[clamp(1rem,3vw,2rem)]",
159 |                 status !== "paused" && "invisible rounded-none opacity-0",
160 |               )}
161 |             >
162 |               <RotateCcwIcon
163 |                 className={cn(
164 |                   "stroke-foreground opacity-100 transition-all duration-300 ease-in-out",
165 |                   status !== "paused" && "opacity-0",
166 |                 )}
167 |               />
168 |             </Button>
169 |           </div>
170 |         </div>
171 |       </motion.div>
172 | 
173 |       <TimerController useTimer={useTimer} />
174 |     </div>
175 |   );
176 | };
177 | 


--------------------------------------------------------------------------------
/src/components/timer/local-storage.ts:
--------------------------------------------------------------------------------
 1 | import {
 2 |   CurrentTimerSchema,
 3 |   type CurrentTimerType,
 4 |   calculateRemainingTime,
 5 | } from "./timer";
 6 | import type { TimerControllerSettingsType } from "./timer-controller-settings/settings";
 7 | 
 8 | const storage = globalThis.localStorage;
 9 | 
10 | export const storeCurrentTimer = (timer: CurrentTimerType) => {
11 |   if (!storage) return;
12 |   storage.setItem("currentTimer", JSON.stringify(timer));
13 | };
14 | 
15 | export const loadCurrentTimer = (): CurrentTimerType | null => {
16 |   const timer = storage?.getItem("currentTimer");
17 |   if (!timer) return null;
18 |   const result = CurrentTimerSchema.safeParse(JSON.parse(timer));
19 |   if (!result.success) {
20 |     console.error("Invalid current timer", result.error);
21 |     return null;
22 |   }
23 |   const currentTimer = {
24 |     ...result.data,
25 |     remainingTime: calculateRemainingTime(result.data),
26 |   };
27 |   return currentTimer;
28 | };
29 | 
30 | export const storeTimerControlSettings = (
31 |   settings: TimerControllerSettingsType,
32 | ) => {
33 |   if (!storage) return;
34 |   storage.setItem("timerControlSettings", JSON.stringify(settings));
35 | };
36 | 
37 | export const loadTimerControlSettings =
38 |   (): TimerControllerSettingsType | null => {
39 |     const settings = storage?.getItem("timerControlSettings");
40 |     return settings ? JSON.parse(settings) : null;
41 |   };
42 | 


--------------------------------------------------------------------------------
/src/components/timer/timer-controller-settings/finish-sound-selector.tsx:
--------------------------------------------------------------------------------
 1 | import { Button } from "@/components/ui/button";
 2 | import {
 3 |   Select,
 4 |   SelectContent,
 5 |   SelectItem,
 6 |   SelectTrigger,
 7 |   SelectValue,
 8 | } from "@/components/ui/select";
 9 | import { BellRingIcon } from "lucide-react";
10 | import { useTimer } from "../use-timer";
11 | import { type FinishSoundOptionKeys, finishSoundOptions } from "./settings";
12 | 
13 | export const FinishSoundSelector = () => {
14 |   const { timerControlSettings, updateTimerControlSettings, playFinishSound } =
15 |     useTimer();
16 | 
17 |   return (
18 |     <Select
19 |       value={timerControlSettings.finishSound}
20 |       onValueChange={(value: FinishSoundOptionKeys) => {
21 |         updateTimerControlSettings({ finishSound: value });
22 |       }}
23 |     >
24 |       <SelectTrigger className="h-auto py-0">
25 |         <SelectValue placeholder="Finish sound" asChild>
26 |           <div className="flex h-10 w-full items-center justify-between">
27 |             <div className="leading-none">
28 |               {timerControlSettings.finishSound}
29 |             </div>
30 |           </div>
31 |         </SelectValue>
32 |       </SelectTrigger>
33 |       <SelectContent>
34 |         {finishSoundOptions.map((finishSoundOption) => (
35 |           <div key={finishSoundOption.key} className="flex">
36 |             <Button
37 |               variant="ghost"
38 |               size="icon"
39 |               className="flex h-10 w-10 items-center justify-center [&_svg]:size-4"
40 |               onMouseDown={(e) => {
41 |                 e.preventDefault();
42 |                 e.stopPropagation();
43 |                 playFinishSound();
44 |               }}
45 |             >
46 |               <BellRingIcon className="h-4 w-4" />
47 |             </Button>
48 |             <SelectItem value={finishSoundOption.key} className="py-0">
49 |               {finishSoundOption.name}
50 |             </SelectItem>
51 |           </div>
52 |         ))}
53 |       </SelectContent>
54 |     </Select>
55 |   );
56 | };
57 | 


--------------------------------------------------------------------------------
/src/components/timer/timer-controller-settings/finish-sound-volume-slider.tsx:
--------------------------------------------------------------------------------
 1 | import { Slider } from "@/components/ui/slider";
 2 | import { useTimer } from "../use-timer";
 3 | 
 4 | export const FinishSoundVolumeSlider = () => {
 5 |   const { timerControlSettings, updateTimerControlSettings } = useTimer();
 6 |   return (
 7 |     <Slider
 8 |       value={[timerControlSettings.finishSoundVolume * 100]}
 9 |       onValueChange={(value) => {
10 |         const volume = value[0] / 100;
11 |         updateTimerControlSettings({ finishSoundVolume: volume });
12 |       }}
13 |     />
14 |   );
15 | };
16 | 


--------------------------------------------------------------------------------
/src/components/timer/timer-controller-settings/font-selector.tsx:
--------------------------------------------------------------------------------
 1 | import { fonts } from "@/app/fonts";
 2 | import {
 3 |   Select,
 4 |   SelectContent,
 5 |   SelectItem,
 6 |   SelectTrigger,
 7 |   SelectValue,
 8 | } from "@/components/ui/select";
 9 | import { cn } from "@/lib/utils";
10 | import { useTimer } from "../use-timer";
11 | import type { TimerControllerFont } from "./settings";
12 | 
13 | export const FontSelector = () => {
14 |   const { timerControlSettings, updateTimerControlSettings } = useTimer();
15 | 
16 |   return (
17 |     <Select
18 |       value={timerControlSettings.font}
19 |       onValueChange={(value: TimerControllerFont) => {
20 |         updateTimerControlSettings({ font: value });
21 |       }}
22 |     >
23 |       <SelectTrigger className="h-full w-full py-[2px] pl-0">
24 |         <SelectValue placeholder="Font" asChild>
25 |           <FontOption font={timerControlSettings.font} />
26 |         </SelectValue>
27 |       </SelectTrigger>
28 |       <SelectContent className="w-full">
29 |         <SelectItem value="sora" className="py-[2px] pl-0">
30 |           <FontOption font="sora" />
31 |         </SelectItem>
32 |         <SelectItem value="poppins" className="py-[2px] pl-0">
33 |           <FontOption font="poppins" />
34 |         </SelectItem>
35 |         <SelectItem value="teko" className="py-[2px] pl-0">
36 |           <FontOption font="teko" />
37 |         </SelectItem>
38 |         <SelectItem value="comfortaa" className="py-[2px] pl-0">
39 |           <FontOption font="comfortaa" />
40 |         </SelectItem>
41 |       </SelectContent>
42 |     </Select>
43 |   );
44 | };
45 | 
46 | const FontOption = ({ font }: { font: TimerControllerFont }) => {
47 |   return (
48 |     <div
49 |       className={cn(
50 |         "grid grid-cols-[90px_1fr] px-4 py-2 tabular-nums",
51 |         fonts[font].className,
52 |       )}
53 |     >
54 |       <span className="text-left">01:23:45</span>
55 |       <span className="text-left capitalize">{font}</span>
56 |     </div>
57 |   );
58 | };
59 | 


--------------------------------------------------------------------------------
/src/components/timer/timer-controller-settings/horizontal-layout-toggle.tsx:
--------------------------------------------------------------------------------
 1 | import { Button } from "@/components/ui/button";
 2 | import { Toggle } from "@/components/ui/toggle";
 3 | import { cn } from "@/lib/utils";
 4 | import { RotateCwSquareIcon } from "lucide-react";
 5 | import { useTimer } from "../use-timer";
 6 | 
 7 | export const HorizontalLayoutToggle = () => {
 8 |   const { timerControlSettings, updateTimerControlSettings } = useTimer();
 9 |   const isHorizontal = timerControlSettings.orientation === "horizontal";
10 |   return (
11 |     <Toggle
12 |       variant="outline"
13 |       aria-label="Horizontal layout"
14 |       pressed={isHorizontal}
15 |       onPressedChange={(checked) => {
16 |         updateTimerControlSettings({
17 |           orientation: checked ? "horizontal" : "vertical",
18 |         });
19 |       }}
20 |       asChild
21 |     >
22 |       <Button variant="outline" className="h-10 w-fit px-4">
23 |         <RotateCwSquareIcon
24 |           className={cn(
25 |             "size-6 transition-all duration-300 ease-in-out",
26 |             isHorizontal && "rotate-90",
27 |           )}
28 |         />
29 |         Horizontal
30 |       </Button>
31 |     </Toggle>
32 |   );
33 | };
34 | 


--------------------------------------------------------------------------------
/src/components/timer/timer-controller-settings/index.tsx:
--------------------------------------------------------------------------------
  1 | "use client";
  2 | 
  3 | import { fonts } from "@/app/fonts";
  4 | import { events } from "@/components/analytics/events";
  5 | import { Button } from "@/components/ui/button";
  6 | import { cn } from "@/lib/utils";
  7 | import {
  8 |   BellIcon,
  9 |   Settings2Icon,
 10 |   Volume1Icon,
 11 |   Volume2Icon,
 12 |   VolumeIcon,
 13 | } from "lucide-react";
 14 | import { AnimatePresence, motion } from "motion/react";
 15 | import { useEffect, useRef, useState } from "react";
 16 | import { useTimer } from "../use-timer";
 17 | import { FinishSoundSelector } from "./finish-sound-selector";
 18 | import { FinishSoundVolumeSlider } from "./finish-sound-volume-slider";
 19 | import { FontSelector } from "./font-selector";
 20 | import { HorizontalLayoutToggle } from "./horizontal-layout-toggle";
 21 | 
 22 | export const TimerControllerSettings = () => {
 23 |   const { timerControlSettings, playFinishSound, status } = useTimer();
 24 |   const [isOpen, setIsOpen] = useState(false);
 25 |   const containerRef = useRef<HTMLDivElement>(null);
 26 | 
 27 |   useEffect(() => {
 28 |     const handleClickOutside = (event: MouseEvent) => {
 29 |       if (
 30 |         !(
 31 |           containerRef.current &&
 32 |           event.target instanceof Node &&
 33 |           !containerRef.current.contains(event.target)
 34 |         )
 35 |       ) {
 36 |         return;
 37 |       }
 38 |       setIsOpen(false);
 39 |       events.timerSettingsClose();
 40 |     };
 41 | 
 42 |     if (isOpen) {
 43 |       document.addEventListener("mousedown", handleClickOutside);
 44 |       events.timerSettingsOpen();
 45 |     }
 46 | 
 47 |     return () => {
 48 |       document.removeEventListener("mousedown", handleClickOutside);
 49 |     };
 50 |   }, [isOpen]);
 51 | 
 52 |   return (
 53 |     <div ref={containerRef} className="z-50 flex flex-col items-end gap-4">
 54 |       <Button
 55 |         variant="ghost"
 56 |         size="icon"
 57 |         className={cn(
 58 |           "group bg-card/90 transition-all duration-300 [&_svg]:size-6",
 59 |         )}
 60 |         onClick={() => setIsOpen(!isOpen)}
 61 |       >
 62 |         <Settings2Icon
 63 |           className={cn(
 64 |             "opacity-100 transition-all duration-300 ease-in-out group-hover:opacity-100",
 65 |             status === "running" && "opacity-30",
 66 |             timerControlSettings.orientation === "horizontal" && "rotate-90",
 67 |           )}
 68 |         />
 69 |       </Button>
 70 | 
 71 |       <AnimatePresence>
 72 |         {isOpen && (
 73 |           <motion.div
 74 |             className="fixed top-14 right-0 flex flex-col items-end gap-10 p-4"
 75 |             initial={{ opacity: 0, y: -20 }}
 76 |             animate={{ opacity: 1, y: 0 }}
 77 |             exit={{ opacity: 0, y: -20 }}
 78 |             transition={{ duration: 0.2 }}
 79 |           >
 80 |             <motion.div
 81 |               className="rounded-lg [&_button]:bg-card/90"
 82 |               initial={{ opacity: 0, x: 20 }}
 83 |               animate={{ opacity: 1, x: 0 }}
 84 |               exit={{ opacity: 0, x: 20 }}
 85 |               transition={{ duration: 0.2, delay: 0.1 }}
 86 |             >
 87 |               <HorizontalLayoutToggle />
 88 |             </motion.div>
 89 | 
 90 |             <motion.div
 91 |               className="rounded-lg [&_button]:bg-card/90"
 92 |               initial={{ opacity: 0, x: 20 }}
 93 |               animate={{ opacity: 1, x: 0 }}
 94 |               exit={{ opacity: 0, x: 20 }}
 95 |               transition={{ duration: 0.2, delay: 0.15 }}
 96 |             >
 97 |               <div className="flex items-center justify-between gap-1">
 98 |                 <h4 className="flex items-center gap-1 font-medium">
 99 |                   <BellIcon className="h-4 w-4 fill-card/90 p-0.5" />
100 |                   Finish sound
101 |                 </h4>
102 |                 <Button
103 |                   variant="ghost"
104 |                   size="icon"
105 |                   className="flex h-10 items-center justify-center bg-card/90 [&_svg]:size-4"
106 |                   onMouseDown={() => playFinishSound()}
107 |                 >
108 |                   <Volume2Icon className="h-4 w-4" />
109 |                 </Button>
110 |               </div>
111 |               <FinishSoundSelector />
112 |               <div className="flex items-center justify-between gap-2 py-4">
113 |                 <h4 className="flex items-center gap-1 font-medium">
114 |                   {timerControlSettings.finishSoundVolume === 0 ? (
115 |                     <VolumeIcon className="h-4 w-4 fill-card/90 p-0.5" />
116 |                   ) : timerControlSettings.finishSoundVolume < 0.5 ? (
117 |                     <Volume1Icon className="h-4 w-4 fill-card/90 p-0.5" />
118 |                   ) : (
119 |                     <Volume2Icon className="h-4 w-4 fill-card/90 p-0.5" />
120 |                   )}
121 |                   <span className="sr-only">Finish sound volume</span>
122 |                 </h4>
123 |                 <FinishSoundVolumeSlider />
124 |               </div>
125 |             </motion.div>
126 | 
127 |             <motion.div
128 |               className="rounded-lg [&_button]:bg-card/90"
129 |               initial={{ opacity: 0, x: 20 }}
130 |               animate={{ opacity: 1, x: 0 }}
131 |               exit={{ opacity: 0, x: 20 }}
132 |               transition={{ duration: 0.2, delay: 0.2 }}
133 |             >
134 |               <div className="grid gap-2">
135 |                 <h4
136 |                   className={cn(
137 |                     "font-medium",
138 |                     fonts[timerControlSettings.font].className,
139 |                   )}
140 |                 >
141 |                   Font
142 |                 </h4>
143 |                 <FontSelector />
144 |               </div>
145 |             </motion.div>
146 |           </motion.div>
147 |         )}
148 |       </AnimatePresence>
149 |     </div>
150 |   );
151 | };
152 | 


--------------------------------------------------------------------------------
/src/components/timer/timer-controller-settings/settings.ts:
--------------------------------------------------------------------------------
  1 | export type TimerControllerFont = "poppins" | "sora" | "teko" | "comfortaa";
  2 | 
  3 | export type FinishSoundOptionKeys =
  4 |   | "default"
  5 |   | "light01"
  6 |   | "light02"
  7 |   | "light03"
  8 |   | "light04"
  9 |   | "simple01"
 10 |   | "simple02"
 11 |   | "simple03"
 12 |   | "simple04"
 13 |   | "simple05";
 14 | type FinishSoundOption = {
 15 |   key: FinishSoundOptionKeys;
 16 |   name: string;
 17 |   path: string;
 18 | };
 19 | 
 20 | export type TimerControllerSettingsType = {
 21 |   mode: "basic" | "overtime";
 22 |   style: "default" | "classic";
 23 |   font: TimerControllerFont;
 24 |   theme: "dark" | "light";
 25 |   showSeconds: boolean;
 26 |   showMilliseconds: boolean;
 27 |   orientation: "horizontal" | "vertical";
 28 | 
 29 |   // Sound
 30 |   finishSound: FinishSoundOptionKeys;
 31 |   finishSoundVolume: number; // 0.0 - 1.0
 32 | 
 33 |   timerResolution: number; // ms
 34 | };
 35 | 
 36 | export const initialTimerControllerSettings: TimerControllerSettingsType = {
 37 |   mode: "basic",
 38 |   style: "default",
 39 |   font: "sora",
 40 |   theme: "dark",
 41 |   showSeconds: true,
 42 |   showMilliseconds: false,
 43 |   orientation: "vertical",
 44 |   finishSound: "default",
 45 |   finishSoundVolume: 1.0,
 46 | 
 47 |   timerResolution: 100, // ms
 48 | };
 49 | 
 50 | export const finishSoundOptions: Array<FinishSoundOption> = [
 51 |   {
 52 |     key: "default",
 53 |     name: "default",
 54 |     path: "/audio/sfx/maoudamashii_se_onepoint26.mp3",
 55 |   },
 56 |   {
 57 |     key: "light01",
 58 |     name: "Light 1",
 59 |     path: "/audio/sfx/maoudamashii_se_onepoint09.mp3",
 60 |   },
 61 |   {
 62 |     key: "light02",
 63 |     name: "Light 2",
 64 |     path: "/audio/sfx/maoudamashii_se_onepoint23.mp3",
 65 |   },
 66 |   {
 67 |     key: "light03",
 68 |     name: "Light 3",
 69 |     path: "/audio/sfx/maoudamashii_se_onepoint28.mp3",
 70 |   },
 71 |   {
 72 |     key: "light04",
 73 |     name: "Light 4",
 74 |     path: "/audio/sfx/maoudamashii_se_effect11.mp3",
 75 |   },
 76 |   {
 77 |     key: "simple01",
 78 |     name: "Simple 1",
 79 |     path: "/audio/sfx/simple_01.mp3",
 80 |   },
 81 |   {
 82 |     key: "simple02",
 83 |     name: "Simple 2",
 84 |     path: "/audio/sfx/simple_02.mp3",
 85 |   },
 86 |   {
 87 |     key: "simple03",
 88 |     name: "Simple 3",
 89 |     path: "/audio/sfx/maoudamashii_se_system34.mp3",
 90 |   },
 91 |   {
 92 |     key: "simple04",
 93 |     name: "Simple 4",
 94 |     path: "/audio/sfx/maoudamashii_se_system35.mp3",
 95 |   },
 96 |   {
 97 |     key: "simple05",
 98 |     name: "Simple 5",
 99 |     path: "/audio/sfx/maoudamashii_se_onepoint22.mp3",
100 |   },
101 | ];
102 | 


--------------------------------------------------------------------------------
/src/components/timer/timer-controller.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { cn } from "@/lib/utils";
 4 | import { PauseIcon, PlayIcon } from "lucide-react";
 5 | import { Button } from "../ui/button";
 6 | import type { useTimer as useTimerHook } from "./use-timer";
 7 | 
 8 | export const TimerController = ({
 9 |   useTimer,
10 | }: {
11 |   useTimer: typeof useTimerHook;
12 | }) => {
13 |   const { status, timerControlSettings, start, pause, resume, reset } =
14 |     useTimer();
15 | 
16 |   return (
17 |     <div
18 |       className={cn(
19 |         "pointer-events-none fixed bottom-0 z-50 flex items-center justify-center md:static",
20 |         timerControlSettings.orientation === "horizontal" &&
21 |           "absolute bottom-auto left-0 rotate-90 md:absolute",
22 |       )}
23 |     >
24 |       <div className="flex w-full items-center justify-center gap-10 px-7 py-7">
25 |         <div className="relative">
26 |           <Button
27 |             onClick={() => {
28 |               switch (status) {
29 |                 case "ready":
30 |                   start();
31 |                   break;
32 |                 case "running":
33 |                   pause();
34 |                   break;
35 |                 case "paused":
36 |                   resume();
37 |                   break;
38 |                 case "stopped":
39 |                   reset();
40 |                   break;
41 |                 default:
42 |                   break;
43 |               }
44 |             }}
45 |             variant={status === "running" ? "ghost" : "outline"}
46 |             size="icon"
47 |             className={cn(
48 |               "group pointer-events-auto h-auto rounded-full p-4 transition-all duration-300 md:p-7 [&_svg]:size-8 md:[&_svg]:size-20",
49 |               status === "running" ? "rounded-lg" : "rounded-full",
50 |             )}
51 |           >
52 |             <PlayIcon
53 |               className={cn(
54 |                 "fill-foreground stroke-none opacity-100 transition-all duration-300 ease-in-out group-hover:opacity-100",
55 |                 status === "running" &&
56 |                   "absolute opacity-0 group-hover:opacity-0",
57 |               )}
58 |             />
59 |             <PauseIcon
60 |               className={cn(
61 |                 "fill-foreground stroke-none opacity-30 transition-all duration-300 ease-in-out group-hover:opacity-100",
62 |                 status !== "running" &&
63 |                   "absolute opacity-0 group-hover:opacity-0",
64 |               )}
65 |             />
66 |           </Button>
67 |         </div>
68 |       </div>
69 |     </div>
70 |   );
71 | };
72 | 


--------------------------------------------------------------------------------
/src/components/timer/timer-header.tsx:
--------------------------------------------------------------------------------
 1 | import { TimerControllerSettings } from "./timer-controller-settings";
 2 | import { TimerName } from "./timer-name";
 3 | 
 4 | export const TimerHeader = ({ timerId }: { timerId?: string }) => {
 5 |   return (
 6 |     <div className="fixed inset-x-0 top-0 z-50 flex items-center justify-between p-4">
 7 |       <TimerName timerId={timerId} />
 8 |       <TimerControllerSettings />
 9 |     </div>
10 |   );
11 | };
12 | 


--------------------------------------------------------------------------------
/src/components/timer/timer-name.tsx:
--------------------------------------------------------------------------------
  1 | "use client";
  2 | 
  3 | import { useSharedTimer } from "@/app/timers/[id]/use-shared-timer";
  4 | import { cn } from "@/lib/utils";
  5 | import { PenIcon, PinIcon, XIcon } from "lucide-react";
  6 | import { AnimatePresence, motion } from "motion/react";
  7 | import { useActionState, useState } from "react";
  8 | import { AnimatedLink } from "../animated-link";
  9 | import { LogoIcon } from "../icons/logo-icon";
 10 | import { Button } from "../ui/button";
 11 | import { Input } from "../ui/input";
 12 | import { TimerNameSchema } from "./timer";
 13 | import { useTimer } from "./use-timer";
 14 | 
 15 | export const TimerName = ({ timerId }: { timerId?: string }) => {
 16 |   const { status, updateCurrentTimer, currentTimer } = timerId
 17 |     ? useSharedTimer({ id: timerId })
 18 |     : useTimer();
 19 | 
 20 |   const [isEditing, setIsEditing] = useState(false);
 21 |   const [errorMessage, submitAction, isPending] = useActionState<
 22 |     string | null,
 23 |     FormData
 24 |   >(async (_previousState, formData) => {
 25 |     const name = formData.get("name");
 26 |     const parsed = TimerNameSchema.safeParse(name);
 27 |     if (!parsed.success) return parsed.error.issues[0]?.message;
 28 |     updateCurrentTimer({ name: parsed.data });
 29 |     setIsEditing(false);
 30 |     return null;
 31 |   }, null);
 32 | 
 33 |   return (
 34 |     <div className="flex items-start">
 35 |       <AnimatedLink href="/" className="flex h-10 items-center">
 36 |         <LogoIcon className="mr-2 size-[22px] fill-primary stroke-primary text-primary" />
 37 |       </AnimatedLink>
 38 |       <AnimatePresence mode="wait">
 39 |         {!isEditing ? (
 40 |           <motion.div
 41 |             key="timer-name-display"
 42 |             className="flex items-center gap-2"
 43 |             initial={{ opacity: 0, y: 10 }}
 44 |             animate={{ opacity: 1, y: 0 }}
 45 |             exit={{ opacity: 0, y: -10 }}
 46 |             transition={{ duration: 0.2 }}
 47 |             style={{
 48 |               viewTransitionName: "web-timer-name",
 49 |             }}
 50 |           >
 51 |             <AnimatedLink href="/" className="flex h-10 items-center">
 52 |               <h1
 53 |                 className={cn(
 54 |                   "font-bold text-2xl text-primary opacity-100 transition-all duration-300 ease-in-out",
 55 |                   status === "running" &&
 56 |                     currentTimer.name &&
 57 |                     "text-foreground opacity-30",
 58 |                   status === "running" && !currentTimer.name && "opacity-0",
 59 |                 )}
 60 |               >
 61 |                 {currentTimer.name || "Web Timer"}
 62 |               </h1>
 63 |             </AnimatedLink>
 64 |             <Button
 65 |               onClick={() => setIsEditing(true)}
 66 |               disabled={isPending}
 67 |               variant="ghost"
 68 |               size="icon"
 69 |               className={cn(
 70 |                 "bg-background/80 [&_svg]:size-[14px]",
 71 |                 status === "running" && currentTimer.name && "opacity-20",
 72 |                 status === "running" && !currentTimer.name && "opacity-0",
 73 |               )}
 74 |             >
 75 |               <PenIcon className="stroke-muted-foreground" />
 76 |             </Button>
 77 |           </motion.div>
 78 |         ) : (
 79 |           <motion.form
 80 |             action={submitAction}
 81 |             key="timer-name-edit"
 82 |             className="flex items-center gap-2"
 83 |             initial={{ opacity: 0, y: 10 }}
 84 |             animate={{ opacity: 1, y: 0 }}
 85 |             exit={{ opacity: 0, y: -10 }}
 86 |             transition={{ duration: 0.2 }}
 87 |           >
 88 |             <Input
 89 |               type="text"
 90 |               name="name"
 91 |               defaultValue={currentTimer.name || ""}
 92 |               placeholder="Web Timer"
 93 |               autoFocus
 94 |               autoComplete="off"
 95 |               className="h-10 bg-background/80 py-0 font-bold text-2xl text-primary placeholder:text-primary"
 96 |             />
 97 |             <Button
 98 |               disabled={isPending}
 99 |               type="submit"
100 |               variant="ghost"
101 |               size="icon"
102 |               className="bg-background/80 [&_svg]:size-4"
103 |             >
104 |               <PinIcon className="stroke-primary" />
105 |             </Button>
106 |             <Button
107 |               onClick={() => setIsEditing(false)}
108 |               disabled={isPending}
109 |               type="button"
110 |               variant="ghost"
111 |               size="icon"
112 |               className="bg-background [&_svg]:size-4"
113 |             >
114 |               <XIcon className="stroke-muted-foreground" />
115 |             </Button>
116 |             {errorMessage && (
117 |               <p className="text-muted-foreground text-sm">{errorMessage}</p>
118 |             )}
119 |           </motion.form>
120 |         )}
121 |       </AnimatePresence>
122 |     </div>
123 |   );
124 | };
125 | 


--------------------------------------------------------------------------------
/src/components/timer/timer-provider.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { createContext } from "react";
 4 | import { initReadyTimer } from "./timer";
 5 | import {
 6 |   type TimerControllerSettingsType,
 7 |   initialTimerControllerSettings,
 8 | } from "./timer-controller-settings/settings";
 9 | import {
10 |   type TimerUpdater,
11 |   type UpdateCurrentTimerProps,
12 |   useTimerCore,
13 | } from "./use-timer-core";
14 | 
15 | export const TimerContext = createContext<ReturnType<typeof useTimerCore>>({
16 |   time: {
17 |     h: 0,
18 |     hh: "00",
19 |     m: 0,
20 |     mm: "00",
21 |     s: 0,
22 |     ss: "00",
23 |     ms: 0,
24 |     msPad: "000",
25 |     fullSeconds: 0,
26 |     fullMinutes: 0,
27 |     elapsedSeconds: 0,
28 |     elapsedMinutes: 0,
29 |   },
30 |   status: "ready",
31 |   currentTimer: initReadyTimer(),
32 |   timerControlSettings: initialTimerControllerSettings,
33 |   isOvertime: false,
34 |   start: () => {},
35 |   pause: () => {},
36 |   resume: () => {},
37 |   stop: () => {},
38 |   reset: () => {},
39 |   updateTime: (_: Partial<{ minutes: number; seconds: number }>) => undefined,
40 |   playFinishSound: () => {},
41 |   updateCurrentTimer: (_: UpdateCurrentTimerProps | TimerUpdater) =>
42 |     initReadyTimer(),
43 |   updateTimerControlSettings: (_: Partial<TimerControllerSettingsType>) => {},
44 | });
45 | 
46 | export const TimerProvider = ({ children }: { children: React.ReactNode }) => {
47 |   const timerCore = useTimerCore();
48 |   return (
49 |     <TimerContext.Provider value={timerCore}>{children}</TimerContext.Provider>
50 |   );
51 | };
52 | 


--------------------------------------------------------------------------------
/src/components/timer/timer.test.ts:
--------------------------------------------------------------------------------
  1 | import { describe, expect, it } from "bun:test";
  2 | import {
  3 |   type CurrentTimerType,
  4 |   type PausedTimerType,
  5 |   type ReadyTimerType,
  6 |   type RunningTimerType,
  7 |   calculateTime,
  8 |   initReadyTimer,
  9 |   pauseTimer,
 10 |   resetTimer,
 11 |   resumeTimer,
 12 |   startTimer,
 13 |   stopTimer,
 14 |   tickTimer,
 15 |   updateTimer,
 16 | } from "./timer";
 17 | 
 18 | describe("#initReadyTimer", () => {
 19 |   it("should return a ready timer with default values when no baseTimer is provided", () => {
 20 |     const timer = initReadyTimer();
 21 |     expect(timer.id).toBeDefined();
 22 |     expect(timer.status).toBe("ready");
 23 |     expect(timer.startTime).toBeNull();
 24 |     expect(timer.duration).toBe(300_000);
 25 |     expect(timer.remainingTime).toBe(300_000);
 26 |   });
 27 | });
 28 | 
 29 | describe("#startTimer", () => {
 30 |   it("should start the timer and set status to 'running'", () => {
 31 |     const currentTimer: ReadyTimerType = {
 32 |       id: "timer1",
 33 |       status: "ready",
 34 |       startTime: null,
 35 |       duration: 300_000,
 36 |       remainingTime: 300_000,
 37 |     };
 38 |     const originalDateNow = Date.now;
 39 |     const mockStartTime = 1000;
 40 |     Date.now = () => mockStartTime;
 41 |     const runningTimer = startTimer(currentTimer);
 42 |     expect(runningTimer.status).toBe("running");
 43 |     expect(runningTimer.startTime).toBe(mockStartTime);
 44 |     expect(runningTimer.remainingTime).toBe(300_000);
 45 |     Date.now = originalDateNow;
 46 |   });
 47 | });
 48 | 
 49 | describe("#tickTimer", () => {
 50 |   it("should update remainingTime for a running timer", () => {
 51 |     const originalDateNow = Date.now;
 52 |     const mockStartTime = 1000;
 53 |     const mockCurrentTime = 2000;
 54 |     Date.now = () => mockCurrentTime;
 55 |     const currentTimer: RunningTimerType = {
 56 |       id: "timer1",
 57 |       status: "running",
 58 |       startTime: mockStartTime,
 59 |       duration: 300_000,
 60 |       remainingTime: 300_000,
 61 |     };
 62 |     const updatedTimer = tickTimer(currentTimer);
 63 |     expect(updatedTimer.remainingTime).toBe(299_000);
 64 |     Date.now = originalDateNow;
 65 |   });
 66 | 
 67 |   it("should start running from paused timer", () => {
 68 |     const originalDateNow = Date.now;
 69 |     const mockStartTime = 1000;
 70 |     const mockCurrentTime = 2000;
 71 |     Date.now = () => mockCurrentTime;
 72 |     const currentTimer: PausedTimerType = {
 73 |       id: "timer1",
 74 |       status: "paused",
 75 |       startTime: mockStartTime,
 76 |       duration: 300_000,
 77 |       remainingTime: 299_000,
 78 |       pausedTime: 1500,
 79 |     };
 80 |     const updatedTimer = tickTimer(currentTimer);
 81 |     expect(updatedTimer.status).toBe("running");
 82 |     expect(updatedTimer.startTime).toBe(
 83 |       mockCurrentTime - currentTimer.pausedTime + mockStartTime,
 84 |     );
 85 |     expect(updatedTimer.remainingTime).toBe(299_500);
 86 |     Date.now = originalDateNow;
 87 |   });
 88 | });
 89 | 
 90 | describe("#pauseTimer", () => {
 91 |   it("should pause a running timer", () => {
 92 |     const originalDateNow = Date.now;
 93 |     const mockPausedTime = 2000;
 94 |     Date.now = () => mockPausedTime;
 95 |     const currentTimer: RunningTimerType = {
 96 |       id: "timer1",
 97 |       status: "running",
 98 |       startTime: 1000,
 99 |       duration: 300_000,
100 |       remainingTime: 299_000,
101 |     };
102 |     const pausedTimer = pauseTimer(currentTimer);
103 |     expect(pausedTimer.status).toBe("paused");
104 |     expect(pausedTimer.pausedTime).toBe(mockPausedTime);
105 |     Date.now = originalDateNow;
106 |   });
107 | 
108 |   it("should pause a timer not in running state", () => {
109 |     const originalDateNow = Date.now;
110 |     const mockCurrentTime = 2000;
111 |     Date.now = () => mockCurrentTime;
112 |     const currentTimer: CurrentTimerType = {
113 |       id: "timer1",
114 |       status: "ready",
115 |       startTime: null,
116 |       duration: 300_000,
117 |       remainingTime: 300_000,
118 |     };
119 |     const pausedTimer = pauseTimer(currentTimer);
120 |     expect(pausedTimer.status).toBe("paused");
121 |     expect(pausedTimer.startTime).toBe(mockCurrentTime);
122 |     expect(pausedTimer.pausedTime).toBe(mockCurrentTime);
123 |     Date.now = originalDateNow;
124 |   });
125 | });
126 | 
127 | describe("#resumeTimer", () => {
128 |   it("should resume a paused timer", () => {
129 |     const originalDateNow = Date.now;
130 |     const mockStartTime = 1000;
131 |     const mockPausedTime = 2000;
132 |     const mockCurrentTime = 3000;
133 |     Date.now = () => mockCurrentTime;
134 |     const currentTimer: PausedTimerType = {
135 |       id: "timer1",
136 |       status: "paused",
137 |       startTime: mockStartTime,
138 |       duration: 300_000,
139 |       remainingTime: 298_000,
140 |       pausedTime: mockPausedTime,
141 |     };
142 |     const elapsedTime = mockPausedTime - mockStartTime;
143 |     const newStartTime = mockCurrentTime - elapsedTime;
144 |     const expectedRemainingTime =
145 |       currentTimer.duration - (mockCurrentTime - newStartTime);
146 |     const resumedTimer = resumeTimer(currentTimer);
147 |     expect(resumedTimer.status).toBe("running");
148 |     expect(resumedTimer.startTime).toBe(newStartTime);
149 |     expect(resumedTimer.remainingTime).toBe(expectedRemainingTime);
150 |     Date.now = originalDateNow;
151 |   });
152 | 
153 |   it("should start a timer not in paused state", () => {
154 |     const originalDateNow = Date.now;
155 |     const mockCurrentTime = 3000;
156 |     Date.now = () => mockCurrentTime;
157 |     const currentTimer: CurrentTimerType = {
158 |       id: "timer1",
159 |       status: "ready",
160 |       startTime: null,
161 |       duration: 300_000,
162 |       remainingTime: 300_000,
163 |     };
164 |     const resumedTimer = resumeTimer(currentTimer);
165 |     expect(resumedTimer.status).toBe("running");
166 |     expect(resumedTimer.startTime).toBe(mockCurrentTime);
167 |     Date.now = originalDateNow;
168 |   });
169 | });
170 | 
171 | describe("#stopTimer", () => {
172 |   it("should stop a paused timer", () => {
173 |     const currentTimer: PausedTimerType = {
174 |       id: "timer1",
175 |       status: "paused",
176 |       startTime: 1000,
177 |       duration: 300_000,
178 |       remainingTime: 298_000,
179 |       pausedTime: 2000,
180 |     };
181 |     const stoppedTimer = stopTimer(currentTimer);
182 |     expect(stoppedTimer.status).toBe("stopped");
183 |     expect(stoppedTimer.startTime).toBe(1000);
184 |     if ("pausedTime" in stoppedTimer) {
185 |       expect(stoppedTimer.pausedTime).toBeUndefined();
186 |     }
187 |   });
188 | 
189 |   it("should stop a timer not in paused state", () => {
190 |     const originalDateNow = Date.now;
191 |     const mockCurrentTime = 3000;
192 |     Date.now = () => mockCurrentTime;
193 |     const currentTimer: RunningTimerType = {
194 |       id: "timer1",
195 |       status: "running",
196 |       startTime: 1000,
197 |       duration: 300_000,
198 |       remainingTime: 297_000,
199 |     };
200 |     const stoppedTimer = stopTimer(currentTimer);
201 |     expect(stoppedTimer.status).toBe("stopped");
202 |     expect(stoppedTimer.startTime).toBe(1000);
203 |     Date.now = originalDateNow;
204 |   });
205 | });
206 | 
207 | describe("#resetTimer", () => {
208 |   it("should reset the timer to ready state", () => {
209 |     const currentTimer: RunningTimerType = {
210 |       id: "timer1",
211 |       status: "running",
212 |       startTime: 1000,
213 |       duration: 300_000,
214 |       remainingTime: 297_000,
215 |     };
216 |     const resetTimerObj = resetTimer(currentTimer);
217 |     expect(resetTimerObj.status).toBe("ready");
218 |     expect(resetTimerObj.startTime).toBeNull();
219 |     expect(resetTimerObj.remainingTime).toBe(300_000);
220 |   });
221 | });
222 | 
223 | describe("#updateTimer", () => {
224 |   it("should update the timer's duration and remainingTime", () => {
225 |     const currentTimer: CurrentTimerType = {
226 |       id: "timer1",
227 |       status: "ready",
228 |       startTime: null,
229 |       duration: 300_000,
230 |       remainingTime: 300_000,
231 |     };
232 |     const newValue = { minutes: 10, seconds: 30 };
233 |     const updatedTimer = updateTimer(currentTimer, newValue);
234 |     const expectedDuration = 10 * 60_000 + 30 * 1_000;
235 |     expect(updatedTimer.duration).toBe(expectedDuration);
236 |     expect(updatedTimer.remainingTime).toBe(expectedDuration);
237 |   });
238 | });
239 | 
240 | describe("#calculateTime", () => {
241 |   it("should calculate time correctly", () => {
242 |     const currentTimer: RunningTimerType = {
243 |       id: "timer1",
244 |       status: "running",
245 |       startTime: 1000,
246 |       duration: 300_000,
247 |       remainingTime: 3661234, // 1h 1m 1s 234ms
248 |     };
249 |     const time = calculateTime(currentTimer);
250 |     expect(time.h).toBe(1);
251 |     expect(time.hh).toBe("01");
252 |     expect(time.m).toBe(1);
253 |     expect(time.mm).toBe("01");
254 |     expect(time.s).toBe(1);
255 |     expect(time.ss).toBe("01");
256 |     expect(time.ms).toBe(234);
257 |     expect(time.msPad).toBe("234");
258 |     expect(time.fullSeconds).toBe(3661);
259 |     expect(time.fullMinutes).toBe(61);
260 |   });
261 | 
262 |   it("should handle negative remaining time", () => {
263 |     const currentTimer: RunningTimerType = {
264 |       id: "timer1",
265 |       status: "running",
266 |       startTime: 1000,
267 |       duration: 300_000,
268 |       remainingTime: -3661234, // -1h 1m 1s 234ms
269 |     };
270 |     const time = calculateTime(currentTimer);
271 |     expect(time.h).toBe(1);
272 |     expect(time.hh).toBe("01");
273 |     expect(time.m).toBe(1);
274 |     expect(time.mm).toBe("01");
275 |     expect(time.s).toBe(1);
276 |     expect(time.ss).toBe("01");
277 |     expect(time.ms).toBe(234);
278 |     expect(time.msPad).toBe("234");
279 |     expect(time.fullSeconds).toBe(3661);
280 |     expect(time.fullMinutes).toBe(61);
281 |   });
282 | 
283 |   it("should handle zero remaining time", () => {
284 |     const currentTimer: RunningTimerType = {
285 |       id: "timer1",
286 |       status: "running",
287 |       startTime: 1000,
288 |       duration: 300_000,
289 |       remainingTime: 0,
290 |     };
291 |     const time = calculateTime(currentTimer);
292 |     expect(time.h).toBe(0);
293 |     expect(time.hh).toBe("00");
294 |     expect(time.m).toBe(0);
295 |     expect(time.mm).toBe("00");
296 |     expect(time.s).toBe(0);
297 |     expect(time.ss).toBe("00");
298 |     expect(time.ms).toBe(0);
299 |     expect(time.msPad).toBe("000");
300 |     expect(time.fullSeconds).toBe(0);
301 |     expect(time.fullMinutes).toBe(0);
302 |   });
303 | 
304 |   it("should handle small values (less than 1 minute)", () => {
305 |     const currentTimer: RunningTimerType = {
306 |       id: "timer1",
307 |       status: "running",
308 |       startTime: 1000,
309 |       duration: 300_000,
310 |       remainingTime: 45678, // 45s 678ms
311 |     };
312 |     const time = calculateTime(currentTimer);
313 |     expect(time.h).toBe(0);
314 |     expect(time.hh).toBe("00");
315 |     expect(time.m).toBe(0);
316 |     expect(time.mm).toBe("00");
317 |     expect(time.s).toBe(45);
318 |     expect(time.ss).toBe("45");
319 |     expect(time.ms).toBe(678);
320 |     expect(time.msPad).toBe("678");
321 |     expect(time.fullSeconds).toBe(45);
322 |     expect(time.fullMinutes).toBe(0);
323 |   });
324 | 
325 |   it("should handle large values (more than 24 hours)", () => {
326 |     const currentTimer: RunningTimerType = {
327 |       id: "timer1",
328 |       status: "running",
329 |       startTime: 1000,
330 |       duration: 300_000,
331 |       remainingTime: 90_000_000, // 25h
332 |     };
333 |     const time = calculateTime(currentTimer);
334 |     expect(time.h).toBe(25);
335 |     expect(time.hh).toBe("25");
336 |     expect(time.m).toBe(0);
337 |     expect(time.mm).toBe("00");
338 |     expect(time.s).toBe(0);
339 |     expect(time.ss).toBe("00");
340 |     expect(time.ms).toBe(0);
341 |     expect(time.msPad).toBe("000");
342 |     expect(time.fullSeconds).toBe(90000);
343 |     expect(time.fullMinutes).toBe(1500);
344 |   });
345 | });
346 | 


--------------------------------------------------------------------------------
/src/components/timer/timer.ts:
--------------------------------------------------------------------------------
  1 | import { randomID } from "@/lib/utils";
  2 | import { z } from "zod";
  3 | 
  4 | export const TimerNameSchema = z.string().max(64).nullish();
  5 | export type TimerNameType = z.infer<typeof TimerNameSchema>;
  6 | 
  7 | // ReadyTimer -> RunningTimer -> StoppedTimer
  8 | //               RunningTimer <-> PausedTimer -> StoppedTimer
  9 | 
 10 | const ReadyTimerSchema = z.object({
 11 |   id: z.string(),
 12 |   name: TimerNameSchema,
 13 |   status: z.literal("ready"),
 14 |   startTime: z.null(),
 15 |   duration: z.number(), // ms
 16 |   remainingTime: z.number(), // ms
 17 | });
 18 | export type ReadyTimerType = z.infer<typeof ReadyTimerSchema>;
 19 | 
 20 | const RunningTimerSchema = z.object({
 21 |   id: z.string(),
 22 |   name: TimerNameSchema,
 23 |   status: z.literal("running"),
 24 |   startTime: z.number(),
 25 |   duration: z.number(), // ms
 26 |   remainingTime: z.number(), // ms
 27 | });
 28 | export type RunningTimerType = z.infer<typeof RunningTimerSchema>;
 29 | 
 30 | const PausedTimerSchema = z.object({
 31 |   id: z.string(),
 32 |   name: TimerNameSchema,
 33 |   status: z.literal("paused"),
 34 |   startTime: z.number(),
 35 |   duration: z.number(),
 36 |   remainingTime: z.number(), // ms
 37 |   pausedTime: z.number(), // ms
 38 | });
 39 | export type PausedTimerType = z.infer<typeof PausedTimerSchema>;
 40 | 
 41 | const StoppedTimerSchema = z.object({
 42 |   id: z.string(),
 43 |   name: TimerNameSchema,
 44 |   status: z.literal("stopped"),
 45 |   startTime: z.number(),
 46 |   duration: z.number(), // ms
 47 |   remainingTime: z.number(), // ms
 48 | });
 49 | export type StoppedTimerType = z.infer<typeof StoppedTimerSchema>;
 50 | 
 51 | // TimerType has common properties
 52 | export const CurrentTimerSchema = z.union([
 53 |   ReadyTimerSchema,
 54 |   RunningTimerSchema,
 55 |   PausedTimerSchema,
 56 |   StoppedTimerSchema,
 57 | ]);
 58 | export type CurrentTimerType = z.infer<typeof CurrentTimerSchema>;
 59 | 
 60 | export const initReadyTimer = (): ReadyTimerType => ({
 61 |   id: randomID(),
 62 |   status: "ready",
 63 |   startTime: null,
 64 |   duration: 300_000, // 5 minutes
 65 |   remainingTime: 300_000,
 66 | });
 67 | 
 68 | export const isInitialTimer = (currentTimer: CurrentTimerType) => {
 69 |   return (
 70 |     currentTimer.status === "ready" &&
 71 |     currentTimer.startTime === null &&
 72 |     currentTimer.duration === 300_000 &&
 73 |     currentTimer.remainingTime === 300_000
 74 |   );
 75 | };
 76 | 
 77 | const commonTimerProps = (
 78 |   _currentTimer: CurrentTimerType,
 79 | ): Omit<CurrentTimerType, "pausedTime"> => {
 80 |   const { pausedTime, ...commonProps } = {
 81 |     ..._currentTimer,
 82 |     pausedTime: "pausedTime" in _currentTimer ? _currentTimer.pausedTime : null,
 83 |   };
 84 |   return commonProps;
 85 | };
 86 | 
 87 | export const startTimer = (
 88 |   _currentTimer: CurrentTimerType,
 89 | ): RunningTimerType => {
 90 |   const currentTimer = commonTimerProps(_currentTimer);
 91 |   return {
 92 |     ...currentTimer,
 93 |     status: "running",
 94 |     startTime: Date.now(),
 95 |     remainingTime: currentTimer.duration,
 96 |   };
 97 | };
 98 | 
 99 | export const calculateRemainingTime = (currentTimer: CurrentTimerType) => {
100 |   const elapsedTime = currentTimer.startTime
101 |     ? Date.now() - currentTimer.startTime
102 |     : 0;
103 |   if (currentTimer.status !== "paused") {
104 |     return currentTimer.duration - elapsedTime;
105 |   }
106 |   const pausedDuration =
107 |     "pausedTime" in currentTimer ? Date.now() - currentTimer.pausedTime : 0;
108 |   return currentTimer.duration - elapsedTime + pausedDuration;
109 | };
110 | 
111 | export const tickTimer = (currentTimer: CurrentTimerType): RunningTimerType => {
112 |   switch (currentTimer.status) {
113 |     case "running": {
114 |       return {
115 |         ...currentTimer,
116 |         remainingTime: calculateRemainingTime(currentTimer),
117 |       };
118 |     }
119 |     case "paused": {
120 |       return resumeTimer(currentTimer);
121 |     }
122 |     default:
123 |       return {
124 |         ...currentTimer,
125 |         status: "running",
126 |         startTime: currentTimer.startTime ?? Date.now(),
127 |       };
128 |   }
129 | };
130 | 
131 | export const pauseTimer = (currentTimer: CurrentTimerType): PausedTimerType => {
132 |   if (currentTimer.status === "paused") return currentTimer;
133 |   const pausedTime = Date.now();
134 |   const pausedTimer: PausedTimerType = {
135 |     ...currentTimer,
136 |     status: "paused",
137 |     startTime: currentTimer.startTime ?? pausedTime,
138 |     pausedTime,
139 |   };
140 |   return {
141 |     ...pausedTimer,
142 |     remainingTime: calculateRemainingTime(pausedTimer),
143 |   };
144 | };
145 | 
146 | export const resumeTimer = (
147 |   currentTimer: CurrentTimerType,
148 | ): RunningTimerType => {
149 |   if (currentTimer.status !== "paused") {
150 |     return {
151 |       ...currentTimer,
152 |       status: "running",
153 |       startTime: currentTimer.startTime ?? Date.now(),
154 |     };
155 |   }
156 |   const { pausedTime, ...rest } = currentTimer;
157 |   const elapsedTime = pausedTime - currentTimer.startTime;
158 |   return {
159 |     ...rest,
160 |     status: "running",
161 |     startTime: Date.now() - elapsedTime,
162 |     remainingTime: currentTimer.duration - elapsedTime,
163 |   };
164 | };
165 | 
166 | export const stopTimer = (currentTimer: CurrentTimerType): StoppedTimerType => {
167 |   return {
168 |     ...commonTimerProps(currentTimer),
169 |     status: "stopped",
170 |     startTime: currentTimer.startTime ?? Date.now(),
171 |   };
172 | };
173 | 
174 | export const resetTimer = (currentTimer: CurrentTimerType): ReadyTimerType => {
175 |   return {
176 |     ...commonTimerProps(currentTimer),
177 |     status: "ready",
178 |     startTime: null,
179 |     remainingTime: currentTimer.duration,
180 |   };
181 | };
182 | 
183 | export const updateTimer = (
184 |   currentTimer: CurrentTimerType,
185 |   value: { minutes: number; seconds: number },
186 | ): CurrentTimerType => {
187 |   const duration = Math.max(value.minutes * 60_000 + value.seconds * 1_000, 0);
188 |   return {
189 |     ...currentTimer,
190 |     duration,
191 |     remainingTime: duration,
192 |   };
193 | };
194 | 
195 | export const calculateTime = (currentTimer: CurrentTimerType) => {
196 |   const absRemainingMs = Math.abs(currentTimer.remainingTime);
197 |   const ms = absRemainingMs % 1000;
198 |   const fullSeconds = Math.floor(absRemainingMs / 1000);
199 |   const s = fullSeconds % 60;
200 |   const fullMinutes = Math.floor(fullSeconds / 60);
201 |   const m = fullMinutes % 60;
202 |   const h = Math.floor(fullMinutes / 60);
203 |   const elapsedSeconds =
204 |     Math.floor(currentTimer.duration - currentTimer.remainingTime) / 1000;
205 |   const elapsedMinutes = Math.floor(elapsedSeconds / 60);
206 |   const time = {
207 |     h,
208 |     hh: h.toString().padStart(2, "0"),
209 |     m,
210 |     mm: m.toString().padStart(2, "0"),
211 |     s,
212 |     ss: s.toString().padStart(2, "0"),
213 |     ms,
214 |     msPad: ms.toString().padStart(3, "0"),
215 |     fullSeconds,
216 |     fullMinutes,
217 |     elapsedSeconds,
218 |     elapsedMinutes,
219 |   };
220 |   return time;
221 | };
222 | 


--------------------------------------------------------------------------------
/src/components/timer/use-timer-core.ts:
--------------------------------------------------------------------------------
  1 | import { isSamePath } from "@/lib/url";
  2 | import { useEffect, useRef, useState } from "react";
  3 | import { events } from "../analytics/events";
  4 | import {
  5 |   loadCurrentTimer,
  6 |   loadTimerControlSettings,
  7 |   storeCurrentTimer,
  8 |   storeTimerControlSettings,
  9 | } from "./local-storage";
 10 | import {
 11 |   type CurrentTimerType,
 12 |   calculateTime,
 13 |   initReadyTimer,
 14 |   isInitialTimer,
 15 |   pauseTimer,
 16 |   resetTimer,
 17 |   resumeTimer,
 18 |   startTimer,
 19 |   stopTimer,
 20 |   tickTimer,
 21 |   updateTimer,
 22 | } from "./timer";
 23 | import {
 24 |   type FinishSoundOptionKeys,
 25 |   type TimerControllerFont,
 26 |   type TimerControllerSettingsType,
 27 |   finishSoundOptions,
 28 |   initialTimerControllerSettings,
 29 | } from "./timer-controller-settings/settings";
 30 | 
 31 | export type UpdateCurrentTimerProps =
 32 |   | Pick<CurrentTimerType, "name">
 33 |   | CurrentTimerType;
 34 | 
 35 | export type TimerUpdater = (prev: CurrentTimerType) => CurrentTimerType;
 36 | 
 37 | export const isTimerUpdater = (value: unknown): value is TimerUpdater =>
 38 |   typeof value === "function";
 39 | 
 40 | export const useTimerCore = () => {
 41 |   const [currentTimer, setCurrentTimer] =
 42 |     useState<CurrentTimerType>(initReadyTimer);
 43 |   const time = calculateTime(currentTimer);
 44 |   const [timerControlSettings, setTimerControlSettings] =
 45 |     useState<TimerControllerSettingsType>(initialTimerControllerSettings);
 46 |   const [finishSoundAudio, setFinishSoundAudio] =
 47 |     useState<HTMLAudioElement | null>(null);
 48 | 
 49 |   const tickIntervalRef = useRef<Timer | null>(null);
 50 | 
 51 |   const tick = () => {
 52 |     updateCurrentTimer((prev) => {
 53 |       const newTimer = tickTimer(prev);
 54 |       if (0 < newTimer.remainingTime) return newTimer;
 55 |       // Just passed 0
 56 |       if (0 <= prev.remainingTime) {
 57 |         playFinishSound();
 58 |       }
 59 |       // TODO: handle overflow
 60 |       return newTimer;
 61 |     });
 62 |   };
 63 |   const clearTickInterval = () => {
 64 |     if (tickIntervalRef.current) {
 65 |       clearInterval(tickIntervalRef.current);
 66 |       tickIntervalRef.current = null;
 67 |     }
 68 |   };
 69 |   const loopTick = () => {
 70 |     clearTickInterval();
 71 |     tickIntervalRef.current = setInterval(
 72 |       tick,
 73 |       timerControlSettings.timerResolution,
 74 |     );
 75 |   };
 76 | 
 77 |   const start = () => {
 78 |     updateCurrentTimer(startTimer);
 79 |     prepareFinishSound();
 80 |     loopTick();
 81 |     events.timerStart(time.fullSeconds);
 82 |   };
 83 | 
 84 |   const pause = () => {
 85 |     updateCurrentTimer(pauseTimer);
 86 |     clearTickInterval();
 87 |     events.timerPause(time.fullSeconds);
 88 |   };
 89 | 
 90 |   const resume = () => {
 91 |     updateCurrentTimer(resumeTimer);
 92 |     loopTick();
 93 |     events.timerStart(time.fullSeconds);
 94 |   };
 95 | 
 96 |   const stop = () => {
 97 |     updateCurrentTimer(stopTimer);
 98 |     clearTickInterval();
 99 |   };
100 | 
101 |   const reset = () => {
102 |     updateCurrentTimer(resetTimer);
103 |     events.timerReset(time.fullSeconds);
104 |   };
105 | 
106 |   const updateTime = (value: Partial<{ minutes: number; seconds: number }>) => {
107 |     if (currentTimer.status !== "ready") return;
108 |     const { minutes = time.fullMinutes, seconds = time.s } = value;
109 |     const newTimer = updateTimer(currentTimer, { minutes, seconds });
110 |     updateCurrentTimer(newTimer);
111 |     events.timerTimeSet(minutes * 60 + seconds);
112 |     return newTimer;
113 |   };
114 | 
115 |   const prepareFinishSound = (
116 |     settings?: Partial<TimerControllerSettingsType>,
117 |   ) => {
118 |     const { finishSound, finishSoundVolume } = {
119 |       ...timerControlSettings,
120 |       ...settings,
121 |     };
122 |     const finishSoundPath = finishSoundOptions.find(
123 |       (option) => option.key === finishSound,
124 |     )?.path;
125 |     if (!finishSoundPath) return null;
126 |     if (isSamePath(finishSoundAudio?.src, finishSoundPath))
127 |       return finishSoundAudio;
128 |     const sound = finishSoundAudio || new Audio(finishSoundPath);
129 |     sound.src = finishSoundPath;
130 |     sound.volume = finishSoundVolume;
131 |     sound.load();
132 |     setFinishSoundAudio(sound);
133 |     return sound;
134 |   };
135 | 
136 |   const playFinishSound = () => {
137 |     const sound = prepareFinishSound();
138 |     if (!sound) return;
139 |     sound.volume = timerControlSettings.finishSoundVolume;
140 |     sound.currentTime = 0;
141 |     sound.play();
142 |     events.timerComplete(time.fullSeconds);
143 |   };
144 | 
145 |   const updateCurrentTimer = (
146 |     props: UpdateCurrentTimerProps | TimerUpdater,
147 |   ) => {
148 |     if (isTimerUpdater(props)) {
149 |       setCurrentTimer(props);
150 |     } else {
151 |       setCurrentTimer((prev) => ({
152 |         ...prev,
153 |         ...props,
154 |       }));
155 |     }
156 |   };
157 | 
158 |   const updateTimerControlSettings = (
159 |     timerControlSettings: Partial<TimerControllerSettingsType>,
160 |   ) => {
161 |     setTimerControlSettings((prev) => {
162 |       const newTimerControlSettings = {
163 |         ...prev,
164 |         ...timerControlSettings,
165 |       };
166 |       if (
167 |         newTimerControlSettings.finishSound ||
168 |         newTimerControlSettings.finishSoundVolume
169 |       ) {
170 |         prepareFinishSound(newTimerControlSettings);
171 |       }
172 | 
173 |       // Track settings changes
174 |       for (const [key, value] of Object.entries(timerControlSettings)) {
175 |         switch (key) {
176 |           case "font":
177 |             events.timerFontChange(value as TimerControllerFont);
178 |             break;
179 |           case "orientation":
180 |             events.timerOrientationChange(value as "horizontal" | "vertical");
181 |             break;
182 |           case "timerResolution":
183 |             events.timerResolutionChange(value as number);
184 |             break;
185 |           case "finishSound":
186 |             events.timerFinishSoundChange(value as FinishSoundOptionKeys);
187 |             break;
188 |           case "finishSoundVolume":
189 |             events.timerFinishSoundVolumeChange(value as number);
190 |             break;
191 |         }
192 |       }
193 | 
194 |       storeTimerControlSettings(newTimerControlSettings);
195 |       return newTimerControlSettings;
196 |     });
197 |   };
198 | 
199 |   // biome-ignore lint/correctness/useExhaustiveDependencies: for initial render
200 |   useEffect(() => {
201 |     const isTickingDesynchronized =
202 |       currentTimer.status === "running" && !tickIntervalRef.current;
203 |     if (!isTickingDesynchronized) return;
204 |     loopTick();
205 |   }, [currentTimer.status]);
206 | 
207 |   useEffect(() => {
208 |     if (isInitialTimer(currentTimer)) return;
209 |     storeCurrentTimer(currentTimer);
210 |   }, [currentTimer]);
211 | 
212 |   // Load from local storage
213 |   useEffect(() => {
214 |     setTimerControlSettings((prev) => loadTimerControlSettings() || prev);
215 |     setCurrentTimer((prev) => loadCurrentTimer() || prev);
216 |   }, []);
217 | 
218 |   // biome-ignore lint/correctness/useExhaustiveDependencies: for cleanup
219 |   useEffect(() => {
220 |     return () => clearTickInterval();
221 |   }, []);
222 | 
223 |   return {
224 |     time,
225 |     status: currentTimer.status,
226 |     currentTimer,
227 |     timerControlSettings,
228 |     isOvertime: currentTimer.remainingTime < 0,
229 |     start,
230 |     pause,
231 |     resume,
232 |     stop,
233 |     reset,
234 |     updateTime,
235 |     playFinishSound,
236 |     updateCurrentTimer,
237 |     updateTimerControlSettings,
238 |   };
239 | };
240 | 


--------------------------------------------------------------------------------
/src/components/timer/use-timer.ts:
--------------------------------------------------------------------------------
1 | import { useContext } from "react";
2 | import { TimerContext } from "./timer-provider";
3 | 
4 | export const useTimer = () => {
5 |   const core = useContext(TimerContext);
6 | 
7 |   return core;
8 | };
9 | 


--------------------------------------------------------------------------------
/src/components/ui/button-animation.module.css:
--------------------------------------------------------------------------------
 1 | .touchyButton {
 2 |   transition: transform 0.1s ease-in-out, opacity 0.2s ease-out,
 3 |     background-color 0.2s ease-out;
 4 |   transform: scale(1);
 5 |   transform-origin: center;
 6 | 
 7 |   &:active {
 8 |     transform: scaleY(0.9) scaleX(1.05) translateY(-5%) rotateX(10deg);
 9 |     transition: transform 0.05s ease-out, opacity 0.2s ease-out,
10 |       background-color 0.2s ease-out;
11 |     opacity: 0.6;
12 |   }
13 | 
14 |   &:hover {
15 |     opacity: 0.9;
16 |   }
17 | 
18 |   &:disabled {
19 |     opacity: 0.5;
20 |     cursor: not-allowed;
21 |   }
22 | }
23 | 


--------------------------------------------------------------------------------
/src/components/ui/button.tsx:
--------------------------------------------------------------------------------
 1 | import { Slot } from "@radix-ui/react-slot";
 2 | import { type VariantProps, cva } from "class-variance-authority";
 3 | import * as React from "react";
 4 | 
 5 | import { cn } from "@/lib/utils";
 6 | import styles from "./button-animation.module.css";
 7 | 
 8 | const buttonVariants = cva(
 9 |   "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors " +
10 |     "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 " +
11 |     "[&_svg]:pointer-events-none [&_svg]:size-6 [&_svg]:shrink-0 ",
12 |   {
13 |     variants: {
14 |       variant: {
15 |         default:
16 |           "bg-primary text-primary-foreground shadow hover:bg-primary/90 active:bg-primary/90",
17 |         destructive:
18 |           "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 active:bg-destructive/90",
19 |         outline:
20 |           "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground active:bg-accent active:text-accent-foreground",
21 |         secondary:
22 |           "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 active:bg-secondary/80",
23 |         ghost:
24 |           "hover:bg-accent hover:text-accent-foreground active:bg-accent active:text-accent-foreground",
25 |         link: "text-primary underline-offset-4 hover:underline active:underline",
26 |       },
27 |       size: {
28 |         default: "px-4 py-2",
29 |         sm: "h-8 rounded-md px-3 text-xs",
30 |         lg: "rounded-md px-8 py-4 text-xl font-bold",
31 |         icon: "min-h-10 p-2 aspect-square",
32 |       },
33 |     },
34 |     defaultVariants: {
35 |       variant: "default",
36 |       size: "default",
37 |     },
38 |   },
39 | );
40 | 
41 | export interface ButtonProps
42 |   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
43 |     VariantProps<typeof buttonVariants> {
44 |   asChild?: boolean;
45 | }
46 | 
47 | const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
48 |   ({ className, variant, size, asChild = false, ...props }, ref) => {
49 |     const Comp = asChild ? Slot : "button";
50 |     return (
51 |       <Comp
52 |         className={cn(
53 |           buttonVariants({ variant, size, className }),
54 |           styles.touchyButton,
55 |         )}
56 |         ref={ref}
57 |         {...props}
58 |       />
59 |     );
60 |   },
61 | );
62 | Button.displayName = "Button";
63 | 
64 | export { Button, buttonVariants };
65 | 


--------------------------------------------------------------------------------
/src/components/ui/collapsible.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
 4 | 
 5 | const Collapsible = CollapsiblePrimitive.Root;
 6 | 
 7 | const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
 8 | 
 9 | const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;
10 | 
11 | export { Collapsible, CollapsibleTrigger, CollapsibleContent };
12 | 


--------------------------------------------------------------------------------
/src/components/ui/input.tsx:
--------------------------------------------------------------------------------
 1 | import * as React from "react";
 2 | 
 3 | import { cn } from "@/lib/utils";
 4 | 
 5 | const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
 6 |   ({ className, type, ...props }, ref) => {
 7 |     return (
 8 |       <input
 9 |         type={type}
10 |         className={cn(
11 |           "flex h-full w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors",
12 |           "file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm",
13 |           "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
14 |           "placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
15 |           className,
16 |         )}
17 |         ref={ref}
18 |         {...props}
19 |       />
20 |     );
21 |   },
22 | );
23 | Input.displayName = "Input";
24 | 
25 | export { Input };
26 | 


--------------------------------------------------------------------------------
/src/components/ui/popover.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import * as PopoverPrimitive from "@radix-ui/react-popover";
 4 | import * as React from "react";
 5 | 
 6 | import { cn } from "@/lib/utils";
 7 | 
 8 | const Popover = PopoverPrimitive.Root;
 9 | 
10 | const PopoverTrigger = PopoverPrimitive.Trigger;
11 | 
12 | const PopoverAnchor = PopoverPrimitive.Anchor;
13 | 
14 | const PopoverContent = React.forwardRef<
15 |   React.ElementRef<typeof PopoverPrimitive.Content>,
16 |   React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
17 | >(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
18 |   <PopoverPrimitive.Portal>
19 |     <PopoverPrimitive.Content
20 |       ref={ref}
21 |       align={align}
22 |       sideOffset={sideOffset}
23 |       className={cn(
24 |         "z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
25 |         "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
26 |         "data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:animate-in",
27 |         "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:animate-out",
28 |         className,
29 |       )}
30 |       {...props}
31 |     />
32 |   </PopoverPrimitive.Portal>
33 | ));
34 | PopoverContent.displayName = PopoverPrimitive.Content.displayName;
35 | 
36 | export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
37 | 


--------------------------------------------------------------------------------
/src/components/ui/scroll-area.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
 4 | import * as React from "react";
 5 | 
 6 | import { cn } from "@/lib/utils";
 7 | 
 8 | const ScrollArea = React.forwardRef<
 9 |   React.ElementRef<typeof ScrollAreaPrimitive.Root>,
10 |   React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
11 | >(({ className, children, ...props }, ref) => (
12 |   <ScrollAreaPrimitive.Root
13 |     ref={ref}
14 |     className={cn("relative overflow-hidden", className)}
15 |     {...props}
16 |   >
17 |     <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
18 |       {children}
19 |     </ScrollAreaPrimitive.Viewport>
20 |     <ScrollBar />
21 |     <ScrollAreaPrimitive.Corner />
22 |   </ScrollAreaPrimitive.Root>
23 | ));
24 | ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
25 | 
26 | const ScrollBar = React.forwardRef<
27 |   React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
28 |   React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>
29 | >(({ className, orientation = "vertical", ...props }, ref) => (
30 |   <ScrollAreaPrimitive.ScrollAreaScrollbar
31 |     ref={ref}
32 |     orientation={orientation}
33 |     className={cn(
34 |       "flex touch-none select-none transition-colors",
35 |       orientation === "vertical" &&
36 |         "h-full w-2.5 border-l border-l-transparent p-[1px]",
37 |       orientation === "horizontal" &&
38 |         "h-2.5 flex-col border-t border-t-transparent p-[1px]",
39 |       className,
40 |     )}
41 |     {...props}
42 |   >
43 |     <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
44 |   </ScrollAreaPrimitive.ScrollAreaScrollbar>
45 | ));
46 | ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;
47 | 
48 | export { ScrollArea, ScrollBar };
49 | 


--------------------------------------------------------------------------------
/src/components/ui/select.tsx:
--------------------------------------------------------------------------------
  1 | "use client";
  2 | 
  3 | import { cn } from "@/lib/utils";
  4 | import {
  5 |   CheckIcon,
  6 |   ChevronDownIcon,
  7 |   ChevronUpIcon,
  8 | } from "@radix-ui/react-icons";
  9 | import * as SelectPrimitive from "@radix-ui/react-select";
 10 | import * as React from "react";
 11 | 
 12 | const Select = SelectPrimitive.Root;
 13 | 
 14 | const SelectGroup = SelectPrimitive.Group;
 15 | 
 16 | const SelectValue = SelectPrimitive.Value;
 17 | 
 18 | const SelectTrigger = React.forwardRef<
 19 |   React.ElementRef<typeof SelectPrimitive.Trigger>,
 20 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
 21 | >(({ className, children, ...props }, ref) => (
 22 |   <SelectPrimitive.Trigger
 23 |     ref={ref}
 24 |     className={cn(
 25 |       "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
 26 |       className,
 27 |     )}
 28 |     {...props}
 29 |   >
 30 |     {children}
 31 |     <SelectPrimitive.Icon asChild>
 32 |       <ChevronDownIcon className="h-4 w-4 opacity-50" />
 33 |     </SelectPrimitive.Icon>
 34 |   </SelectPrimitive.Trigger>
 35 | ));
 36 | SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
 37 | 
 38 | const SelectScrollUpButton = React.forwardRef<
 39 |   React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
 40 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
 41 | >(({ className, ...props }, ref) => (
 42 |   <SelectPrimitive.ScrollUpButton
 43 |     ref={ref}
 44 |     className={cn(
 45 |       "flex cursor-default items-center justify-center py-1",
 46 |       className,
 47 |     )}
 48 |     {...props}
 49 |   >
 50 |     <ChevronUpIcon className="h-4 w-4" />
 51 |   </SelectPrimitive.ScrollUpButton>
 52 | ));
 53 | SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
 54 | 
 55 | const SelectScrollDownButton = React.forwardRef<
 56 |   React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
 57 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
 58 | >(({ className, ...props }, ref) => (
 59 |   <SelectPrimitive.ScrollDownButton
 60 |     ref={ref}
 61 |     className={cn(
 62 |       "flex cursor-default items-center justify-center py-1",
 63 |       className,
 64 |     )}
 65 |     {...props}
 66 |   >
 67 |     <ChevronDownIcon className="h-4 w-4" />
 68 |   </SelectPrimitive.ScrollDownButton>
 69 | ));
 70 | SelectScrollDownButton.displayName =
 71 |   SelectPrimitive.ScrollDownButton.displayName;
 72 | 
 73 | const SelectContent = React.forwardRef<
 74 |   React.ElementRef<typeof SelectPrimitive.Content>,
 75 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
 76 | >(({ className, children, position = "popper", ...props }, ref) => (
 77 |   <SelectPrimitive.Portal>
 78 |     <SelectPrimitive.Content
 79 |       ref={ref}
 80 |       className={cn(
 81 |         "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md",
 82 |         "data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:animate-in",
 83 |         "data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=closed]:animate-out",
 84 |         "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
 85 |         position === "popper" &&
 86 |           "data-[side=left]:-translate-x-1 data-[side=top]:-translate-y-1 data-[side=right]:translate-x-1 data-[side=bottom]:translate-y-1",
 87 |         className,
 88 |       )}
 89 |       position={position}
 90 |       {...props}
 91 |     >
 92 |       <SelectScrollUpButton />
 93 |       <SelectPrimitive.Viewport
 94 |         className={cn(
 95 |           "p-1",
 96 |           position === "popper" &&
 97 |             "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
 98 |         )}
 99 |       >
100 |         {children}
101 |       </SelectPrimitive.Viewport>
102 |       <SelectScrollDownButton />
103 |     </SelectPrimitive.Content>
104 |   </SelectPrimitive.Portal>
105 | ));
106 | SelectContent.displayName = SelectPrimitive.Content.displayName;
107 | 
108 | const SelectLabel = React.forwardRef<
109 |   React.ElementRef<typeof SelectPrimitive.Label>,
110 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
111 | >(({ className, ...props }, ref) => (
112 |   <SelectPrimitive.Label
113 |     ref={ref}
114 |     className={cn("px-2 py-1.5 font-semibold text-sm", className)}
115 |     {...props}
116 |   />
117 | ));
118 | SelectLabel.displayName = SelectPrimitive.Label.displayName;
119 | 
120 | const SelectItem = React.forwardRef<
121 |   React.ElementRef<typeof SelectPrimitive.Item>,
122 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
123 | >(({ className, children, ...props }, ref) => (
124 |   <SelectItemContainer ref={ref} {...props}>
125 |     <SelectItemIndicator />
126 |     <SelectItemText>{children}</SelectItemText>
127 |   </SelectItemContainer>
128 | ));
129 | SelectItem.displayName = SelectPrimitive.Item.displayName;
130 | 
131 | const SelectItemContainer = React.forwardRef<
132 |   React.ElementRef<typeof SelectPrimitive.Item>,
133 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
134 | >(({ className, children, ...props }, ref) => (
135 |   <SelectPrimitive.Item
136 |     ref={ref}
137 |     className={cn(
138 |       "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pr-8 pl-2 text-sm outline-none",
139 |       "focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
140 |       className,
141 |     )}
142 |     {...props}
143 |   >
144 |     {children}
145 |   </SelectPrimitive.Item>
146 | ));
147 | SelectItemContainer.displayName = SelectPrimitive.Item.displayName;
148 | 
149 | const SelectItemText = React.forwardRef<
150 |   React.ElementRef<typeof SelectPrimitive.ItemText>,
151 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.ItemText>
152 | >(({ className, ...props }, ref) => (
153 |   <SelectPrimitive.ItemText ref={ref} className={className} {...props} />
154 | ));
155 | SelectItemText.displayName = SelectPrimitive.ItemText.displayName;
156 | 
157 | const SelectItemIndicator = React.forwardRef<
158 |   React.ElementRef<typeof SelectPrimitive.ItemIndicator>,
159 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.ItemIndicator>
160 | >(({ className, ...props }, ref) => (
161 |   <SelectPrimitive.ItemIndicator
162 |     ref={ref}
163 |     {...props}
164 |     className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center"
165 |   >
166 |     <CheckIcon className="h-4 w-4" />
167 |   </SelectPrimitive.ItemIndicator>
168 | ));
169 | SelectItemIndicator.displayName = SelectPrimitive.ItemIndicator.displayName;
170 | 
171 | const SelectSeparator = React.forwardRef<
172 |   React.ElementRef<typeof SelectPrimitive.Separator>,
173 |   React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
174 | >(({ className, ...props }, ref) => (
175 |   <SelectPrimitive.Separator
176 |     ref={ref}
177 |     className={cn("-mx-1 my-1 h-px bg-muted", className)}
178 |     {...props}
179 |   />
180 | ));
181 | SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
182 | 
183 | export {
184 |   Select,
185 |   SelectGroup,
186 |   SelectValue,
187 |   SelectTrigger,
188 |   SelectContent,
189 |   SelectLabel,
190 |   SelectItem,
191 |   SelectItemContainer,
192 |   SelectItemText,
193 |   SelectItemIndicator,
194 |   SelectSeparator,
195 |   SelectScrollUpButton,
196 |   SelectScrollDownButton,
197 | };
198 | 


--------------------------------------------------------------------------------
/src/components/ui/slider.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import * as SliderPrimitive from "@radix-ui/react-slider";
 4 | import * as React from "react";
 5 | 
 6 | import { cn } from "@/lib/utils";
 7 | 
 8 | const Slider = React.forwardRef<
 9 |   React.ElementRef<typeof SliderPrimitive.Root>,
10 |   React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
11 | >(({ className, ...props }, ref) => (
12 |   <SliderPrimitive.Root
13 |     ref={ref}
14 |     className={cn(
15 |       "relative flex w-full touch-none select-none items-center",
16 |       className,
17 |     )}
18 |     {...props}
19 |   >
20 |     <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
21 |       <SliderPrimitive.Range className="absolute h-full bg-primary" />
22 |     </SliderPrimitive.Track>
23 |     <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
24 |   </SliderPrimitive.Root>
25 | ));
26 | Slider.displayName = SliderPrimitive.Root.displayName;
27 | 
28 | export { Slider };
29 | 


--------------------------------------------------------------------------------
/src/components/ui/sonner.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { useTheme } from "next-themes";
 4 | import { Toaster as Sonner } from "sonner";
 5 | 
 6 | type ToasterProps = React.ComponentProps<typeof Sonner>;
 7 | 
 8 | const Toaster = ({ ...props }: ToasterProps) => {
 9 |   const { theme = "system" } = useTheme();
10 | 
11 |   return (
12 |     <Sonner
13 |       theme={theme as ToasterProps["theme"]}
14 |       className="toaster group"
15 |       toastOptions={{
16 |         classNames: {
17 |           toast:
18 |             "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
19 |           description: "group-[.toast]:text-muted-foreground",
20 |           actionButton:
21 |             "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
22 |           cancelButton:
23 |             "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
24 |           closeButton:
25 |             "group-[.toast]:bg-transparent group-[.toaster]:border-border left-auto right-0 translate-x-[35%] translate-y-[-35%]",
26 |         },
27 |       }}
28 |       closeButton
29 |       {...props}
30 |     />
31 |   );
32 | };
33 | 
34 | export { Toaster };
35 | 


--------------------------------------------------------------------------------
/src/components/ui/toggle.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import * as TogglePrimitive from "@radix-ui/react-toggle";
 4 | import { type VariantProps, cva } from "class-variance-authority";
 5 | import * as React from "react";
 6 | 
 7 | import { cn } from "@/lib/utils";
 8 | 
 9 | const toggleVariants = cva(
10 |   "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
11 |   {
12 |     variants: {
13 |       variant: {
14 |         default: "bg-transparent",
15 |         outline:
16 |           "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
17 |       },
18 |       size: {
19 |         default: "h-9 px-2 min-w-9",
20 |         sm: "h-8 px-1.5 min-w-8",
21 |         lg: "h-10 px-2.5 min-w-10",
22 |       },
23 |     },
24 |     defaultVariants: {
25 |       variant: "default",
26 |       size: "default",
27 |     },
28 |   },
29 | );
30 | 
31 | const Toggle = React.forwardRef<
32 |   React.ElementRef<typeof TogglePrimitive.Root>,
33 |   React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
34 |     VariantProps<typeof toggleVariants>
35 | >(({ className, variant, size, ...props }, ref) => (
36 |   <TogglePrimitive.Root
37 |     ref={ref}
38 |     className={cn(toggleVariants({ variant, size, className }))}
39 |     {...props}
40 |   />
41 | ));
42 | 
43 | Toggle.displayName = TogglePrimitive.Root.displayName;
44 | 
45 | export { Toggle, toggleVariants };
46 | 


--------------------------------------------------------------------------------
/src/components/wheel-picker/helper.test.ts:
--------------------------------------------------------------------------------
 1 | import { describe, expect, it } from "bun:test";
 2 | import { isTiltableDigit } from "./helper";
 3 | 
 4 | describe("#isTiltableDigit", () => {
 5 |   it("should tilt only rightmost digit when tiltDigits is 1", () => {
 6 |     expect(isTiltableDigit({ index: 2, paddedLength: 3, tiltDigits: 1 })).toBe(
 7 |       true,
 8 |     );
 9 |     expect(isTiltableDigit({ index: 1, paddedLength: 3, tiltDigits: 1 })).toBe(
10 |       false,
11 |     );
12 |     expect(isTiltableDigit({ index: 0, paddedLength: 3, tiltDigits: 1 })).toBe(
13 |       false,
14 |     );
15 |   });
16 | 
17 |   it("should tilt only leftmost digit when paddedLength equals tiltDigits", () => {
18 |     expect(isTiltableDigit({ index: 0, paddedLength: 2, tiltDigits: 2 })).toBe(
19 |       true,
20 |     );
21 |     expect(isTiltableDigit({ index: 1, paddedLength: 2, tiltDigits: 2 })).toBe(
22 |       false,
23 |     );
24 |   });
25 | 
26 |   it("should tilt only rightmost digit in other cases", () => {
27 |     expect(isTiltableDigit({ index: 2, paddedLength: 3, tiltDigits: 2 })).toBe(
28 |       true,
29 |     );
30 |     expect(isTiltableDigit({ index: 1, paddedLength: 3, tiltDigits: 2 })).toBe(
31 |       false,
32 |     );
33 |     expect(isTiltableDigit({ index: 0, paddedLength: 3, tiltDigits: 2 })).toBe(
34 |       false,
35 |     );
36 |   });
37 | });
38 | 


--------------------------------------------------------------------------------
/src/components/wheel-picker/helper.ts:
--------------------------------------------------------------------------------
 1 | export const isTiltableDigit = ({
 2 |   index,
 3 |   paddedLength,
 4 |   tiltDigits,
 5 | }: {
 6 |   index: number;
 7 |   paddedLength: number;
 8 |   tiltDigits: number;
 9 | }) => {
10 |   if (tiltDigits === 1) {
11 |     return index + 1 === paddedLength;
12 |   }
13 |   if (paddedLength === tiltDigits) {
14 |     return index === 0;
15 |   }
16 |   return index + 1 === paddedLength;
17 | };
18 | 


--------------------------------------------------------------------------------
/src/components/wheel-picker/index.tsx:
--------------------------------------------------------------------------------
  1 | "use client";
  2 | 
  3 | import { cn } from "@/lib/utils";
  4 | import { motion } from "motion/react";
  5 | import { type TouchEventHandler, useEffect, useRef, useState } from "react";
  6 | import { NumbersWheel } from "./numbers-wheel";
  7 | 
  8 | const WHEEL_INTERACTION_TIMEOUT = 300;
  9 | 
 10 | export const WheelPicker = ({
 11 |   value,
 12 |   max,
 13 |   increment = 1,
 14 |   scrollThreshold = 28,
 15 |   isInteractive = false,
 16 |   className,
 17 |   onChange,
 18 | }: {
 19 |   value: number;
 20 |   max: number;
 21 |   increment?: number;
 22 |   scrollThreshold?: number;
 23 |   isInteractive?: boolean;
 24 |   className?: string;
 25 |   onChange: (value: number) => void;
 26 | }) => {
 27 |   const containerRef = useRef<HTMLDivElement | null>(null);
 28 |   const scrollDelta = useRef(0);
 29 |   const touchStartY = useRef<number | null>(null);
 30 |   const wheelEndTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
 31 | 
 32 |   const [isTilting, setIsTilting] = useState(false);
 33 |   const [tilt, setTilt] = useState(0);
 34 | 
 35 |   const handleTilt = (props?: { isWheel?: boolean }) => {
 36 |     setIsTilting(true);
 37 |     if (value === 0 || value + increment >= max) {
 38 |       setTilt(0);
 39 |       return;
 40 |     }
 41 |     setTilt(Math.round((scrollDelta.current / scrollThreshold) * 100) / 100);
 42 |     if (!props?.isWheel) return;
 43 |     if (wheelEndTimeoutRef.current) clearTimeout(wheelEndTimeoutRef.current);
 44 |     wheelEndTimeoutRef.current = setTimeout(() => {
 45 |       scrollDelta.current = 0;
 46 |       setTilt(0);
 47 |       setIsTilting(false);
 48 |     }, WHEEL_INTERACTION_TIMEOUT);
 49 |   };
 50 | 
 51 |   const handleScroll = (steps: number) => {
 52 |     const next = value + steps * increment;
 53 |     const newValue =
 54 |       Math.floor(Math.max(0, Math.min(max, next)) / increment) * increment;
 55 |     setTilt(0);
 56 |     onChange(newValue);
 57 |   };
 58 | 
 59 |   const onWheel = (event: WheelEvent) => {
 60 |     if (!isInteractive) return;
 61 |     event.preventDefault();
 62 |     // deltaMode 1: line, 0: pixel
 63 |     const deltaFactor = event.deltaMode === 1 ? scrollThreshold / 2 : 1; // 2 line = scrollThreshold
 64 |     const deltaY = event.deltaY * deltaFactor * 0.5;
 65 |     scrollDelta.current += deltaY;
 66 |     handleTilt({ isWheel: true });
 67 |     if (Math.abs(scrollDelta.current) < scrollThreshold) return;
 68 |     const steps = Math.sign(scrollDelta.current);
 69 |     scrollDelta.current = 0;
 70 |     handleScroll(steps);
 71 |   };
 72 | 
 73 |   const onTouchStart: TouchEventHandler = (event) => {
 74 |     touchStartY.current = event.touches[0].clientY;
 75 |   };
 76 | 
 77 |   const onTouchMove = (event: TouchEvent) => {
 78 |     if (!isInteractive || touchStartY.current === null) return;
 79 |     event.preventDefault();
 80 |     const currentY = event.touches[0].clientY;
 81 |     const deltaY = touchStartY.current - currentY;
 82 |     touchStartY.current = currentY;
 83 |     scrollDelta.current += deltaY;
 84 |     handleTilt();
 85 |     if (Math.abs(scrollDelta.current) < scrollThreshold) return;
 86 |     const steps = Math.round(scrollDelta.current / scrollThreshold);
 87 |     scrollDelta.current = 0;
 88 |     handleScroll(steps);
 89 |   };
 90 | 
 91 |   const onTouchEnd = () => {
 92 |     touchStartY.current = null;
 93 |     scrollDelta.current = 0;
 94 |     setTilt(0);
 95 |     setIsTilting(false);
 96 |   };
 97 | 
 98 |   useEffect(() => {
 99 |     const container = containerRef.current;
100 |     if (!container) return;
101 | 
102 |     // passive: false to enable event.preventDefault
103 |     container.addEventListener("wheel", onWheel, { passive: false });
104 |     container.addEventListener("touchmove", onTouchMove, { passive: false });
105 | 
106 |     return () => {
107 |       container.removeEventListener("wheel", onWheel);
108 |       container.removeEventListener("touchmove", onTouchMove);
109 |     };
110 |     // biome-ignore lint/correctness/useExhaustiveDependencies: React Compiler is enabled
111 |   }, [onWheel, onTouchMove]);
112 | 
113 |   return (
114 |     <motion.div
115 |       layout
116 |       ref={containerRef}
117 |       className={cn("touch-none select-none", className)}
118 |       onTouchStart={onTouchStart}
119 |       onTouchEnd={onTouchEnd}
120 |     >
121 |       <NumbersWheel
122 |         value={value}
123 |         max={max}
124 |         tilt={tilt}
125 |         tiltDigits={increment.toString().length}
126 |         isInteractive={isInteractive && isTilting}
127 |       />
128 |     </motion.div>
129 |   );
130 | };
131 | 


--------------------------------------------------------------------------------
/src/components/wheel-picker/number-wheel.module.css:
--------------------------------------------------------------------------------
 1 | .wheelContainerGradient {
 2 |   mask-image: linear-gradient(
 3 |     to top,
 4 |     transparent,
 5 |     white 10%,
 6 |     white 90%,
 7 |     transparent
 8 |   );
 9 |   -webkit-mask-image: linear-gradient(
10 |     to top,
11 |     transparent,
12 |     white 10%,
13 |     white 90%,
14 |     transparent
15 |   );
16 | }
17 | 


--------------------------------------------------------------------------------
/src/components/wheel-picker/number-wheel.tsx:
--------------------------------------------------------------------------------
  1 | "use client";
  2 | 
  3 | import { motion } from "motion/react";
  4 | import { type FC, useEffect, useRef, useState } from "react";
  5 | 
  6 | import { cn, sequenceNumbers } from "@/lib/utils";
  7 | import style from "./number-wheel.module.css";
  8 | 
  9 | const WHEEL_SIZE_RATIO = 0.85;
 10 | const calculateWheelRadius = (
 11 |   container: HTMLDivElement | null,
 12 |   anglePerOption: number,
 13 | ) => {
 14 |   if (!container) return 0;
 15 |   const angleRad = (anglePerOption * Math.PI) / 180;
 16 |   const rect = container.getBoundingClientRect();
 17 |   const radius =
 18 |     (rect.height / (2 * Math.sin(angleRad / 2))) * WHEEL_SIZE_RATIO;
 19 |   return radius;
 20 | };
 21 | 
 22 | const TILT_RATIO = 1;
 23 | 
 24 | interface NumberWheelProps {
 25 |   value: number;
 26 |   tilt?: number;
 27 |   max?: number;
 28 |   className?: string;
 29 |   transitionDuration?: number;
 30 | }
 31 | 
 32 | export const NumberWheel: FC<NumberWheelProps> = ({
 33 |   value,
 34 |   tilt = 0,
 35 |   max = 9,
 36 |   className,
 37 |   transitionDuration = 0.5,
 38 | }) => {
 39 |   const anglePerOption = 360 / (max + 1);
 40 |   const targetAngle = value * anglePerOption;
 41 | 
 42 |   const previousAngle = useRef<number>(0);
 43 |   const normalizedPreviousAngle = previousAngle.current % 360;
 44 | 
 45 |   let deltaAngle = targetAngle - normalizedPreviousAngle;
 46 |   if (deltaAngle > 180) deltaAngle -= 360;
 47 |   if (deltaAngle < -180) deltaAngle += 360;
 48 |   const currentAngle =
 49 |     previousAngle.current + deltaAngle + tilt * anglePerOption * TILT_RATIO;
 50 |   previousAngle.current = currentAngle;
 51 | 
 52 |   const containerRef = useRef<HTMLDivElement>(null);
 53 |   const [wheelRadius, setWheelRadius] = useState(3000);
 54 | 
 55 |   useEffect(() => {
 56 |     const resizeWheelSize = () => {
 57 |       setWheelRadius(
 58 |         calculateWheelRadius(containerRef.current, anglePerOption),
 59 |       );
 60 |     };
 61 |     resizeWheelSize();
 62 |     window.addEventListener("resize", resizeWheelSize);
 63 |     return () => window.removeEventListener("resize", resizeWheelSize);
 64 |   }, [anglePerOption]);
 65 | 
 66 |   return (
 67 |     <motion.div
 68 |       layout
 69 |       className={cn(
 70 |         "relative h-[27vw] w-[16vw]",
 71 |         style.wheelContainerGradient,
 72 |         className,
 73 |       )}
 74 |       ref={containerRef}
 75 |       aria-label={`Current number: ${value}`}
 76 |     >
 77 |       <div
 78 |         className="h-full w-full transition-transform ease-in-out [transform-style:preserve-3d]"
 79 |         style={{
 80 |           transform: `rotateX(${currentAngle}deg)`,
 81 |           transitionDuration: `${transitionDuration}s`,
 82 |         }}
 83 |       >
 84 |         {sequenceNumbers(max + 1).map((option) => (
 85 |           <div
 86 |             key={option}
 87 |             className={cn(
 88 |               "absolute flex h-full w-full items-center justify-center opacity-30 transition-opacity duration-300 ease-in-out [backface-visibility:hidden]",
 89 |               option === value && "opacity-100",
 90 |             )}
 91 |             style={{
 92 |               transform: `rotateX(${option * -anglePerOption}deg) translateZ(${wheelRadius}px)`,
 93 |             }}
 94 |             aria-hidden={option !== value}
 95 |           >
 96 |             {option}
 97 |           </div>
 98 |         ))}
 99 |       </div>
100 |     </motion.div>
101 |   );
102 | };
103 | 


--------------------------------------------------------------------------------
/src/components/wheel-picker/numbers-wheel.tsx:
--------------------------------------------------------------------------------
 1 | "use client";
 2 | 
 3 | import { type FC, useId, useRef } from "react";
 4 | import { isTiltableDigit } from "./helper";
 5 | import { NumberWheel } from "./number-wheel";
 6 | 
 7 | interface NumberWheelProps {
 8 |   value: number;
 9 |   max: number;
10 |   tilt?: number;
11 |   tiltDigits?: number;
12 |   className?: string;
13 |   options?: number[];
14 |   isInteractive?: boolean;
15 | }
16 | 
17 | export const NumbersWheel: FC<NumberWheelProps> = ({
18 |   value: _value,
19 |   max,
20 |   tilt = 0,
21 |   tiltDigits = 1,
22 |   className,
23 |   isInteractive = false,
24 | }) => {
25 |   if (_value > max) {
26 |     console.warn("value must be less than max");
27 |   }
28 |   const value = _value % (max + 1);
29 |   const paddedLength = Math.max(value.toString().length, 2);
30 |   const paddedValues = [...value.toString().padStart(paddedLength, "0")];
31 |   const maxLength = max.toString().length;
32 |   const isTiltable = (index: number) =>
33 |     isTiltableDigit({ index, paddedLength, tiltDigits });
34 |   const numbers = paddedValues.map((paddedValue, index) => ({
35 |     index: paddedLength - index,
36 |     value: Number(paddedValue),
37 |     max: Number(max.toString()[maxLength - paddedLength + index]),
38 |     tilt: isTiltable(index) ? tilt : 0,
39 |     transitionDuration: isInteractive && isTiltable(index) ? 0 : 0.5,
40 |   }));
41 | 
42 |   const componentIdRef = useRef(useId());
43 | 
44 |   return numbers.map((number) => (
45 |     <NumberWheel
46 |       key={`${componentIdRef.current}-${number.index}`}
47 |       value={number.value}
48 |       max={number.max}
49 |       tilt={number.tilt}
50 |       className={className}
51 |       transitionDuration={number.transitionDuration}
52 |     />
53 |   ));
54 | };
55 | 


--------------------------------------------------------------------------------
/src/lib/url.test.ts:
--------------------------------------------------------------------------------
  1 | import { describe, expect, it } from "bun:test";
  2 | import { isSamePath, sameOrigin } from "./url";
  3 | 
  4 | describe("#isSamePath", () => {
  5 |   it("should return true if the paths are the same", () => {
  6 |     expect(
  7 |       isSamePath(
  8 |         "http://localhost:8888/audio/sfx/maoudamashii_se_onepoint26.mp3",
  9 |         "/audio/sfx/maoudamashii_se_onepoint26.mp3",
 10 |       ),
 11 |     ).toBe(true);
 12 |     expect(
 13 |       isSamePath(
 14 |         "http://localhost:8888/audio/sfx/maoudamashii_se_onepoint26.mp3",
 15 |         "https://localhost:8888/audio/sfx/maoudamashii_se_onepoint26.mp3",
 16 |       ),
 17 |     ).toBe(true);
 18 |     expect(
 19 |       isSamePath(
 20 |         "/audio/sfx/maoudamashii_se_onepoint26.mp3",
 21 |         "audio/sfx/maoudamashii_se_onepoint26.mp3",
 22 |       ),
 23 |     ).toBe(true);
 24 |   });
 25 |   it("should return false if the paths are different", () => {
 26 |     expect(
 27 |       isSamePath(
 28 |         "http://localhost:8888/audio/sfx/maoudamashii_se_onepoint26.mp3",
 29 |         "/audio/sfx/maoudamashii_se_onepoint27.mp3",
 30 |       ),
 31 |     ).toBe(false);
 32 |   });
 33 | });
 34 | 
 35 | describe("#sameOrigin", () => {
 36 |   describe("without args", () => {
 37 |     it("should return the correct path", () => {
 38 |       const callback = sameOrigin(() => "/timers");
 39 |       expect(callback()).toBe("/timers");
 40 |     });
 41 | 
 42 |     it("should return the correct path", () => {
 43 |       const callback = sameOrigin(() => "/timers");
 44 |       expect(callback({ url: false })).toBe("/timers");
 45 |     });
 46 | 
 47 |     it("should return the correct path", () => {
 48 |       const callback = sameOrigin(() => "/timers");
 49 |       expect(callback({ url: true })).toBe("https://localhost:8888/timers");
 50 |     });
 51 |   });
 52 | 
 53 |   describe("with one arg", () => {
 54 |     it("should return the correct path", () => {
 55 |       const callback = sameOrigin((id: string) => `/timers/${id}`);
 56 |       expect(callback("123")).toBe("/timers/123");
 57 |     });
 58 | 
 59 |     it("should return the correct path", () => {
 60 |       const callback = sameOrigin((id: string) => `/timers/${id}`);
 61 |       expect(callback("123", { url: false })).toBe("/timers/123");
 62 |     });
 63 | 
 64 |     it("should return the correct path", () => {
 65 |       const callback = sameOrigin((id: string) => `/timers/${id}`);
 66 |       expect(callback("123", { url: true })).toBe(
 67 |         "https://localhost:8888/timers/123",
 68 |       );
 69 |     });
 70 |   });
 71 | 
 72 |   describe("with object arg", () => {
 73 |     it("should return the correct path", () => {
 74 |       const callback = sameOrigin(
 75 |         ({ id1, id2 }: { id1: string; id2: string }) =>
 76 |           `/hoge/${id1}/fuga/${id2}`,
 77 |       );
 78 |       expect(callback({ id1: "123", id2: "456" })).toBe("/hoge/123/fuga/456");
 79 |     });
 80 |     it("should return the correct path", () => {
 81 |       const callback = sameOrigin(
 82 |         ({ id1, id2 }: { id1: string; id2: string }) =>
 83 |           `/hoge/${id1}/fuga/${id2}`,
 84 |       );
 85 |       expect(callback({ id1: "123", id2: "456" }, { url: false })).toBe(
 86 |         "/hoge/123/fuga/456",
 87 |       );
 88 |     });
 89 |     it("should return the correct path", () => {
 90 |       const callback = sameOrigin(
 91 |         ({ id1, id2 }: { id1: string; id2: string }) =>
 92 |           `/hoge/${id1}/fuga/${id2}`,
 93 |       );
 94 |       expect(callback({ id1: "123", id2: "456" }, { url: true })).toBe(
 95 |         "https://localhost:8888/hoge/123/fuga/456",
 96 |       );
 97 |     });
 98 |   });
 99 | 
100 |   describe("with array arg", () => {
101 |     it("should return the correct path", () => {
102 |       const callback = sameOrigin(
103 |         ([id1, id2]: [string, string]) => `/hoge/${id1}/fuga/${id2}`,
104 |       );
105 |       expect(callback(["123", "456"])).toBe("/hoge/123/fuga/456");
106 |     });
107 |     it("should return the correct path", () => {
108 |       const callback = sameOrigin(
109 |         ([id1, id2]: [string, string]) => `/hoge/${id1}/fuga/${id2}`,
110 |       );
111 |       expect(callback(["123", "456"], { url: false })).toBe(
112 |         "/hoge/123/fuga/456",
113 |       );
114 |     });
115 |     it("should return the correct path", () => {
116 |       const callback = sameOrigin(
117 |         ([id1, id2]: [string, string]) => `/hoge/${id1}/fuga/${id2}`,
118 |       );
119 |       expect(callback(["123", "456"], { url: true })).toBe(
120 |         "https://localhost:8888/hoge/123/fuga/456",
121 |       );
122 |     });
123 |   });
124 | });
125 | 


--------------------------------------------------------------------------------
/src/lib/url.ts:
--------------------------------------------------------------------------------
 1 | import type { ChannelId } from "@/server/shared-times";
 2 | 
 3 | // Compare URLs in the following formats:
 4 | // "http://localhost:8888/audio/sfx/maoudamashii_se_onepoint26.mp3"
 5 | // "https://localhost:8888/audio/sfx/maoudamashii_se_onepoint26.mp3"
 6 | // "/audio/sfx/maoudamashii_se_onepoint26.mp3"
 7 | // "audio/sfx/maoudamashii_se_onepoint26.mp3"
 8 | export const isSamePath = (
 9 |   path1: string | null | undefined,
10 |   path2: string | null | undefined,
11 | ) => {
12 |   if (!path1 || !path2) return false;
13 |   return normalizePath(path1) === normalizePath(path2);
14 | };
15 | 
16 | const normalizePath = (path: string) => {
17 |   try {
18 |     const url = new URL(path, process.env.NEXT_PUBLIC_APP_URL);
19 |     return url.pathname.replace(/\/+$/, ""); // Remove trailing slashes
20 |   } catch {
21 |     const normalizedPath = path.startsWith("/") ? path : `/${path}`;
22 |     return normalizedPath.replace(/\/+$/, "");
23 |   }
24 | };
25 | 
26 | export const sameOrigin = <T>(callback: (args: T) => string) => {
27 |   return (_args?: T, _options?: { url: boolean }) => {
28 |     const { args, options } =
29 |       _args !== null && typeof _args === "object" && "url" in _args
30 |         ? { args: undefined, options: _args }
31 |         : { args: _args, options: _options };
32 |     const path =
33 |       args !== undefined ? callback(args) : callback(undefined as unknown as T);
34 |     const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
35 |     const url = new URL(path, baseUrl);
36 | 
37 |     if (options?.url) {
38 |       return url.toString();
39 |     }
40 |     return url.pathname;
41 |   };
42 | };
43 | 
44 | export const url = {
45 |   sharedTimers: {
46 |     index: sameOrigin(() => "/timers"),
47 |     show: sameOrigin((id: ChannelId) => `/timers/${id}`),
48 |   },
49 | };
50 | 


--------------------------------------------------------------------------------
/src/lib/utils.ts:
--------------------------------------------------------------------------------
 1 | import { type ClassValue, clsx } from "clsx";
 2 | import { twMerge } from "tailwind-merge";
 3 | 
 4 | export function cn(...inputs: ClassValue[]) {
 5 |   return twMerge(clsx(inputs));
 6 | }
 7 | 
 8 | export const sequenceNumbers = (length: number, offset = 1) =>
 9 |   Array.from({ length }, (_, i) => i * offset);
10 | 
11 | export function randomID() {
12 |   const id = crypto.randomUUID?.() ?? manualUUIDv4();
13 |   return id;
14 | }
15 | 
16 | const manualUUIDv4 = () => {
17 |   const bytes = new Uint8Array(16);
18 |   crypto.getRandomValues(bytes);
19 |   bytes[6] = (bytes[6] & 0x0f) | 0x40;
20 |   bytes[8] = (bytes[8] & 0x3f) | 0x80;
21 |   const hex = [...bytes].map((b) => b.toString(16).padStart(2, "0")).join("");
22 |   return [
23 |     hex.substring(0, 8),
24 |     hex.substring(8, 12),
25 |     hex.substring(12, 16),
26 |     hex.substring(16, 20),
27 |     hex.substring(20),
28 |   ].join("-");
29 | };
30 | 


--------------------------------------------------------------------------------
/src/schema/timer-event.ts:
--------------------------------------------------------------------------------
 1 | import { CurrentTimerSchema } from "@/components/timer/timer";
 2 | import { z } from "zod";
 3 | 
 4 | export const TimerActionEventSchema = z.object({
 5 |   event: z.enum(["start", "pause", "resume", "stop", "reset"]),
 6 | });
 7 | export type TimerActionEventType = z.infer<typeof TimerActionEventSchema>;
 8 | 
 9 | export const TimerMutationEventSchema = z.object({
10 |   event: z.literal("updateTime"),
11 |   time: z.object({
12 |     minutes: z.number(),
13 |     seconds: z.number(),
14 |   }),
15 | });
16 | 
17 | export const TimerCurrentTimerEventSchema = z.object({
18 |   event: z.literal("currentTimer"),
19 |   currentTimer: CurrentTimerSchema,
20 | });
21 | 
22 | export const TimerEventMessageSchema = z.union([
23 |   TimerActionEventSchema,
24 |   TimerMutationEventSchema,
25 |   TimerCurrentTimerEventSchema,
26 | ]);
27 | export type TimerEventMessageType = z.infer<typeof TimerEventMessageSchema>;
28 | 


--------------------------------------------------------------------------------
/src/server/client.ts:
--------------------------------------------------------------------------------
 1 | import { hc } from "hono/client";
 2 | import type { AppType } from ".";
 3 | 
 4 | const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:8888";
 5 | const apiUrl = `${appUrl}/api`;
 6 | 
 7 | export const cacheableClient = hc<AppType>(apiUrl);
 8 | export const client = hc<AppType>(apiUrl, {
 9 |   init: { cache: "no-cache" },
10 | });
11 | 


--------------------------------------------------------------------------------
/src/server/index.ts:
--------------------------------------------------------------------------------
 1 | import { zValidator } from "@hono/zod-validator";
 2 | import { Hono } from "hono";
 3 | 
 4 | import { CurrentTimerSchema } from "@/components/timer/timer";
 5 | import { url } from "@/lib/url";
 6 | import { sharedTimer } from "./shared-times";
 7 | 
 8 | const app = new Hono();
 9 | 
10 | const routes = app.post(
11 |   "/timers",
12 |   zValidator("json", CurrentTimerSchema),
13 |   (c) => {
14 |     const params = c.req.valid("json");
15 |     const timer = sharedTimer.createTimer(params);
16 |     return c.redirect(url.sharedTimers.show(timer.id));
17 |   },
18 | );
19 | 
20 | export const server = app;
21 | export type AppType = typeof routes;
22 | 


--------------------------------------------------------------------------------
/src/server/shared-times/index.ts:
--------------------------------------------------------------------------------
  1 | import {
  2 |   type CurrentTimerType,
  3 |   initReadyTimer,
  4 |   pauseTimer,
  5 |   resetTimer,
  6 |   resumeTimer,
  7 |   startTimer,
  8 |   stopTimer,
  9 |   updateTimer,
 10 | } from "@/components/timer/timer";
 11 | import {
 12 |   TimerEventMessageSchema,
 13 |   type TimerEventMessageType,
 14 | } from "@/schema/timer-event";
 15 | 
 16 | import { type ChannelId, SSE } from "./sse";
 17 | export * from "./sse";
 18 | 
 19 | const timers = new Map<ChannelId, CurrentTimerType>();
 20 | 
 21 | const initTimer = (_id?: ChannelId) => {
 22 |   if (_id) {
 23 |     const storedTimer = timers.get(_id);
 24 |     if (storedTimer) return storedTimer;
 25 |   }
 26 |   const timer = {
 27 |     ...initReadyTimer(),
 28 |     ...(_id ? { id: _id } : {}),
 29 |   };
 30 |   timers.set(timer.id, timer);
 31 |   return timer;
 32 | };
 33 | 
 34 | const createTimer = (data: CurrentTimerType) => {
 35 |   const timer = {
 36 |     ...initReadyTimer(),
 37 |     ...data,
 38 |   };
 39 |   timers.set(timer.id, timer);
 40 |   return timer;
 41 | };
 42 | 
 43 | const updateCurrentTimer = (id: ChannelId, data: TimerEventMessageType) => {
 44 |   const currentTimer = initTimer(id);
 45 |   let newTimer: CurrentTimerType;
 46 |   switch (data.event) {
 47 |     case "start":
 48 |       newTimer = startTimer(currentTimer);
 49 |       break;
 50 |     case "pause":
 51 |       newTimer = pauseTimer(currentTimer);
 52 |       break;
 53 |     case "resume":
 54 |       newTimer = resumeTimer(currentTimer);
 55 |       break;
 56 |     case "stop":
 57 |       newTimer = stopTimer(currentTimer);
 58 |       break;
 59 |     case "reset":
 60 |       newTimer = resetTimer(currentTimer);
 61 |       break;
 62 |     case "updateTime":
 63 |       if (currentTimer.status !== "ready") return;
 64 |       newTimer = updateTimer(currentTimer, data.time);
 65 |       break;
 66 |     case "currentTimer":
 67 |       newTimer = {
 68 |         ...currentTimer,
 69 |         ...data.currentTimer,
 70 |       };
 71 |       break;
 72 |     default:
 73 |       return;
 74 |   }
 75 |   if (!newTimer) return;
 76 |   timers.set(id, newTimer);
 77 |   return newTimer;
 78 | };
 79 | 
 80 | const parseTimerEvent = (data: unknown) => {
 81 |   const result = TimerEventMessageSchema.safeParse(data);
 82 |   if (!result.success) {
 83 |     console.error("Invalid timer event", result.error);
 84 |   }
 85 |   return result;
 86 | };
 87 | 
 88 | const encoder = new TextEncoder();
 89 | const encodeTimerEventMessage = (data: TimerEventMessageType) => {
 90 |   return encoder.encode(`data: ${JSON.stringify(data)}\n\n`);
 91 | };
 92 | 
 93 | const sharedTimer = {
 94 |   sse: new SSE({
 95 |     onAddClient: ({ channelId, controller }) => {
 96 |       const timer = initTimer(channelId);
 97 |       controller.enqueue(
 98 |         encodeTimerEventMessage({
 99 |           event: "currentTimer",
100 |           currentTimer: timer,
101 |         }),
102 |       );
103 |     },
104 |     onRemoveClient: ({ channelId, channel }) => {
105 |       if (0 < channel.size) return;
106 |       timers.delete(channelId);
107 |     },
108 |   }),
109 |   createTimer,
110 |   updateCurrentTimer,
111 |   parseTimerEvent,
112 | };
113 | 
114 | export { sharedTimer };
115 | 


--------------------------------------------------------------------------------
/src/server/shared-times/sse.ts:
--------------------------------------------------------------------------------
  1 | export type ChannelId = string;
  2 | export type Client = {
  3 |   id: ClientId;
  4 |   controller: Controller;
  5 |   connectedAt: Date;
  6 | };
  7 | export type ClientId = string;
  8 | export type Controller = ReadableStreamDefaultController<Uint8Array>;
  9 | 
 10 | type AddClientCallback = (props: {
 11 |   channelId: ChannelId;
 12 |   controller: Controller;
 13 | }) => void;
 14 | 
 15 | type RemoveClientCallback = (props: {
 16 |   channelId: ChannelId;
 17 |   channel: Map<ClientId, Client>;
 18 | }) => void;
 19 | 
 20 | export class SSE {
 21 |   private channels: Map<ChannelId, Map<ClientId, Client>> = new Map();
 22 |   private encoder = new TextEncoder();
 23 | 
 24 |   private onAddClient: AddClientCallback | undefined;
 25 |   private onRemoveClient: RemoveClientCallback | undefined;
 26 | 
 27 |   constructor(params?: {
 28 |     onAddClient?: AddClientCallback;
 29 |     onRemoveClient?: RemoveClientCallback;
 30 |   }) {
 31 |     this.onAddClient = params?.onAddClient;
 32 |     this.onRemoveClient = params?.onRemoveClient;
 33 |   }
 34 | 
 35 |   addClient({
 36 |     channelId,
 37 |     controller,
 38 |     clientId = crypto.randomUUID(),
 39 |   }: {
 40 |     channelId: ChannelId;
 41 |     controller: Controller;
 42 |     clientId?: ClientId;
 43 |   }): ClientId {
 44 |     const channel = this.channels.get(channelId) || new Map();
 45 |     channel.set(clientId, {
 46 |       id: clientId,
 47 |       controller,
 48 |       connectedAt: new Date(),
 49 |     });
 50 |     this.channels.set(channelId, channel);
 51 |     console.log(
 52 |       JSON.stringify(
 53 |         {
 54 |           clients: this.channels.get(channelId)?.size,
 55 |           channelId,
 56 |           channels: this.channels.size,
 57 |         },
 58 |         null,
 59 |         0,
 60 |       ),
 61 |     );
 62 |     this.onAddClient?.({ channelId, controller });
 63 |     return clientId;
 64 |   }
 65 | 
 66 |   removeClient({
 67 |     channelId,
 68 |     clientId,
 69 |   }: { channelId: ChannelId; clientId: ClientId }) {
 70 |     const channel = this.channels.get(channelId);
 71 |     const client = channel?.get(clientId);
 72 |     if (!channel || !client) return;
 73 |     try {
 74 |       client.controller.close();
 75 |     } catch (error) {
 76 |       if (
 77 |         error instanceof Error &&
 78 |         error.message.includes("is already closed")
 79 |       ) {
 80 |         console.log(`Client already closed: channelId=${channelId}`);
 81 |       } else {
 82 |         console.error("Error closing controller", error);
 83 |       }
 84 |     }
 85 |     channel.delete(clientId);
 86 |     if (channel.size === 0) {
 87 |       this.channels.delete(channelId);
 88 |     }
 89 |     this.onRemoveClient?.({ channelId, channel });
 90 |   }
 91 | 
 92 |   broadcast = async (channelId: ChannelId, data: Record<string, unknown>) => {
 93 |     const clients = this.channels.get(channelId);
 94 |     if (!clients) return;
 95 |     const encodedData = this.encode(data);
 96 |     await Promise.all(
 97 |       Array.from(clients.values()).map((client) => {
 98 |         try {
 99 |           client.controller.enqueue(encodedData);
100 |         } catch (error) {
101 |           console.error("Error broadcasting event", error);
102 |           this.removeClient({ channelId, clientId: client.id });
103 |         }
104 |       }),
105 |     );
106 |   };
107 | 
108 |   private encode = (data: Record<string, unknown>) => {
109 |     return this.encoder.encode(`data: ${JSON.stringify(data)}\n\n`);
110 |   };
111 | }
112 | 


--------------------------------------------------------------------------------
/tailwind.config.ts:
--------------------------------------------------------------------------------
 1 | import type { Config } from "tailwindcss";
 2 | 
 3 | const config: Config = {
 4 |   darkMode: ["class"],
 5 |   content: [
 6 |     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
 7 |     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
 8 |     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
 9 |   ],
10 |   theme: {
11 |     extend: {
12 |       colors: {
13 |         background: "hsl(var(--background))",
14 |         foreground: "hsl(var(--foreground))",
15 |         card: {
16 |           DEFAULT: "hsl(var(--card))",
17 |           foreground: "hsl(var(--card-foreground))",
18 |         },
19 |         popover: {
20 |           DEFAULT: "hsl(var(--popover))",
21 |           foreground: "hsl(var(--popover-foreground))",
22 |         },
23 |         primary: {
24 |           DEFAULT: "hsl(var(--primary))",
25 |           foreground: "hsl(var(--primary-foreground))",
26 |         },
27 |         secondary: {
28 |           DEFAULT: "hsl(var(--secondary))",
29 |           foreground: "hsl(var(--secondary-foreground))",
30 |         },
31 |         muted: {
32 |           DEFAULT: "hsl(var(--muted))",
33 |           foreground: "hsl(var(--muted-foreground))",
34 |         },
35 |         accent: {
36 |           DEFAULT: "hsl(var(--accent))",
37 |           foreground: "hsl(var(--accent-foreground))",
38 |         },
39 |         destructive: {
40 |           DEFAULT: "hsl(var(--destructive))",
41 |           foreground: "hsl(var(--destructive-foreground))",
42 |         },
43 |         border: "hsl(var(--border))",
44 |         input: "hsl(var(--input))",
45 |         ring: "hsl(var(--ring))",
46 |         chart: {
47 |           "1": "hsl(var(--chart-1))",
48 |           "2": "hsl(var(--chart-2))",
49 |           "3": "hsl(var(--chart-3))",
50 |           "4": "hsl(var(--chart-4))",
51 |           "5": "hsl(var(--chart-5))",
52 |         },
53 |       },
54 |       borderRadius: {
55 |         lg: "var(--radius)",
56 |         md: "calc(var(--radius) - 2px)",
57 |         sm: "calc(var(--radius) - 4px)",
58 |         full: "50%",
59 |       },
60 |     },
61 |   },
62 |   plugins: [require("tailwindcss-animate")],
63 |   future: {
64 |     hoverOnlyWhenSupported: true,
65 |   },
66 | };
67 | export default config;
68 | 


--------------------------------------------------------------------------------
/tsconfig.json:
--------------------------------------------------------------------------------
 1 | {
 2 |   "compilerOptions": {
 3 |     "target": "ES2017",
 4 |     "lib": ["dom", "dom.iterable", "esnext"],
 5 |     "allowJs": true,
 6 |     "skipLibCheck": true,
 7 |     "strict": true,
 8 |     "noEmit": true,
 9 |     "esModuleInterop": true,
10 |     "module": "esnext",
11 |     "moduleResolution": "bundler",
12 |     "resolveJsonModule": true,
13 |     "isolatedModules": true,
14 |     "jsx": "preserve",
15 |     "incremental": true,
16 |     "plugins": [
17 |       {
18 |         "name": "next"
19 |       }
20 |     ],
21 |     "paths": {
22 |       "@/*": ["./src/*"]
23 |     }
24 |   },
25 |   "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
26 |   "exclude": ["node_modules"]
27 | }
28 | 


--------------------------------------------------------------------------------
/typescript-graph.md:
--------------------------------------------------------------------------------
  1 | # TypeScript Graph
  2 | 
  3 | ```bash
  4 | tsg 
  5 | ```
  6 | 
  7 | ```mermaid
  8 | flowchart
  9 |     subgraph node//modules["node_modules"]
 10 |         node//modules/next/index.d.ts["next"]
 11 |         node//modules/tailwindcss/types/index.d.ts["tailwindcss"]
 12 |         node//modules/tailwindcss//animate/index.d.ts["tailwindcss-animate"]
 13 |         node//modules/next/dist/compiled///next/font/dist/types.d.ts["next"]
 14 |         node//modules/next/font/google/index.d.ts["next"]
 15 |         node//modules/clsx/clsx.d.mts["clsx"]
 16 |         node//modules/tailwind//merge/dist/types.d.ts["tailwind-merge"]
 17 |         node//modules/zod/index.d.ts["zod"]
 18 |         node//modules///hono/zod//validator/dist/esm/index.d.ts["@hono/zod-validator"]
 19 |         node//modules/hono/dist/types/index.d.ts["hono"]
 20 |         node//modules/hono/dist/types/adapter/vercel/index.d.ts["hono"]
 21 |         node//modules///types/react/index.d.ts["@types/react"]
 22 |         node//modules/next/headers.d.ts["next"]
 23 |         node//modules/next//view//transitions/dist/index.d.ts["next-view-transitions"]
 24 |         node//modules/hono/dist/types/client/index.d.ts["hono"]
 25 |         node//modules///radix//ui/react//slot/dist/index.d.mts["@radix-ui/react-slot"]
 26 |         node//modules/class_//variance//authority/dist/index.d.ts["class-variance-authority"]
 27 |         node//modules/next/link.d.ts["next"]
 28 |         node//modules/lucide//react/dist/lucide//react.d.ts["lucide-react"]
 29 |         node//modules///radix//ui/react//popover/dist/index.d.mts["@radix-ui/react-popover"]
 30 |         node//modules///radix//ui/react//icons/dist/index.d.ts["@radix-ui/react-icons"]
 31 |         node//modules///radix//ui/react//select/dist/index.d.mts["@radix-ui/react-select"]
 32 |         node//modules///radix//ui/react//slider/dist/index.d.mts["@radix-ui/react-slider"]
 33 |         node//modules///radix//ui/react//toggle/dist/index.d.mts["@radix-ui/react-toggle"]
 34 |         node//modules/next/navigation.d.ts["next"]
 35 |         node//modules///radix//ui/react//collapsible/dist/index.d.mts["@radix-ui/react-collapsible"]
 36 |         node//modules///radix//ui/react//scroll//area/dist/index.d.mts["@radix-ui/react-scroll-area"]
 37 |     end
 38 |     subgraph src["src"]
 39 |         subgraph src/components["/components"]
 40 |             subgraph src/components/timer["/timer"]
 41 |                 src/components/timer/settings.ts["settings.ts"]
 42 |                 src/components/timer/timer.ts["timer.ts"]
 43 |                 src/components/timer/local//storage.ts["local-storage.ts"]
 44 |                 src/components/timer/timer//provider.tsx["timer-provider.tsx"]
 45 |                 src/components/timer/use//timer.ts["use-timer.ts"]
 46 |                 src/components/timer/timer.test.ts["timer.test.ts"]
 47 |                 src/components/timer/number//wheel.tsx["number-wheel.tsx"]
 48 |                 src/components/timer/timer//controller.tsx["timer-controller.tsx"]
 49 |                 src/components/timer/index.tsx["index.tsx"]
 50 |                 src/components/timer/timer//header.tsx["timer-header.tsx"]
 51 |                 subgraph src/components/timer/timer//controller//settings["/timer-controller-settings"]
 52 |                     src/components/timer/timer//controller//settings/finish//sound//selector.tsx["finish-sound-selector.tsx"]
 53 |                     src/components/timer/timer//controller//settings/finish//sound//volume//slider.tsx["finish-sound-volume-slider.tsx"]
 54 |                     src/components/timer/timer//controller//settings/font//selector.tsx["font-selector.tsx"]
 55 |                     src/components/timer/timer//controller//settings/horizontal//layout//toggle.tsx["horizontal-layout-toggle.tsx"]
 56 |                     src/components/timer/timer//controller//settings/index.tsx["index.tsx"]
 57 |                 end
 58 |             end
 59 |             subgraph src/components/animated//link["/animated-link"]
 60 |                 src/components/animated//link/use//animated//router.ts["use-animated-router.ts"]
 61 |                 src/components/animated//link/view//transition//provider.tsx["view-transition-provider.tsx"]
 62 |                 src/components/animated//link/index.tsx["index.tsx"]
 63 |             end
 64 |             subgraph src/components/icons["/icons"]
 65 |                 src/components/icons/github//icon.tsx["github-icon.tsx"]
 66 |                 src/components/icons/x//icon.tsx["x-icon.tsx"]
 67 |             end
 68 |             subgraph src/components/ui["/ui"]
 69 |                 src/components/ui/button.tsx["button.tsx"]
 70 |                 src/components/ui/popover.tsx["popover.tsx"]
 71 |                 src/components/ui/select.tsx["select.tsx"]
 72 |                 src/components/ui/slider.tsx["slider.tsx"]
 73 |                 src/components/ui/toggle.tsx["toggle.tsx"]
 74 |                 src/components/ui/collapsible.tsx["collapsible.tsx"]
 75 |                 src/components/ui/scroll//area.tsx["scroll-area.tsx"]
 76 |             end
 77 |             subgraph src/components/head//title["/head-title"]
 78 |                 src/components/head//title/provider.tsx["provider.tsx"]
 79 |                 src/components/head//title/index.tsx["index.tsx"]
 80 |             end
 81 |             subgraph src/components/wheel//picker["/wheel-picker"]
 82 |                 src/components/wheel//picker/index.tsx["index.tsx"]
 83 |             end
 84 |         end
 85 |         subgraph src/app["/app"]
 86 |             src/app/fonts.ts["fonts.ts"]
 87 |             src/app/metadata.ts["metadata.ts"]
 88 |             src/app/manifest.ts["manifest.ts"]
 89 |             src/app/footer.tsx["footer.tsx"]
 90 |             src/app/head//title//controller.tsx["head-title-controller.tsx"]
 91 |             src/app/layout.tsx["layout.tsx"]
 92 |             src/app/share//timer.tsx["share-timer.tsx"]
 93 |             src/app/page.tsx["page.tsx"]
 94 |             subgraph src/app/api/////...route////["/api/[[...route]]"]
 95 |                 src/app/api/////...route/////route.ts["route.ts"]
 96 |             end
 97 |             subgraph src/app/timers///id//["/timers/[id]"]
 98 |                 src/app/timers///id///use//shared//timer.ts["use-shared-timer.ts"]
 99 |                 src/app/timers///id///shared//timer.tsx["shared-timer.tsx"]
100 |                 src/app/timers///id///page.tsx["page.tsx"]
101 |                 subgraph src/app/timers///id///events["/events"]
102 |                     src/app/timers///id///events/route.ts["route.ts"]
103 |                 end
104 |             end
105 |         end
106 |         subgraph src/lib["/lib"]
107 |             src/lib/utils.ts["utils.ts"]
108 |             src/lib/url.ts["url.ts"]
109 |             src/lib/url.test.ts["url.test.ts"]
110 |         end
111 |         subgraph src/schema["/schema"]
112 |             src/schema/timer//event.ts["timer-event.ts"]
113 |         end
114 |         subgraph src/server["/server"]
115 |             src/server/index.ts["index.ts"]
116 |             src/server/client.ts["client.ts"]
117 |             subgraph src/server/shared//times["/shared-times"]
118 |                 src/server/shared//times/sse.ts["sse.ts"]
119 |                 src/server/shared//times/index.ts["index.ts"]
120 |             end
121 |         end
122 |     end
123 |     next.config.ts-->node//modules/next/index.d.ts
124 |     tailwind.config.ts-->node//modules/tailwindcss/types/index.d.ts
125 |     tailwind.config.ts-->node//modules/tailwindcss//animate/index.d.ts
126 |     src/app/fonts.ts-->src/components/timer/settings.ts
127 |     src/app/fonts.ts-->node//modules/next/dist/compiled///next/font/dist/types.d.ts
128 |     src/app/fonts.ts-->node//modules/next/font/google/index.d.ts
129 |     src/app/metadata.ts-->node//modules/next/index.d.ts
130 |     src/app/manifest.ts-->node//modules/next/index.d.ts
131 |     src/app/manifest.ts-->src/app/metadata.ts
132 |     src/lib/utils.ts-->node//modules/clsx/clsx.d.mts
133 |     src/lib/utils.ts-->node//modules/tailwind//merge/dist/types.d.ts
134 |     src/components/timer/timer.ts-->src/lib/utils.ts
135 |     src/components/timer/timer.ts-->node//modules/zod/index.d.ts
136 |     src/schema/timer//event.ts-->src/components/timer/timer.ts
137 |     src/schema/timer//event.ts-->node//modules/zod/index.d.ts
138 |     src/server/shared//times/index.ts-->src/components/timer/timer.ts
139 |     src/server/shared//times/index.ts-->src/schema/timer//event.ts
140 |     src/server/shared//times/index.ts-->src/server/shared//times/sse.ts
141 |     src/lib/url.ts-->src/server/shared//times/index.ts
142 |     src/server/index.ts-->node//modules///hono/zod//validator/dist/esm/index.d.ts
143 |     src/server/index.ts-->node//modules/hono/dist/types/index.d.ts
144 |     src/server/index.ts-->src/components/timer/timer.ts
145 |     src/server/index.ts-->src/lib/url.ts
146 |     src/server/index.ts-->src/server/shared//times/index.ts
147 |     src/app/api/////...route/////route.ts-->src/server/index.ts
148 |     src/app/api/////...route/////route.ts-->node//modules/hono/dist/types/index.d.ts
149 |     src/app/api/////...route/////route.ts-->node//modules/hono/dist/types/adapter/vercel/index.d.ts
150 |     src/components/timer/local//storage.ts-->src/components/timer/settings.ts
151 |     src/components/timer/local//storage.ts-->src/components/timer/timer.ts
152 |     src/components/timer/timer//provider.tsx-->node//modules///types/react/index.d.ts
153 |     src/components/timer/timer//provider.tsx-->src/components/timer/local//storage.ts
154 |     src/components/timer/timer//provider.tsx-->src/components/timer/settings.ts
155 |     src/components/timer/timer//provider.tsx-->src/components/timer/timer.ts
156 |     src/components/timer/use//timer.ts-->src/lib/url.ts
157 |     src/components/timer/use//timer.ts-->node//modules///types/react/index.d.ts
158 |     src/components/timer/use//timer.ts-->src/components/timer/local//storage.ts
159 |     src/components/timer/use//timer.ts-->src/components/timer/settings.ts
160 |     src/components/timer/use//timer.ts-->src/components/timer/timer.ts
161 |     src/components/timer/use//timer.ts-->src/components/timer/timer//provider.tsx
162 |     src/app/timers///id///use//shared//timer.ts-->src/components/timer/use//timer.ts
163 |     src/app/timers///id///use//shared//timer.ts-->src/schema/timer//event.ts
164 |     src/app/timers///id///use//shared//timer.ts-->node//modules///types/react/index.d.ts
165 |     src/app/timers///id///events/route.ts-->src/server/shared//times/index.ts
166 |     src/app/timers///id///events/route.ts-->node//modules/next/headers.d.ts
167 |     src/components/animated//link/use//animated//router.ts-->node//modules/next//view//transitions/dist/index.d.ts
168 |     src/components/timer/timer.test.ts-->src/components/timer/timer.ts
169 |     src/lib/url.test.ts-->src/lib/url.ts
170 |     src/server/client.ts-->node//modules/hono/dist/types/client/index.d.ts
171 |     src/server/client.ts-->src/server/index.ts
172 |     src/components/icons/github//icon.tsx-->src/lib/utils.ts
173 |     src/components/icons/x//icon.tsx-->src/lib/utils.ts
174 |     src/components/ui/button.tsx-->node//modules///radix//ui/react//slot/dist/index.d.mts
175 |     src/components/ui/button.tsx-->node//modules/class_//variance//authority/dist/index.d.ts
176 |     src/components/ui/button.tsx-->node//modules///types/react/index.d.ts
177 |     src/components/ui/button.tsx-->src/lib/utils.ts
178 |     src/app/footer.tsx-->node//modules/next/link.d.ts
179 |     src/app/footer.tsx-->src/components/icons/github//icon.tsx
180 |     src/app/footer.tsx-->src/components/icons/x//icon.tsx
181 |     src/app/footer.tsx-->src/components/ui/button.tsx
182 |     src/app/footer.tsx-->src/app/metadata.ts
183 |     src/components/head//title/provider.tsx-->node//modules///types/react/index.d.ts
184 |     src/components/head//title/index.tsx-->node//modules///types/react/index.d.ts
185 |     src/components/head//title/index.tsx-->src/components/head//title/provider.tsx
186 |     src/app/head//title//controller.tsx-->src/components/head//title/index.tsx
187 |     src/app/head//title//controller.tsx-->src/components/timer/use//timer.ts
188 |     src/app/head//title//controller.tsx-->node//modules///types/react/index.d.ts
189 |     src/components/animated//link/view//transition//provider.tsx-->node//modules/next//view//transitions/dist/index.d.ts
190 |     src/app/layout.tsx-->node//modules/next/font/google/index.d.ts
191 |     src/app/layout.tsx-->src/components/animated//link/view//transition//provider.tsx
192 |     src/app/layout.tsx-->src/components/head//title/index.tsx
193 |     src/app/layout.tsx-->src/lib/utils.ts
194 |     src/app/layout.tsx-->src/app/footer.tsx
195 |     src/app/layout.tsx-->src/app/metadata.ts
196 |     src/components/wheel//picker/index.tsx-->src/lib/utils.ts
197 |     src/components/wheel//picker/index.tsx-->node//modules///types/react/index.d.ts
198 |     src/components/timer/number//wheel.tsx-->node//modules///types/react/index.d.ts
199 |     src/components/timer/number//wheel.tsx-->src/lib/utils.ts
200 |     src/components/timer/timer//controller.tsx-->src/lib/utils.ts
201 |     src/components/timer/timer//controller.tsx-->node//modules/lucide//react/dist/lucide//react.d.ts
202 |     src/components/timer/timer//controller.tsx-->src/components/ui/button.tsx
203 |     src/components/timer/timer//controller.tsx-->src/components/timer/use//timer.ts
204 |     src/components/timer/index.tsx-->src/app/fonts.ts
205 |     src/components/timer/index.tsx-->src/lib/utils.ts
206 |     src/components/timer/index.tsx-->node//modules/lucide//react/dist/lucide//react.d.ts
207 |     src/components/timer/index.tsx-->src/components/ui/button.tsx
208 |     src/components/timer/index.tsx-->src/components/wheel//picker/index.tsx
209 |     src/components/timer/index.tsx-->src/components/timer/number//wheel.tsx
210 |     src/components/timer/index.tsx-->src/components/timer/timer//controller.tsx
211 |     src/components/timer/index.tsx-->src/components/timer/use//timer.ts
212 |     src/components/ui/popover.tsx-->node//modules///radix//ui/react//popover/dist/index.d.mts
213 |     src/components/ui/popover.tsx-->node//modules///types/react/index.d.ts
214 |     src/components/ui/popover.tsx-->src/lib/utils.ts
215 |     src/components/ui/select.tsx-->src/lib/utils.ts
216 |     src/components/ui/select.tsx-->node//modules///radix//ui/react//icons/dist/index.d.ts
217 |     src/components/ui/select.tsx-->node//modules///radix//ui/react//select/dist/index.d.mts
218 |     src/components/ui/select.tsx-->node//modules///types/react/index.d.ts
219 |     src/components/timer/timer//controller//settings/finish//sound//selector.tsx-->src/components/ui/button.tsx
220 |     src/components/timer/timer//controller//settings/finish//sound//selector.tsx-->src/components/ui/select.tsx
221 |     src/components/timer/timer//controller//settings/finish//sound//selector.tsx-->node//modules/lucide//react/dist/lucide//react.d.ts
222 |     src/components/timer/timer//controller//settings/finish//sound//selector.tsx-->src/components/timer/settings.ts
223 |     src/components/timer/timer//controller//settings/finish//sound//selector.tsx-->src/components/timer/use//timer.ts
224 |     src/components/ui/slider.tsx-->node//modules///radix//ui/react//slider/dist/index.d.mts
225 |     src/components/ui/slider.tsx-->node//modules///types/react/index.d.ts
226 |     src/components/ui/slider.tsx-->src/lib/utils.ts
227 |     src/components/timer/timer//controller//settings/finish//sound//volume//slider.tsx-->src/components/ui/slider.tsx
228 |     src/components/timer/timer//controller//settings/finish//sound//volume//slider.tsx-->src/components/timer/use//timer.ts
229 |     src/components/timer/timer//controller//settings/font//selector.tsx-->src/app/fonts.ts
230 |     src/components/timer/timer//controller//settings/font//selector.tsx-->src/components/ui/select.tsx
231 |     src/components/timer/timer//controller//settings/font//selector.tsx-->src/lib/utils.ts
232 |     src/components/timer/timer//controller//settings/font//selector.tsx-->src/components/timer/settings.ts
233 |     src/components/timer/timer//controller//settings/font//selector.tsx-->src/components/timer/use//timer.ts
234 |     src/components/ui/toggle.tsx-->node//modules///radix//ui/react//toggle/dist/index.d.mts
235 |     src/components/ui/toggle.tsx-->node//modules/class_//variance//authority/dist/index.d.ts
236 |     src/components/ui/toggle.tsx-->node//modules///types/react/index.d.ts
237 |     src/components/ui/toggle.tsx-->src/lib/utils.ts
238 |     src/components/timer/timer//controller//settings/horizontal//layout//toggle.tsx-->src/components/ui/toggle.tsx
239 |     src/components/timer/timer//controller//settings/horizontal//layout//toggle.tsx-->node//modules/lucide//react/dist/lucide//react.d.ts
240 |     src/components/timer/timer//controller//settings/horizontal//layout//toggle.tsx-->src/components/timer/use//timer.ts
241 |     src/components/timer/timer//controller//settings/index.tsx-->src/app/fonts.ts
242 |     src/components/timer/timer//controller//settings/index.tsx-->src/components/ui/button.tsx
243 |     src/components/timer/timer//controller//settings/index.tsx-->src/components/ui/popover.tsx
244 |     src/components/timer/timer//controller//settings/index.tsx-->src/lib/utils.ts
245 |     src/components/timer/timer//controller//settings/index.tsx-->node//modules/lucide//react/dist/lucide//react.d.ts
246 |     src/components/timer/timer//controller//settings/index.tsx-->node//modules///types/react/index.d.ts
247 |     src/components/timer/timer//controller//settings/index.tsx-->src/components/timer/use//timer.ts
248 |     src/components/timer/timer//controller//settings/index.tsx-->src/components/timer/timer//controller//settings/finish//sound//selector.tsx
249 |     src/components/timer/timer//controller//settings/index.tsx-->src/components/timer/timer//controller//settings/finish//sound//volume//slider.tsx
250 |     src/components/timer/timer//controller//settings/index.tsx-->src/components/timer/timer//controller//settings/font//selector.tsx
251 |     src/components/timer/timer//controller//settings/index.tsx-->src/components/timer/timer//controller//settings/horizontal//layout//toggle.tsx
252 |     src/components/timer/timer//header.tsx-->src/lib/utils.ts
253 |     src/components/timer/timer//header.tsx-->node//modules/lucide//react/dist/lucide//react.d.ts
254 |     src/components/timer/timer//header.tsx-->node//modules/next/link.d.ts
255 |     src/components/timer/timer//header.tsx-->node//modules///types/react/index.d.ts
256 |     src/components/timer/timer//header.tsx-->src/components/ui/button.tsx
257 |     src/components/timer/timer//header.tsx-->src/components/timer/timer//controller//settings/index.tsx
258 |     src/components/timer/timer//header.tsx-->src/components/timer/use//timer.ts
259 |     src/app/share//timer.tsx-->src/components/timer/use//timer.ts
260 |     src/app/share//timer.tsx-->src/components/ui/button.tsx
261 |     src/app/share//timer.tsx-->src/server/client.ts
262 |     src/app/share//timer.tsx-->node//modules/lucide//react/dist/lucide//react.d.ts
263 |     src/app/share//timer.tsx-->node//modules/next/navigation.d.ts
264 |     src/app/page.tsx-->src/components/timer/index.tsx
265 |     src/app/page.tsx-->src/components/timer/timer//header.tsx
266 |     src/app/page.tsx-->src/components/timer/timer//provider.tsx
267 |     src/app/page.tsx-->src/app/head//title//controller.tsx
268 |     src/app/page.tsx-->src/app/share//timer.tsx
269 |     src/app/timers///id///shared//timer.tsx-->src/components/timer/index.tsx
270 |     src/app/timers///id///shared//timer.tsx-->src/app/timers///id///use//shared//timer.ts
271 |     src/app/timers///id///page.tsx-->src/app/head//title//controller.tsx
272 |     src/app/timers///id///page.tsx-->src/components/timer/timer//header.tsx
273 |     src/app/timers///id///page.tsx-->src/components/timer/timer//provider.tsx
274 |     src/app/timers///id///page.tsx-->src/app/timers///id///shared//timer.tsx
275 |     src/components/animated//link/index.tsx-->node//modules/next//view//transitions/dist/index.d.ts
276 |     src/components/ui/collapsible.tsx-->node//modules///radix//ui/react//collapsible/dist/index.d.mts
277 |     src/components/ui/scroll//area.tsx-->node//modules///radix//ui/react//scroll//area/dist/index.d.mts
278 |     src/components/ui/scroll//area.tsx-->node//modules///types/react/index.d.ts
279 |     src/components/ui/scroll//area.tsx-->src/lib/utils.ts
280 | ```
281 | 


--------------------------------------------------------------------------------