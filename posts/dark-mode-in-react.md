---
title: Implementing Dark Mode in React with next-themes
date: 2026-02-20
excerpt: A step-by-step guide to adding dark mode to your Next.js app using next-themes, with zero flash on load and smooth transitions.
author: Alex Chen
tags: [React, Dark Mode, Next.js]
readTime: 5 min read
---

# Implementing Dark Mode in React with next-themes

Dark mode has gone from a nice-to-have to an expected feature. Here's how to implement it flawlessly in Next.js.

## Why next-themes?

`next-themes` solves the hardest problems with dark mode:

- **No flash of unstyled content** (FOUC) on page load
- **System preference detection** automatically
- **Persistent user preference** via localStorage
- **SSR compatible** with Next.js

## Setup

### 1. Install

```bash
npm install next-themes
```

### 2. Wrap your app

```tsx
// app/layout.tsx
import { ThemeProvider } from 'next-themes'

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### 3. Create a toggle

```tsx
'use client'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </button>
  )
}
```

## The `suppressHydrationWarning` Trick

This is crucial! Without it, you'll see React hydration warnings because the server doesn't know the user's theme preference.

## Smooth Transitions

Add this to your global CSS for smooth theme switching:

```css
* {
  transition: background-color 0.2s ease, color 0.15s ease;
}
```

## Conclusion

With `next-themes`, dark mode just works. The library handles all the edge cases so you don't have to.
