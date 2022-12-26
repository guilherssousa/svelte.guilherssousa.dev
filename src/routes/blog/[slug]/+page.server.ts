import fetch from '$lib/server/fetch';
import type { PageServerLoad } from './$types';

type Post = {
	publishedAt: string;
	slug: string;
	title: string;
	content: string;
};

export const load = (async ({ params }) => {
	const { slug } = params;

	const postQuery = `
        query Post {
            post(where: {slug: "${slug}"}) {
            content
            publishedAt
            slug
            title
            updatedAt
            }
        }
    `;

	const response = await fetch(postQuery);

	const { post }: { post: Post } = response;

	return post;
}) satisfies PageServerLoad;
