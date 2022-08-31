import Head from 'next/head'
import Desktop from '../components/Desktop.jsx'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>@brian-reeder</title>
        //<link rel="icon" href="/favicon.ico" />
      </Head>
        <Desktop></Desktop>
    </div>
  )
}
