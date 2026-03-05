import { readable } from 'svelte/store';

// keep in sync with breakpoints.respond-until($phone): 700px - 0.02px
export const MOBILE_QUERY = '(max-width: 699.98px)';
// keep in sync with breakpoints.respond-until($tablet): 1024px - 0.02px
export const TABLET_QUERY = '(max-width: 1023.98px)';
// keep in sync with breakpoints.respond-until($desktopS): 1240px - 0.02px
export const DESKTOP_S_QUERY = '(max-width: 1239.98px)';

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
