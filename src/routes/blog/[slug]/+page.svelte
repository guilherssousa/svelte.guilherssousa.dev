<script lang="ts">
	import type { PageData } from './$types';
	import SvelteMarkdown from 'svelte-markdown';

	import summarify from '$lib/utils/summarify';

	export let data: PageData;

	const date = new Date(data.publishedAt).toLocaleString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});

	const postDescription = data.content.split(' ').slice(0, 50).join(' ');

	const summary = summarify(data.content);
</script>

<svelte:head>
	<title>{data.title} by Guilherme Sousa</title>
	<meta name="description" content={postDescription} />
</svelte:head>

<div class="flex gap-x-2">
	<article class="mt-16 prose theme-prose">
		<div>
			<h1>{data.title}</h1>

			<i>Published at {date}</i>
		</div>
		<SvelteMarkdown source={data.content} />
	</article>
	<ul class="mt-16 prose theme-prose">
		<h3>Summary</h3>
		{#each summary as topic}
			<li class="mt-3">{topic}</li>
		{/each}
	</ul>
</div>
