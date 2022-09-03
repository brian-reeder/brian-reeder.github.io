import Head from 'next/head'
import Window  from '../components/Window.jsx'

export default function Home() {
  return (
    <>
      <Head>
	<meta name="description" content="Some notes, mind-maps,and other cheetsheets." />
      </Head>
	  <Window></Window>
    </>
  )
}
