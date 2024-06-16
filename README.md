# Next.js Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, start the Supabase local development environment:

```bash
supabase start
```

Check the status:

```bash
supabase status
```

Stop the Supabase environment:

```bash
supabase stop
```

Next, run the development server:

```bash
pnpm dev
```

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

## Prisma Migration

To create a new migration file, run:

```bash
npx prisma migrate dev
```

Ensure your database is running and accessible before running this command.
