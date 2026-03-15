---
title: Getting Started with Next.js 14 App Router
date: 2026-03-05
excerpt: A comprehensive guide to building your first application with Next.js 14's App Router, covering layouts, pages, data fetching, and more.
author: Alex Chen
tags: [Next.js, React, Tutorial]
readTime: 8 min read
---

# Getting Started with Next.js 14 App Router

Next.js 14 introduced the stable App Router, a fundamentally new way to build React applications. Let's explore what makes it special.

## What is the App Router?

The App Router is built on React's latest features, including Server Components, Streaming, and Suspense. It lives in the `app/` directory alongside the traditional `pages/` directory.

## Key Concepts

### Server Components

By default, all components in the App Router are Server Components. They render on the server, which means:

- Smaller JavaScript bundles
- Direct database access
- Better performance
- Improved SEO

```tsx
// This is a Server Component by default
export default async function Page() {
  const data = await fetch('https://api.example.com/data')
  const json = await data.json()
  
  return <div>{json.title}</div>
}
```

### Client Components

When you need interactivity, use the `'use client'` directive:

```tsx
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)
  return <button onClick={() => setCount(c => c + 1)}>{count}</button>
}
```

## File Conventions

- `page.tsx` — The UI for a route
- `layout.tsx` — Shared layout for a segment
- `loading.tsx` — Loading UI
- `error.tsx` — Error boundary
- `not-found.tsx` — 404 page

## Conclusion

The App Router represents the future of Next.js development. Start with Server Components by default, and reach for Client Components only when you need interactivity.
