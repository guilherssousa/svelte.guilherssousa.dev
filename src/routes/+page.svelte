<script lang="ts">
	import train from '$lib/assets/train.jpg';
	import japaneseStreet from '$lib/assets/japanese-street.jpg';

	import SpotlightProject from '$lib/components/SpotlightProject.svelte';
</script>

<main>
	<section class="mt-16 leading-relaxed text-lg flex gap-x-8">
		<div class="hidden w-2/5 md:flex flex-col">
			<img
				src={train}
				alt="A beautiful train station."
				class="h-full w-full rounded-md object-cover"
			/>
			<div class="mt-2 text-xs text-zinc-700 self-end">Photo by ssedaulgen</div>
		</div>
		<div class="md:w-3/5 mt-2">
			<div class="flex flex-col">
				<h2 class="heading-1 indent-4">You can overcome anything, as long as you're alive.</h2>
				<span class="self-end text-zinc-400 italic">박새로이</span>
			</div>

			<p class="mt-8 indent-4">
				I'm a web developer, a sports aficionado, and a 15-minute writer. I'm currently working as a
				Fullstack Developer at
				<a href="https://maisesports.com.br" class="link" target="_blank" rel="noreferrer"
					>Mais Esports</a
				>
				and
				<a href="https://twitter.com/inhousegg" class="link" target="_blank" rel="noreferrer"
					>Inhouse.gg</a
				>, also contributing to the open source community with translations and nitpickings.
			</p>

			<p class="mt-6 indent-4">
				If you are interested in knowing more about me, you can check my
				<a href="/about">about page</a>. If you want to work with me, you can contact me on my
				social media or send me an email.
			</p>

			<p class="mt-6 indent-4">
				Please note, this is a personal website so expect some weirdness here and there. To see
				more:
			</p>

			<ul class="mt-2 flex flex-col gap-y-1">
				<li>
					<a href="https://guilherssousa.dev" class="link" target="_blank" rel="noreferrer"
						>My current website</a
					>
				</li>
				<li>
					<a href="https://github.com/guilherssousa" class="link" target="_blank" rel="noreferrer"
						>GitHub</a
					>
				</li>
				<li>
					<a href="https://twitter.com/eeveeiuv" class="link" target="_blank" rel="noreferrer"
						>Twitter</a
					>
				</li>
			</ul>
		</div>
	</section>
	<section class="mt-32 leading-relaxed text-lg flex gap-x-8">
		<div class="md:w-3/5 mt-2">
			<div class="flex flex-col">
				<h2 class="heading-1 indent-2">Spotlight stuff I've done</h2>
			</div>

			<p class="mt-6 indent-4">
				Notable projects I've worked on, at least the ones I can talk about.
			</p>

			<SpotlightProject
				title="Nice House"
				href="https://nicehousebr.com/"
				description="A colorful and whimsical website for one of the biggest entertainment hub in Brazil."
			/>

			<SpotlightProject
				title="SWR"
				href="https://swr.vercel.app/pt-BR"
				description="SWR is a React Hooks library for remote data fetching. I work on Brazilian Portuguese translations."
			/>
			<SpotlightProject
				title="Dissecting create-vite"
				href="https://medium.com/@guilherssousa/dissecando-o-create-vite-entendendo-como-funciona-a-cli-do-vite-e6ddfa196029"
				description="A commented repository and a Medium article explaining how the Vite CLI works via a code walkthrough."
			/>
		</div>
		<div class="w-2/5 hidden md:flex flex-col">
			<img
				src={japaneseStreet}
				alt="A japanese valley street."
				class="h-full w-full rounded-md object-cover"
			/>
		</div>
	</section>
</main>
