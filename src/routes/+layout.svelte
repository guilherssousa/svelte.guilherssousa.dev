<script>
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/700.css';

	import '../app.css';
</script>

<svelte:head>
	<title>Guilherme Sousa</title>
</svelte:head>

<div class="bg-zinc-900 pt-16 pb-16 min-h-screen">
	<div class="mx-auto max-w-screen-lg px-6 text-zinc-300">
		<nav>
			<ul class="flex gap-x-6">
				<li><a href="/" class="font-medium">Guilherme Sousa</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/blog">Blog</a></li>
				<li>
					<a href="https://github.com/guilherssousa" target="_blank" rel="noreferrer">GitHub</a>
				</li>
			</ul>
		</nav>

		<div class="mt-8">
			<slot />
		</div>
	</div>
</div>
