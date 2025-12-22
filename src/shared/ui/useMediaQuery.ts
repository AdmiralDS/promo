import { readable } from 'svelte/store';

export const MOBILE_QUERY = '(max-width: 700px)';
export const TABLET_QUERY = '(max-width: 1024px)';
export const DESKTOP_S_QUERY = '(max-width: 1240px)';

export function useMediaQuery(query: string) {
	return readable(false, (set) => {
		if (typeof window === 'undefined') return;

		const media = window.matchMedia(query);

		// начальное значение
		set(media.matches);

		// listener, который меняет стейт
		const listener = () => set(media.matches);

		media.addEventListener('change', listener);

		// cleanup
		return () => {
			media.removeEventListener('change', listener);
		};
	});
}
