import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export function getPostsSlugs(postDir: string) {
	return fs.readdirSync(postDir);
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
	const postDir = join(process.cwd(), 'pages', dir);
	const slugs  = getPostsSlugs(postDir);

	const posts = slugs.map((slug) => getPostBySlug(slug, fields, postDir)).sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

	return posts;
}
