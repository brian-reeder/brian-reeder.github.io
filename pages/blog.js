import Head from 'next/head'
import Window  from '../components/Window.jsx'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="My personal blog." />
      </Head>
      <Window></Window>
    </>
  )
}
