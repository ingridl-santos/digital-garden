import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration — Ingrid's Digital Garden 🌱
 */

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Ingrid's — Digital Garden 🌱",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,

    analytics: {
      provider: "plausible",
    },

    locale: "en-US",

    baseUrl: "ingridl-santos.github.io/digital-garden",

    ignorePatterns: [
      "private",
      "templates",
      ".obsidian",
      "Extras",
      "Inbox",
      "Later"
    ],

    defaultDateType: "modified",

    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,

      typography: {
        header: "Inter",
        body: "Inter",
        code: "JetBrains Mono",
      },

      colors: {
        lightMode: {
          light: "#fafafa",
          lightgray: "#e5e7eb",
          gray: "#6b7280",
          darkgray: "#111827",
          dark: "#0f1115",

          secondary: "#2563eb",
          tertiary: "#10b981",

          highlight: "rgba(37, 99, 235, 0.08)",
          textHighlight: "#2563eb55",
        },

        darkMode: {
          light: "#0f1115",
          lightgray: "#1a1f2b",
          gray: "#8b949e",
          darkgray: "#e6edf3",
          dark: "#ffffff",

          secondary: "#7aa2f7",
          tertiary: "#9ece6a",

          highlight: "rgba(122, 162, 247, 0.12)",
          textHighlight: "#7aa2f7aa",
        },
      },
    },
  },

  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],

    filters: [
      Plugin.RemoveDrafts(),
    ],

    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),

      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),

      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),

      // Optional: disable for faster builds during development
      Plugin.CustomOgImages(),
    ],
  },
}

export default config