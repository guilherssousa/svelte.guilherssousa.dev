<script lang="ts">
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/700.css';

	import '@fontsource/brygada-1918/700.css';

	import '../app.scss';

	import { theme, themes, type AvailableThemes } from '$lib/stores/themes';

	let showThemePicker = true;

	const handleToggleThemePicker = () => {
		showThemePicker = !showThemePicker;
	};

	const handleThemeChange = (themeId: AvailableThemes) => {
		theme.changeTheme(themeId);
	};
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

<div class={$theme.class}>
	{#if showThemePicker}
		<div class="border-b h-24 flex items-center w-full theme-border">
			<div class="max-w-screen-lg mx-auto flex gap-x-8">
				{#each Object.values(themes) as themeSample}
					<button
						class="{themeSample.class} px-4 py-2 border rounded-md font-bold"
						on:click={() => handleThemeChange(themeSample.id)}
					>
						{themeSample.name}
					</button>
				{/each}
			</div>
		</div>
	{/if}

	<div class="pt-16 pb-16 min-h-screen">
		<div class="mx-auto max-w-screen-lg px-6">
			<nav class="flex items-baseline justify-between">
				<ul class="flex gap-x-6">
					<li><a href="/" class="font-medium">Guilherme Sousa</a></li>
					<li><a href="/about">About</a></li>
					<li><a href="/blog">Blog</a></li>
					<li>
						<a href="https://github.com/guilherssousa" target="_blank" rel="noreferrer">GitHub</a>
					</li>
				</ul>

				<button on:click={handleToggleThemePicker} class="p-2 slightly-primary rounded-lg">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6 primary"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
						/>
					</svg>
				</button>
			</nav>

			<div class="mt-8">
				<slot />
			</div>
		</div>
	</div>
</div>
