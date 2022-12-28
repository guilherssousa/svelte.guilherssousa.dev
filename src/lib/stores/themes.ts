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
	const { subscribe, set } = writable<Theme>(themes.chase);

	function changeTheme(themeId: AvailableThemes) {
		const theme = themes[themeId];
		set(theme);
	}

	return {
		subscribe,
		changeTheme
	};
}

export const theme = themeStore();
