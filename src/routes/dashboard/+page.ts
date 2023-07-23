import type { PageLoad } from './$types';
import votesApi from '$lib/api/votes';
import { isLoading } from '$lib/stores';
export const load = (async () => {
	isLoading.set(true);
	try {
		const votes = await votesApi.getAll();
		return { votes };
	} catch (error) {
		console.error(error);
	} finally {
		isLoading.set(false);
	}
}) satisfies PageLoad;
