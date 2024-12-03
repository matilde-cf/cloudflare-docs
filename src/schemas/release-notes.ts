import { z } from "astro:schema";

export const releaseNotesSchema = z.object({
	title: z.string(),
	description: z.string(),
	products: z.string().array(),
	tags: z.enum(["feature", "changed", "improvement"]),
});
