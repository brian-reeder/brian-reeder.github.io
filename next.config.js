
const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
		remarkPlugins: [],
		rehypePlugins: [],
	},
});

module.exports = withMDX({
	basePath: '',
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
});
