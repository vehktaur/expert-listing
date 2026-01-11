## Overview

Expert Listing is a responsive analytics dashboard built with Next.js 16. It showcases a marketplace-style admin experience with sales insights, user/listing summaries, and rich media carousels. All data is mocked in-code for quick exploration and design handoff.

## Core Features

- Sales overview with multi-series bar chart (Jan–Sep demo data) and quick range toggles
- KPI cards for inflow, MRR, commission revenue, and GMV with trend indicators
- Listing and user overview cards with totals and segmented metrics
- Listing highlights presented as swipeable carousels with image overlays
- Actionable header shortcuts (budgeting modal, calendar, activity log, payout center, marketplace)
- Fully responsive layout with fluid clamp spacing and hover states

## Tech Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4 with tailwind-clamp for fluid sizing
- Recharts for analytics visualization
- Swiper for listing carousels
- Radix UI primitives (dialog, dropdown, tooltip) for interactions

## Requirements

- Node 18+ (tested with 18/20)
- pnpm (recommended) or npm/yarn/bun

## Project Structure

- app layout, styles, and entry: [src/app](src/app)
- UI and domain components: [src/components](src/components)
- Mock data: [src/data/index.ts](src/data/index.ts)
- Icons and images: [src/assets](src/assets)

## Getting Started

Prerequisites: Node 18+ and pnpm (recommended).

```bash
pnpm install
pnpm dev
```

Visit http://localhost:3000 to view the dashboard.

## Usage

- Development: `pnpm dev`
- Type check + lint: `pnpm lint`
- Build for production: `pnpm build`
- Preview production build: `pnpm build && pnpm start`
- No environment variables are required; all data is mocked.

## Scripts

- `pnpm dev` – start the development server
- `pnpm build` – create a production build
- `pnpm start` – run the production build
- `pnpm lint` – run ESLint

## Key Dependencies

- next 16.1.1
- react 19.2.3 / react-dom 19.2.3
- tailwindcss 4
- tailwind-clamp 4.1.2
- tailwind-merge 3.4.0
- recharts 3.6.0
- swiper 12.0.3
- @radix-ui/react-dialog 1.1.15, @radix-ui/react-dropdown-menu 2.1.16, @radix-ui/react-tooltip 1.2.8, @radix-ui/react-slot 1.2.4
- class-variance-authority 0.7.1, clsx 2.1.1

## Customization Notes

- Update demo metrics and listings in [src/data/index.ts](src/data/index.ts)
- Components are written with Tailwind utility classes; adjust globals in [src/app/globals.css](src/app/globals.css)
- Navigation, header actions, and cards live in [src/components](src/components); start with [src/app/page.tsx](src/app/page.tsx) to adjust layout
