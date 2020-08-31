import { FC } from 'react'
import Head from 'next/head'

import Header from '../header/Header.component'

import lightTheme from '../themes-layout/light.module.scss'
import darkTheme from '../themes-layout/dark.module.scss'

import cn from '../../utils/mergeClassNames'

import { useTheme } from '../../context/theme'

import styles from './Layout.module.scss'

type Props = {
  children: React.ReactNode
}

const Layout: FC<Props> = ({ children }: Props) => {
  const [theme, setTheme] = useTheme()

  return (
    <div
      className={cn([
        styles.background,
        theme && styles['dark-bg'],
        theme ? darkTheme.theme : lightTheme.theme,
      ])}
    >
      <Head>
        <title>Nextjs Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>{children}</div>
      <button
        className={cn([styles.button, theme && styles['dark-button']])}
        type="button"
        onClick={() => setTheme(!theme)}
      >
        Switch theme
      </button>
    </div>
  )
}

export default Layout
