import dynamic from 'next/dynamic';
import Head from 'next/head';

import { getAllPosts } from '../../lib/api.ts';

const Window = dynamic(() => import('../../components/Window'), {
	ssr: false,
});

const Dir = dynamic(() => import('../../components/Dir'), {
	ssr: false,
});

export default function Home({ allPosts }) {
  return (
    <>
      <Head>
	<meta name="description" content="Some notes, mind-maps,and other cheetsheets." />
      </Head>
        <Window title="Notes">
	  <Dir posts={ allPosts } />
        </Window>
    </>
  )
}

export const getStaticProps = async () => {
	const allPosts = getAllPosts([
		'title',
		'date',
		'slug',
	], 'notes');

	return {
		props: { allPosts },
	};
};
