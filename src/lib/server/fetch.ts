import { API_URL } from '$env/static/private';

export default async function (query: string) {
	const url = new URL(API_URL);

	url.searchParams.append('query', query);

	const response = await fetch(url);

	const json = await response.json();

	if (json.error) {
		throw new Error(json.error);
	}

	return json.data;
}
