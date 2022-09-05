import dynamic from 'next/dynamic';
import Head from 'next/head';

const Window = dynamic(() => import('../components/Window'), {
	ssr: false,
});

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
