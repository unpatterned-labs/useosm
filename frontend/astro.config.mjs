// @ts-check
import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import rehypeSlug from "rehype-slug";
import react from "@astrojs/react";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://useosm.org",
  integrations: [mdx(), react(),
  sitemap({
    // Optional configuration
    filter: (page) =>
      !page.includes('/drafts/'), // Exclude pages with '/drafts/' in the URL
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date(),
  })
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      [
        "rehype-class-names",
        {
          h1: "text-4xl font-bold text-grey-500 mt-12 mb-6",
          h2: "text-3xl font-bold text-grey-300 mt-10 mb-4",
          h3: "text-2xl font-semibold text-grey-300 mt-8 mb-3",
          h4: "text-xl font-semibold text-grey-300 mt-6 mb-2",
          h5: "text-lg font-semibold text-grey-300 mt-4 mb-2",
          h6: "text-base font-semibold text-grey-300 mt-4 mb-2",
          p: "text-base leading-7 text-grey-200",
          a: "text-blue-600 underline  transition-colors",
          strong: "font-semibold text-grey-400",
          em: "italic",
          code: "bg-grey-100 text-pink-600 px-1.5 py-0.5 rounded text-sm font-mono",
          pre: "bg-grey-900 text-grey-100 p-4 rounded-lg overflow-x-auto mb-6 shadow-lg",
          ul: "list-disc pl-6 mb-2 space-y-1 text-grey-200 text-base",
          ol: "list-decimal pl-6 mb-2 space-y-1 text-grey-200 text-base",
          li: "text-grey-700 leading-7",
          blockquote:
            "border-l-4 border-blue-500 pl-4 italic text-grey-600 my-6",
          hr: "border-grey-300 my-8",
          table: "w-full border-collapse mb-6",
          th: "bg-grey-100 border border-grey-300 px-4 py-2 text-left font-semibold text-grey-900",
          td: "border border-grey-300 px-4 py-2",
          img: "rounded-lg shadow-md my-6 max-w-full h-auto",
        },
      ],
    ],
  },
});
