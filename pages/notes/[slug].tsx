import dynamic from 'next/dynamic';
import Head from 'next/head';

import { join } from 'path';

import { getPostDir, getPostsSlugs, getPostBySlug } from '../../lib/api.ts';
import markdownToHtml from '../../lib/markdownToHtml';
const Window = dynamic(() => import('../../components/Window'), {
	ssr: false,
});

const Dir = dynamic(() => import('../../components/Dir'), {
	ssr: false,
});

export default function Post({ meta, content }) {
  return (
    <>
      <Window>
        <div dangerouslySetInnerHTML={{ __html:  content }} />
      </Window>
    </>
  )
}

export async function getStaticProps({ params }) {
	const post = getPostBySlug( params.slug, [
		'title',
		'date',
		'content',
	], getPostDir('notes'));
	const content = await markdownToHtml(post.content || '');
	return {
		props: {
			...post,
			content,
		},
	};
}

export async function getStaticPaths() {
	const postDir = getPostDir('notes');
	const slugs = getPostsSlugs(postDir);

	return  {
		paths: slugs.map((slug) => {
			return {
				params: {
					slug: slug,
					postDir: postDir,
				},
			};
		}),
		fallback: false,
	};
}
