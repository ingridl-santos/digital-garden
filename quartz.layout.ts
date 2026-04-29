import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

/**
 * Shared layout (all pages)
 */
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),

  header: [],

  afterBody: [],

  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/ingridl-santos",
    },
  }),
}

/**
 * 🧠 NOTE PAGE (core experience = graph node view)
 */
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),

    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],

  left: [
    Component.PageTitle(),

    Component.MobileOnly(Component.Spacer()),

    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),

    /**
     * 🧭 PRIMARY NAV = MOC + STRUCTURE ENTRY POINT
     * MOC files at root, regular notes inside notes/ folder
     */
    Component.Explorer({
      title: "🧠 Knowledge Map",
      folderDefaultState: "collapsed",      sortFn: (a, b) => {
        // Files (MOCs) before folders (notes/)
        if (a.isFolder !== b.isFolder) {
          return a.isFolder ? 1 : -1
        }
        return a.displayName.localeCompare(b.displayName, undefined, {
          numeric: true,
          sensitivity: "base",
        })
      },    }),
  ],

  right: [
    /**
     * 🔥 GRAPH IS PRIMARY DISCOVERY TOOL
     * (not decorative anymore — it is navigation)
     */
    Component.Graph({
      localGraph: {
        depth: 2,
        scale: 1.1,
        focusOnHover: true,
        repelForce: 0.6,
        linkDistance: 40,
        showTags: true,
        removeTags: ["publish"],
      },
      globalGraph: {
        scale: 0.9,
        repelForce: 0.5,
        centerForce: 0.3,
        linkDistance: 50,
        fontSize: 0.5,
        showTags: true,
        removeTags: ["publish"],
        enableRadial: true,
      },
    }),

    /**
     * 🔗 RELATION ENGINE (very important)
     */
    Component.Backlinks(),

    /**
     * 🏷️ TAGS = weak clustering, not primary structure
     */
    Component.TagList(),
  ],
}

/**
 * 📚 LIST PAGES (tags / folders / MOCs)
 */
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],

  left: [
    Component.PageTitle(),

    Component.MobileOnly(Component.Spacer()),

    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),

    Component.Explorer({
      title: "🧠 Knowledge Map",
      folderDefaultState: "open",
      sortFn: (a, b) => {
        // Files (MOCs) before folders (notes/)
        if (a.isFolder !== b.isFolder) {
          return a.isFolder ? 1 : -1
        }
        return a.displayName.localeCompare(b.displayName, undefined, {
          numeric: true,
          sensitivity: "base",
        })
      },
    }),
  ],

  right: [
    /**
     * LIST PAGES SHOULD STILL SHOW GRAPH CONTEXT
     */
    Component.Graph({
      localGraph: {
        depth: 1,
        scale: 0.8,
        removeTags: ["publish"],
      },
    }),
  ],
}