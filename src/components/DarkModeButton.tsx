'use client'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'

type Theme = 'dark' | 'light' | undefined

interface Props {
  className?: string
}

export const DarkModeButton = ({ className }: Props) => {
  const [theme, setTheme] = useState<Theme>('light')

  const handleToggleThemeMode = () => {
    const storage = localStorage as unknown as { theme: Theme }
    if (storage.theme === 'dark') {
      storage.theme = 'light'
      document.documentElement.classList.remove('dark')
      setTheme('light')
    } else {
      storage.theme = 'dark'
      document.documentElement.classList.add('dark')
      setTheme('dark')
    }
  }

  useEffect(() => {
    setTheme(localStorage.theme)
  }, [])

  return (
    <button
      onClick={handleToggleThemeMode}
      className={twMerge(
        'm-2 rounded-full bg-zinc-300 p-2 dark:bg-zinc-800',
        className,
      )}
    >
      <Moon
        data-visible={theme === 'dark'}
        size={18}
        className="transition data-[visible=false]:invisible data-[visible=false]:h-0 data-[visible=false]:w-0"
      />
      <Sun
        data-visible={theme === 'light'}
        size={18}
        className="transition data-[visible=false]:invisible data-[visible=false]:h-0 data-[visible=false]:w-0"
      />
    </button>
  )
}
