import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Repository } from './components/Repository'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
}

interface RepositoryDTO {
  id: string
  name: string
  description: null | string
  html_url: string
  homepage: string
}

const getRepositories = async (): Promise<RepositoryDTO[]> => {
  const res = await fetch(
    'https://api.github.com/users/gustavojuneo/repos?sort=created',
  )

  if (!res.ok) {
    return []
  }

  return res.json()
}

export default async function Portfolio() {
  const repositories = await getRepositories()
  const filteredRepositories = repositories.filter((repo) => repo.homepage)

  return (
    <main className="flex flex-1 flex-col items-center justify-center py-4">
      <header className="flex w-full">
        <Link href="/" className="ml-2 mr-auto transition hover:text-blue-600">
          <ArrowLeft />
        </Link>
        <h1 className="mr-auto text-2xl font-semibold">Projects</h1>
      </header>
      <div className="flex h-full w-full items-start justify-center">
        <section className="mx-4 mt-10 grid w-5/6 grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-4">
          {filteredRepositories.map((repo) => (
            <Repository key={repo.id} repository={repo} />
          ))}
        </section>
      </div>
    </main>
  )
}
