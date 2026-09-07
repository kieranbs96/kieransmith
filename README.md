# kieransmith.co.uk

My personal site — a linktree-style page with links to my socials, work experience, and projects.

Built with [Next.js](https://nextjs.org), [Tailwind CSS](https://tailwindcss.com), [shadcn/ui](https://ui.shadcn.com), and [Motion](https://motion.dev) for the animations. Deployed on [Vercel](https://vercel.com).

## Running locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Editing content

Everything on the site — bio, social links, projects, and work experience — lives in one typed file: [`src/lib/content.ts`](src/lib/content.ts). Adding a project there automatically gives it a card on the home page and its own page under `/projects/[slug]`.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run typecheck` | Type-check with the native TypeScript 7 compiler |
| `npm run lint` | Run ESLint |

CI runs typecheck, lint, and build on every push and pull request, and Dependabot keeps dependencies up to date.
