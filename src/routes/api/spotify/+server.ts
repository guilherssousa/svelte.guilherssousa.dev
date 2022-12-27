import { getNowPlaying } from '$lib/server/spotify';
import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

interface Song {
	is_playing: boolean;
	item: {
		name: string;
		artists: Artist[];
		album: Album;
		external_urls: {
			spotify: string;
		};
	} | null;
}

interface Artist {
	name: string;
}

interface Album {
	name: string;
	images: {
		url: string;
	}[];
}

export const GET = (async () => {
	const response = await getNowPlaying();

	if (response.status === 204 || response.status > 400) {
		throw error(400, 'No content!');
	}

	const song = (await response.json()) as Song;

	if (song.item === null) {
		throw error(404, 'No content!');
	}

	const isPlaying = song.is_playing;
	const title = song.item.name;
	const artist = song.item.artists.map((artist) => artist.name).join(', ');
	const album = song.item.album.name;
	const albumImageUrl = song.item.album.images[0].url;
	const songUrl = song.item.external_urls.spotify;

	return json(
		{
			album,
			albumImageUrl,
			artist,
			isPlaying,
			songUrl,
			title
		},
		{
			status: 200,
			headers: {
				'content-type': 'application/json',
				'cache-control': 'public, s-maxage=60, stale-while-revalidate=30'
			}
		}
	);
}) satisfies RequestHandler;
