import { getAllPosts, getPostBySlug } from '../../lib/api.ts';

import Window from '../../components/Window';

export default function Post({ post }) {
	return(
	  <>
	    <Window back="/notes" title={ post.title }>
	      <h1>Hello, World!</h1>
	    </Window>
	  </>
	);
};

export async function getStaticProps({ params }) {
	const post = getPostBySlug(params.slug,[
		'title',
		'date',
		'content',
		'slug',
	], 'notes');
	return {
		props: {
			post: {
				...post,
			},
		},
	};
};

export async function getStaticPaths() {
	const posts = getAllPosts(['slug'], 'notes');

	return {
		paths: posts.map((post) => {
			return {
				params: {
					slug: post.slug,
				},
			}
		}),
		fallback: false,
	};
};
