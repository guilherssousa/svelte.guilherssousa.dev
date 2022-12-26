import fetch from '$lib/server/fetch';
import type { PageServerLoad } from './$types';

type Post = {
	publishedAt: string;
	slug: string;
	title: string;
};

export const load = (async () => {
	const allPostsQuery = `
        query Posts {
            posts(first: 10) {
                publishedAt
                slug
                title
            }
        }
    `;

	const response = await fetch(allPostsQuery);

	return {
		posts: response.posts as Post[]
	};
}) satisfies PageServerLoad;
