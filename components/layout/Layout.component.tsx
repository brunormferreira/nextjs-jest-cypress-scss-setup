import { FC, useState } from 'react'
import Head from 'next/head'
import Header from '../header/Header.component'

import lightTheme from '../themes-layout/light.module.scss'
import darkTheme from '../themes-layout/dark.module.scss'

import styles from './Layout.module.scss'

type Props = {
  children: React.ReactNode
}

const Layout: FC<Props> = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState(false)
  const isDark = !!darkMode

  const cn = (arr: string[]) => arr.filter(Boolean).join(' ')

  return (
    <div
      className={cn([
        styles.background,
        isDark && styles['dark-bg'],
        isDark ? darkTheme.theme : lightTheme.theme,
      ])}
    >
      <Head>
        <title>Nextjs Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>{children}</div>
      <button
        className={cn([styles.button, isDark && styles['dark-button']])}
        type="button"
        onClick={() => setDarkMode(!darkMode)}
      >
        Switch theme
      </button>
    </div>
  )
}

export default Layout
