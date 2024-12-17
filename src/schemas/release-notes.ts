import { z } from "astro:schema";

export const releaseNotesSchema = z.object({
	title: z.string(),
	description: z.string(),
	date: z.coerce.date(),
	products: z.string().array(),
	tags: z.enum(["feature", "changed", "improvement"]),
});
