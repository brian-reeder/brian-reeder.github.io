import Head from 'next/head'
import Desktop from '../components/Desktop.jsx'

export default function Home() {
  return (
    <div className="container">
      <Head>
	<meta name="description" content="Personal website for Brian Reeder" />
        <title>@brian-reeder</title>
      </Head>
        <Desktop></Desktop>
    </div>
  )
}
