<script lang="ts">
	import '@fontsource/inter/400.css';
	import '@fontsource/inter/600.css';
	import '@fontsource/inter/500.css';
	import '@fontsource/inter/700.css';

	import '@fontsource/brygada-1918/500.css';
	import '@fontsource/brygada-1918/700.css';

	import '../app.scss';

	import Navbar from '$lib/components/Navbar.svelte';

	import { theme, themes, type AvailableThemes } from '$lib/stores/themes';

	let showThemePicker = false;

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
						class="{themeSample.class} px-4 py-2 border theme-border rounded-md font-bold"
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
			<Navbar {handleToggleThemePicker} />

			<div class="mt-8">
				<slot />
			</div>
		</div>
	</div>
</div>
