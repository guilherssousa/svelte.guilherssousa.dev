import fetch from '$lib/server/fetch';
import type { PageServerLoad } from './$types';

type Post = {
	createdAt: string;
	slug: string;
	title: string;
};

export const load = (async () => {
	const postsQuery = `
        query Posts {
            posts(first: 20, orderBy: createdAt_DESC) {
                title
                createdAt
                slug
            }
        }
    `;

	const response = await fetch(postsQuery);

	const { posts }: { posts: Post[] } = response;

	return { posts };
}) satisfies PageServerLoad;
