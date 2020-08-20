import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { NextPage, NextPageContext } from 'next'

import ShowsInterface from '../interfaces/ShowsInterface'
import Layout from '../components/layout/Layout.component'

type Props = {
  shows: ShowsInterface[]
  getInitialProps?: (_ctx: NextPageContext) => Promise<any>
}

const Index: NextPage<Props> = ({ shows }: Props) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {shows.map((show) => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

Index.getInitialProps = async function (_ctx: NextPageContext) {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  // eslint-disable-next-line no-console
  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data.map((entry) => entry.show),
  }
}

export default Index
