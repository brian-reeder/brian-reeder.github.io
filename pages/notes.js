import Head from 'next/head'
import Desktop from '../components/Desktop.jsx'
import Window  from '../components/Window.jsx'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>@brian-reeder</title>
        //<link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Desktop>
	  <Window></Window>
	</Desktop>
      </main>
    </div>
  )
}
