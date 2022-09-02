import Head from 'next/head'
import Desktop from '../components/Desktop.jsx'
import Window  from '../components/Window.jsx'

export default function Home() {
  return (
    <div className="container">
      <Head>
	<meta name="description" content="Some notes, mind-maps,and other cheetsheets." />
        <title>@brian-reeder</title>
      </Head>
      <main>
        <Desktop>
	  <Window></Window>
	</Desktop>
      </main>
    </div>
  )
}
