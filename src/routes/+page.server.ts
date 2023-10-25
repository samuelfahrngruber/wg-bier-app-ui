import type { Season } from '$lib/dataaccess';
import type { PageServerLoad } from './$types';

export interface PageData {
	currentSeason: Promise<Season>;
}

export const load: PageServerLoad = () => {
	return {
		currentSeason: fetch('http://localhost:8080/season').then((res) => res.json())
	};
};
