import Image from 'next/image'

import { type CurrentFavourite, personal } from '@/lib/content'

function FavouriteArtwork({ favourite }: { favourite: CurrentFavourite }) {
  const image = (
    <Image
      src={favourite.artwork.src}
      alt={favourite.artwork.alt}
      width={favourite.artwork.width}
      height={favourite.artwork.height}
      sizes="64px"
      className="h-auto max-h-20 w-auto max-w-full rounded-md border border-border object-contain"
    />
  )
  const className = 'flex h-20 w-16 shrink-0 items-center justify-center'

  return favourite.href ? (
    <a
      href={favourite.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${favourite.title} by ${favourite.creator} (opens in a new tab)`}
      className={`${className} rounded-md transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}
    >
      {image}
    </a>
  ) : (
    <span className={className}>{image}</span>
  )
}

export function PersonalSection() {
  const [beforeClub, afterClub] = personal.bio.split(personal.footballClub.name)

  return (
    <section aria-labelledby="outside-work-heading" className="flex flex-col gap-5">
      <div className="flex flex-col gap-3">
        <h2 id="outside-work-heading" className="font-mono text-xs text-faint">
          Outside work
        </h2>
        <p className="text-[15px] leading-relaxed text-foreground/80">
          {beforeClub}
          {afterClub !== undefined ? (
            <>
              <span className="inline-flex items-baseline gap-1 whitespace-nowrap">
                {personal.footballClub.name}
                <Image
                  src={personal.footballClub.crest}
                  alt=""
                  width={18}
                  height={18}
                  className="size-[18px] self-center"
                />
              </span>
              {afterClub}
            </>
          ) : null}
        </p>
      </div>

      <ul className="flex flex-col gap-3">
        {personal.favourites.map((favourite) => (
          <li key={favourite.label} className="rounded-lg border border-border bg-card/60 p-4">
            <figure className="flex items-center gap-4">
              <FavouriteArtwork favourite={favourite} />
              <figcaption className="flex min-w-0 flex-1 flex-col gap-1">
                <h3 className="mb-1 font-mono text-xs text-muted-foreground">{favourite.label}</h3>
                <p className="text-sm leading-5 font-medium text-foreground">{favourite.title}</p>
                <p className="text-sm leading-5 text-muted-foreground">{favourite.creator}</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}
