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
      "Digital Garden": "https://ingridl-santos.github.io/digital-garden",
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
     */
    Component.Explorer({
      title: "🧠 Knowledge Map",
      folderDefaultState: "collapsed",
    }),
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
      },
      globalGraph: {
        scale: 0.6,
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

    /**
     * 🧠 MOC-FIRST NAVIGATION
     * This becomes your "entry structure"
     */
    Component.Explorer({
      title: "🧠 MOCs & Structure",
      folderDefaultState: "open",
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
      },
    }),
  ],
}