import { FC } from 'react'
import Link from 'next/link'

import cn from '../../utils/mergeClassNames'

import { useTheme } from '../../context/theme'

import styles from './Header.module.scss'

const Header: FC = () => {
  const [theme] = useTheme()

  return (
    <div>
      <Link href="/">
        <a className={cn([styles.linkStyle, theme && styles['dark-anchor']])}>
          Home
        </a>
      </Link>
      <Link href="/about">
        <a className={cn([styles.linkStyle, theme && styles['dark-anchor']])}>
          About
        </a>
      </Link>
    </div>
  )
}

export default Header
