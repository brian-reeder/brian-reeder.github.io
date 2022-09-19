import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export function getPostsDir(dir: string) {
	return join(process.cwd(), '_posts', dir);
}

export function getPostsSlugs(postDir: string) {
	return fs.readdirSync(postDir);
}

export function getPostBySlug(slug: string, fields: string[] =[], dir: string) {
	//const realSlug = slug.replace(/\.md$/,'');
	//const fullPath = join(postDir, `${realSlug}.md`);
	const fullPath = join(getPostsDir(dir), slug);
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
	const slugs  = getPostsSlugs(getPostsDir(dir));

	const posts = slugs.map((slug) => getPostBySlug(slug, fields, dir)).sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

	return posts;
}
