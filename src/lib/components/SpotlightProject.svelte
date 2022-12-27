<script lang="ts">
	export let title: string;
	export let description: string;
	export let href: string;
</script>

<a
	class="theme-spotlight w-full flex justify-center px-6 py-4 flex-col border rounded-md mt-4"
	target="_blank"
	rel="noreferrer"
	{href}
>
	<span class="text-base primary">2022</span>
	<h1 class="text-2xl font-serif font-bold leading-normal">{title}</h1>

	<p class="spotlight-description">{description}</p>
</a>
