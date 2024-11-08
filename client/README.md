This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Folder Structure

```bash
app/
├── pages/                         # Page components
│   ├── cart/                      # Cart page components
│   ├── categories/                # Categories page components
│   ├── products/                  # Product detail page components
│   │   └── [slug]/                # Dynamic routing for products
│   └── profile/                   # User profile page components
├── api/                           # API operations
│   ├── httpRequest.interceptor.ts  # Interceptors for HTTP requests
│   └── httpRequest.ts             # Main HTTP request handling
├── assets/                        # Static files (images, icons, etc.)
├── components/                    # Reusable UI components
│   └── button/                    # Button component and related files
│       ├── Button.stories.tsx     # Button component story (for Storybook)
│       ├── button.styles.ts       # Styles for Button component
│       ├── Button.test.tsx        # Tests for Button component
│       ├── Button.tsx             # Main Button component
│       └── button.types.ts        # Types for Button component
├── hooks/                         # Custom hooks (useState, useEffect, etc.)
├── providers/                     # Global providers (e.g., Contexts)
├── queries/                       # API queries (Auth, Cart, etc.)
│   ├── auth/                      # Authentication related queries
│   │   ├── auth.mutation.ts       # Authentication mutations (login, logout, etc.)
│   │   ├── auth.query.ts          # Authentication queries (user info, etc.)
│   │   └── auth.types.ts          # Types for authentication
│   ├── campaigns/                 # Campaign related queries
│   ├── cart/                      # Cart related queries
│   ├── categories/                # Categories related queries
│   ├── products/                  # Products related queries
│   └── users/                     # Users related queries
├── store/                         # State management (e.g., Redux or Zustand)
├── theme/                         # Application theme (colors, styles, etc.)
├── types/                         # TypeScript types for the app
├── utils/                         # Utility functions
└── views/                         # Views (included under Pages)
    ├── address/                   # Address related views
    ├── cart/                      # Cart related views
    ├── categories/                # Categories related views
    ├── contact/                   # Contact related views
    ├── favorites/                 # Favorites related views
    ├── invoice/                   # Invoice related views
    ├── orders/                    # Orders related views
    ├── payment-methods/           # Payment methods related views
    ├── product-detail/            # Product detail views
    └── profile/                   # User profile related views
├── favicon.ico                    # Favicon for the app
├── globals.css                    # Global styles for the app
└── layout.tsx                      # Layout component for the app
└── page.tsx                      # Layout component for the app

```
