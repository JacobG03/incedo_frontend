import type { NextPage } from 'next'
import Head from 'next/head'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home Page - Incedo</title>
        <meta name="description" content="Incedo is a multi-purpose plaform. Create notes, finish tasks, write blogs and much more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Incedo App</h1>
    </>
  )
}

export default Home
