import Layout from '../../components/layout/Layout.component'
import fetch from 'isomorphic-unfetch'
import { NextPage, NextPageContext } from 'next'
import ShowsInterface from '../../interfaces/ShowsInterface'

type Props = {
  show: ShowsInterface
}

const Post: NextPage<Props> = ({ show }: Props) => (
  <Layout>
    <h1>{show.name}</h1>
    <p>{show.summary.replace(/<[/]?p>/g, '')}</p>
    <img src={show.image.medium} />
  </Layout>
)

Post.getInitialProps = async function (ctx: NextPageContext) {
  const { id } = ctx.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  // eslint-disable-next-line no-console
  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post
