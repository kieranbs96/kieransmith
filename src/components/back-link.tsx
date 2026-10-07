import Link from 'next/link'
import { ArrowLeft } from '@phosphor-icons/react/ssr'

export function BackLink() {
  return (
    <nav aria-label="Back to home">
      <Link
        href="/"
        className="group -ml-1 inline-flex items-center gap-2 rounded-md px-1 py-0.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-primary"
      >
        <ArrowLeft
          aria-hidden="true"
          className="size-4 transition-transform motion-safe:group-hover:-translate-x-0.5"
        />
        Kieran Smith
      </Link>
    </nav>
  )
}
