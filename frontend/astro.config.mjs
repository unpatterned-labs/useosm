// @ts-check
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import mdx from "@astrojs/mdx";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

const defaultLocale = "en";


function getDefaultLocaleRedirects() {
  const pagesDir = fileURLToPath(
    new URL(`./src/pages/${defaultLocale}`, import.meta.url),
  );

  /** @type {(dir: string) => string[]} */
  const walk = (dir) =>
    fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
      const entryPath = path.join(dir, entry.name);
      return entry.isDirectory() ? walk(entryPath) : [entryPath];
    });

  /** @type {Record<string, string>} */
  const redirects = {};
  for (const file of walk(pagesDir)) {
    const relative = path.relative(pagesDir, file).replace(/\.[^./]+$/, "");
    const segments = relative
      .split(path.sep)
      .filter((segment) => segment !== "index");
    const routePath = `/${segments.join("/")}`;

    if (routePath === "/") continue; // root "/" is handled separately

    redirects[routePath] = `/${defaultLocale}${routePath}`;
  }
  return redirects;
}

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
  i18n: {
    defaultLocale,
    locales: ["en", "fr"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  redirects: getDefaultLocaleRedirects(),
  vite: {
    plugins: [tailwindcss()],
  },
});
