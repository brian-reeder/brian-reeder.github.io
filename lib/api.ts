import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export function getPostDir(dir: string) {
	const postDir = join(process.cwd(), '_posts', dir);

	return postDir;
}

export function getPostsSlugs(postDir: string) {
	const allSlugs = fs.readdirSync(postDir);
	const mdxSlugs = allSlugs.filter(isMDX);
	return mdxSlugs;
}
function isMDX(slug) {
	return slug.endsWith("\.mdx");
}

function removeIndex(arr: []) {
	const index = arr.indexOf('index.js');
	if (index > -1) {
		arr.splice(index, 1);
	}

	return arr;
}

export function getPostBySlug(slug: string, fields: string[] =[], postDir: string) {
	//const realSlug = slug.replace(/\.md$/,'');
	//const fullPath = join(postDir, `${realSlug}.md`);
	const fullPath = join(postDir, slug);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents);

	type Items = {
		[key: string]: string,
	}

	const items: Items = {};

	fields.forEach((field) => {
		if(field === 'slug') {
			//items[field] = realSlug;
			items[field] = slug;
		}
		if(field === 'content') {
			items[field] = content;
		}
		
		if(typeof data[field] !== 'undefined') {
			items[field] = data[field];
		}
	});

	return items;
}

export function getAllPosts(fields: string[] = [], dir: string) {
	const postDir = getPostDir(dir);
	const slugs  = getPostsSlugs(postDir);

	const posts = slugs.map((slug) => getPostBySlug(slug, fields, postDir)).sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

	return posts;
}
