import { writable } from 'svelte/store';

export const themes = {
	chase: {
		id: 'chase',
		name: 'Chase',
		class: 'dark-theme'
	},
	gwanghwamun: {
		id: 'gwanghwamun',
		name: 'At Gwanghwamun',
		class: 'light-theme'
	},
	comrade: {
		id: 'comrade',
		name: 'Comrade',
		class: 'comrade-theme'
	}
} as const;

type Theme = {
	id: string;
	name: string;
	class: string;
};

export type AvailableThemes = keyof typeof themes;

function themeStore() {
	let initialTheme: AvailableThemes = 'chase';

	if (typeof window !== 'undefined') {
		const storedTheme = localStorage.getItem('@svelte.guilherssousa:theme');
		if (storedTheme) {
			initialTheme = storedTheme as AvailableThemes;
		}
	}

	const { subscribe, set } = writable<Theme>(themes[initialTheme]);

	function changeTheme(themeId: AvailableThemes) {
		const theme = themes[themeId];
		localStorage.setItem('@svelte.guilherssousa:theme', themeId);
		set(theme);
	}

	return {
		subscribe,
		changeTheme
	};
}

export const theme = themeStore();
