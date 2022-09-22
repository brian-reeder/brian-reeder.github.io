import { getAllPosts, getPostBySlug } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';

import Window from '../../components/Window';

export default function Post({ post }) {
	return(
	  <>
	    <Window back="/notes" title={ post.title }>
	      <div className="note" dangerouslySetInnerHTML={{ __html: post.content }}></div>
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
	const content = await markdownToHtml(post.content || '');
	return {
		props: {
			post: {
				...post,
				content,
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
