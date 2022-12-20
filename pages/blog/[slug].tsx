import { getAllPosts, getPostBySlug } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';

import Window from '../../components/Window';

export default function Post({ post }) {
	return(
	  <>
	    <Window back="/blog" title="Blog">
	      <div className="blog" dangerouslySetInnerHTML={{ __html: post.content }}></div>
	    </Window>
	  </>
	);
};

export async function getStaticProps({ params }) {
	const post = getPostBySlug(params.slug + '.md',[
		'title',
		'date',
		'content',
		'slug',
	], 'blog');
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
	const posts = getAllPosts(['slug'], 'blog');

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
