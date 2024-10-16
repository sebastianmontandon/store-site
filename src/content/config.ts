import { defineCollection, z } from "astro:content";

const products = defineCollection({
    schema: z.object({
        title: z.string(),
        img: z.string().array(),
        price: z.number(),
        description: z.string(),
    })
})

export const collections = { products }