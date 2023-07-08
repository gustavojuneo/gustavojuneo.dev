'use client'
import { Globe, Github } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface RepositoryDTO {
  id: string
  name: string
  description: null | string
  html_url: string
  homepage: string
}

interface Props {
  repository: RepositoryDTO
}

export const Repository = ({ repository }: Props) => {
  const [show, setShow] = useState(true)

  return (
    <article className="group relative min-h-[250px] w-full overflow-hidden rounded-lg bg-zinc-50 p-2 shadow-md dark:bg-zinc-800">
      {show && (
        <Image
          width={400}
          height={250}
          alt={`Screenshot of ${repository.name} application.`}
          src={`https://api.microlink.io/?url=${repository.homepage}&screenshot=true&meta=false&embed=screenshot.url`}
          onError={() => setShow(false)}
          className="h-full w-full rounded-lg"
        />
      )}
      <div
        data-not-screenshot={!show}
        className="absolute inset-0 flex h-full w-full translate-y-full flex-col items-center justify-center gap-3 bg-zinc-100/80 px-4 transition group-hover:translate-y-0 data-[not-screenshot=true]:translate-y-0 dark:bg-zinc-800/95"
      >
        <h3 className="text-xl font-semibold">{repository.name}</h3>
        {repository.description && (
          <p className="max-h-[100px] overflow-hidden text-ellipsis text-center">
            {repository.description}
          </p>
        )}
        <footer className="flex items-center justify-center gap-3">
          {repository.homepage && (
            <Link
              href={repository.homepage}
              target="_blank"
              className="flex items-center justify-center gap-2 rounded-lg px-2 py-1 text-zinc-800 transition hover:text-zinc-600 dark:text-zinc-200 dark:hover:text-zinc-50"
            >
              <Globe />
              View app
            </Link>
          )}
          <Link
            href={repository.html_url}
            target="_blank"
            className="flex items-center justify-center gap-2 rounded-lg text-blue-600 transition hover:text-blue-500"
          >
            <Github />
            View repo
          </Link>
        </footer>
      </div>
    </article>
  )
}
