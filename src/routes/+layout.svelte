<script>
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/700.css';

	import '@fontsource/brygada-1918/700.css';

	import '../app.scss';

	import { theme } from '$lib/stores/themes';
</script>

<svelte:head>
	<title>Guilherme Sousa</title>

	<meta name="title" content="Guilherme Sousa" />

	<meta
		name="description"
		content="This is my personal den. Read my thoughts, failed experiments and TV show reviews here."
	/>
	<meta name="keywords" content="personal, den, svelte" />
	<meta name="robots" content="index, follow" />
	<meta name="language" content="English" />
	<meta name="author" content="Guilherme Sousa" />

	<meta
		name="description"
		content="This is my personal den. Read my thoughts, failed experiments and TV show reviews here."
	/>

	<meta property="og:locale" content="en-US" />
	<meta property="og:title" content="Guilherme Sousa" />
	<meta
		property="og:description"
		content="This is my personal den. Read my thoughts, failed experiments and TV show reviews here."
	/>
	<meta property="og:site_name" content="Guilherme Sousa" />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Guilherme Sousa" />
	<meta name="twitter:site" content="@eeveeiuv" />
	<meta name="twitter:creator" content="@eeveeiuv" />
</svelte:head>

<div class="{$theme.class} pt-16 pb-16 min-h-screen">
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
