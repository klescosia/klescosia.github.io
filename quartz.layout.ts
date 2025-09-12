import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/klescosia",
      RSS: "/index.xml",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    // Component.ContentMeta(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      mapFn: (node) => {
        if (!node.file) {
          node.displayName = node.displayName
        } else {
          node.displayName = "/ " + node.displayName
        }
      },
    })),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
  afterBody: [
  Component.TagList(),
  Component.Comments({
      provider: 'giscus',
      options: {
        // from data-repo
        repo: 'klescosia/klescosia.github.io',
        // from data-repo-id
        repoId: 'R_kgDONzZtKg',
        // from data-category
        category: 'Announcements',
        // from data-category-id
        categoryId: 'DIC_kwDONzZtKs4CqTIR',
        themeUrl: 'https://giscus.app/themes/', 
        lightTheme: 'noborder_light', 
        darkTheme: 'noborder_dark',
      }
    })
  ]
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      mapFn: (node) => {
        if (!node.file) {
          node.displayName = "📁 " + node.displayName
        } else {
          node.displayName = "📄 " + node.displayName
        }
      },
    })),
  ],
  right: [],
}
