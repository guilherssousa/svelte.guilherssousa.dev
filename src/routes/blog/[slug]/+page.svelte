<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import type { PageData } from './$types';

	export let data: PageData;

	const date = new Date(data.publishedAt).toLocaleString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	const postDescription = data.content.split(' ').slice(0, 50).join(' ');
</script>

<svelte:head>
	<title>{data.title} by Guilherme Sousa</title>
	<meta name="description" content={postDescription} />
</svelte:head>

<article class="mt-16 prose theme-prose">
	<div>
		<h1>{data.title}</h1>

		<i>Published at {date}</i>
	</div>
	<SvelteMarkdown source={data.content} />
</article>
