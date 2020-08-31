import React from 'react'
import type { AppProps } from 'next/app'

import AppProviders from '../context'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProviders>
      <Component {...pageProps} />
    </AppProviders>
  )
}

export default MyApp
