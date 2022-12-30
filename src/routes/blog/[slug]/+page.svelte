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

<div class="flex gap-x-2 relative">
	<article
		class="mt-16 prose theme-prose prose-h2:font-serif prose-h3:font-serif prose-strong:font-serif"
	>
		<div>
			<h1 class="font-serif">{data.title}</h1>

			<i>Published at {date}</i>
		</div>
		<SvelteMarkdown source={data.content} />
	</article>
	<ul class="mt-16 prose theme-prose sticky top-0 hidden md:block">
		<h3 class="font-serif">Summary</h3>
		{#each summary as topic}
			<a class="mt-3 block no-underline font-normal opacity-80" href="#{topic.id}">{topic.text}</a>
		{/each}
	</ul>
</div>
