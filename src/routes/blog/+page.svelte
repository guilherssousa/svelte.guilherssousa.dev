<script lang="ts">
	import type { PageServerData } from './$types';

	export let data: PageServerData;

	const formatDate = (date: string) =>
		new Date(date).toLocaleString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
</script>

<div>
	<h2 class="heading-1">
		Blog
		<span class="text-base opacity-80 ml-2">[meaning: web-ish word for diary]</span>
	</h2>

	<p class="mt-3 leading-relaxed">
		This is my personal den. Read my thoughts, failed experiments and TV show reviews here. Note
		that this is a really personal blog, so don't expect anything professional here. I'm just a guy
		trying to figure out how to live in this world and how to materialize my thoughts.
	</p>

	<h2 class="heading-1 mt-8">
		The myself manifesto
		<span class="text-base opacity-80 ml-2">Best posts to start</span>
	</h2>

	<p class="mt-3 leading-relaxed">Want to dive deep on my thoughts? Start with these:</p>

	<h2 class="heading-1 mt-8">
		All of them
		<span class="text-base opacity-80 ml-2">Latest ones, actually</span>
	</h2>

	<div class="mt-3">
		{#each data.posts as post}
			<a href="/blog/{post.slug}" class="mt-2 mb-4 block">
				<div class="flex flex-col gap-y-2 md:flex-row items-baseline justify-between">
					<div class="font-medium hover:underline">
						{post.title}
					</div>
					<div class="opacity-80 text-sm">{formatDate(post.createdAt)}</div>
				</div>
			</a>
		{/each}
	</div>
</div>
