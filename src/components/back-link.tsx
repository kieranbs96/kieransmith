import { ArrowLeft } from '@phosphor-icons/react/ssr'
import Link from 'next/link'

interface BackLinkProps {
  currentPage?: string
}

export function BackLink({ currentPage }: BackLinkProps) {
  return (
    <nav aria-label={currentPage ? 'Breadcrumb' : 'Back to home'}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
        <li>
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
        </li>
        {currentPage ? (
          <li className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            <span aria-current="page">{currentPage}</span>
          </li>
        ) : null}
      </ol>
    </nav>
  )
}
