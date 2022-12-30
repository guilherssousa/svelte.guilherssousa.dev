<script lang="ts">
	export let handleToggleThemePicker: () => void;
</script>

<nav class="flex items-baseline justify-between">
	<ul class="flex items-baseline gap-x-4 sm:gap-x-6">
		<li class="hidden sm:block">
			<a href="/" class="font-bold font-serif text-lg">Guilherme Sousa</a>
		</li>
		<li class="sm:hidden block"><a href="/" class="font-bold font-serif">Home</a></li>
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
