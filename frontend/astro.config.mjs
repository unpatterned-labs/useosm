// @ts-check
import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://useosm.org",
  integrations: [
    mdx({
      remarkPlugins: [rehypeAutolinkHeadings, remarkGfm, rehypeSlug],
    }),
    react(),
    sitemap({
      // Optional configuration
      filter: (page) => !page.includes("/drafts/"), // Exclude pages with '/drafts/' in the URL
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  }
});
