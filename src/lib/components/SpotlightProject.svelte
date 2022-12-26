<script lang="ts">
	export let title: string;
	export let description: string;
	export let href: string;
</script>

<a
	class="w-full flex justify-center bg-neutral-900 px-6 py-4 flex-col border rounded-md border-zinc-800 mt-4 "
	target="_blank"
	rel="noreferrer"
	{href}
>
	<span class="text-base text-orange-300">2022</span>
	<h1 class="text-2xl font-bold leading-normal">{title}</h1>

	<p class="text-zinc-400">{description}</p>
</a>
