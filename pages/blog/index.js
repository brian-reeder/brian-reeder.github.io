import dynamic from 'next/dynamic';
import Head from 'next/head';

import { getAllPosts } from '../../lib/api.ts';

import Window from '../../components/Window';
import Dir from '../../components/Dir';

export default function Home({ allPosts }) {
  return (
    <>
      <Head>
        <meta name="description" content="My personal blog." />
      </Head>
      <Window title="Blog">
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
        ], 'blog');

        return {
                props: { allPosts },
        };
};

