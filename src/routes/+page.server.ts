import { prisma } from '$lib/server/prisma';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const stars = await prisma.star.findMany();
	console.log(stars);
	return {
		stars: stars
	};
};
