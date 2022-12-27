<script>
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/700.css';

	import '@fontsource/brygada-1918/700.css';

	import '../app.scss';

	const themes = {
		light: 'light-theme',
		dark: 'dark-theme'
	};

	let theme = themes.dark;
</script>

<svelte:head>
	<title>Guilherme Sousa</title>
	<meta
		name="description"
		content="This is my personal den. Read my thoughts, failed experiments and TV show reviews here."
	/>
</svelte:head>

<div class="{theme} pt-16 pb-16 min-h-screen">
	<div class="mx-auto max-w-screen-lg px-6">
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
