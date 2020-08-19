import React, { useState, FC } from 'react'
import Head from 'next/head'
import Input from '../components/input/Input.component'

const Home: FC = () => {
  const [text, setText] = useState<string>('')

  return (
    <div className="container">
      <Head>
        <title>Jest/Sass/Typescript - Setup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Jest/Sass/Typescript - Setup</h1>
        <Input
          type="text"
          name="teste"
          onChange={(e) => setText(e.target.value)}
          placeholder="My beatufiul test"
          value={text}
        />
        {text}
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export default Home
