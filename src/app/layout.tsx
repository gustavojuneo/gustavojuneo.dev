import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'
import Link from 'next/link'
import { Github, Linkedin, Instagram } from 'lucide-react'

import { DarkModeButton } from '@/components/DarkModeButton'
import { Theme } from '@/components/Theme'

import '../styles/globals.css'

const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Gustavo Juneo',
    default: 'Gustavo Juneo',
  },
  robots: {
    index: true,
    follow: true,
  },
  description: 'Developer Portfolio Gustavo Juneo',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={poppins.className}>
      <body className="flex h-screen w-screen flex-col bg-zinc-200 text-zinc-900 dark:bg-[#08070b] dark:text-zinc-50">
        <Theme />
        <DarkModeButton className="absolute right-0 top-0" />
        {children}
        <footer className="mt-auto px-2 py-4">
          <ul className="flex items-center justify-center gap-2">
            <li>
              <Link
                className="flex gap-2 transition hover:text-blue-900"
                href="https://github.com/gustavojuneo"
                target="_blank"
              >
                github <Github size={22} />
              </Link>
            </li>
            <li>
              <Link
                className="flex gap-2 transition hover:text-[#0077b5]"
                href="https://www.linkedin.com/in/gustavo-juneo"
                target="_blank"
              >
                linkedin <Linkedin size={22} />
              </Link>
            </li>
            <li>
              <Link
                className="flex gap-2 transition hover:text-[#e1306c]"
                href="https://instagram.com/gusta.vt"
                target="_blank"
              >
                instagram <Instagram size={22} />
              </Link>
            </li>
          </ul>
        </footer>
      </body>
    </html>
  )
}
