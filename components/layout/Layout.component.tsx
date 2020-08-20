import { FC } from 'react'
import Head from 'next/head'
import Header from '../header/Header.component'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
}

type Props = {
  children: React.ReactNode
}

const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <div style={layoutStyle}>
      <Head>
        <title>brunormferreira nextjs - Setup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>{children}</div>
    </div>
  )
}

export default Layout
