import dynamic from 'next/dynamic';
import Head from 'next/head';

import { getAllPosts } from '../../lib/api.ts';

const Window = dynamic(() => import('../../components/Window'), {
	ssr: false,
});

const Dir = dynamic(() => import('../../components/Dir'), {
	ssr: false,
});

export default function Home({ mappedPosts }) {
  return (
    <>
      <Head>
	<meta name="description" content="Some notes, mind-maps,and other cheetsheets." />
      </Head>
        <Window title="Notes">
	  <Dir posts={ mappedPosts } />
        </Window>
    </>
  )
}

export const getStaticProps = async () => {
	const allPosts = getAllPosts([
		'title',
		'description',
		'slug',
	], 'notes');

	const mappedPosts = allPosts.map(post => ({
		'title': post.title,
		'slug': post.slug,
		'date': post.description,
	}));

	const sortedMappedPosts = mappedPosts.sort((post1, post2) => (post1.title < post2.title ? -1 : 1));

	return {
		props: { mappedPosts },
	};
};
