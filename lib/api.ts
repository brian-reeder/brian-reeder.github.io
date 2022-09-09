import fs from 'fs';
import { join } from 'path';


export function getPostsSlugs(dir: string) {
	return fs.readdirSync(join(process.cwd(), 'pages', dir));
}

export function getAllPosts(fields: string[] = [], dir: string) {
	const slugs  = getPostsSlugs(dir);

	return slugs;
}
