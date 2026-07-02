// scripts/fetch-devto.mjs
// Build-time fetch of Kyle's dev.to posts → injected into content/index.md.
// Run before `npx quartz build` (see package.json script in INSTALL.md).
// Requires Node 18+ (global fetch). No dependencies, no API key.
//
// Rewrites ONLY the text between the markers in index.md:
//     <!-- devto:start -->  ...generated <ol class="pc-feed">...  <!-- devto:end -->
// Each row carries the post title, publish date, and up to 3 tags.
// If the API is unreachable it leaves the file untouched, so your last good
// list still ships and the build never breaks because of dev.to.

import { readFile, writeFile } from "node:fs/promises"
import { fileURLToPath } from "node:url"
import { dirname, join } from "node:path"

// ---- config ----
const USERNAME = "escosiakyle" // dev.to handle (NOT the GitHub handle klescosia)
const LIMIT = 30        // max posts (dev.to returns newest-first)
const MAX_TAGS = 3      // tags shown per row
const SHOW_REACTIONS = false // append "· 42 ❤" to the meta line
const INDEX_PATH = join(dirname(fileURLToPath(import.meta.url)), "..", "content", "index.md")
const START = "<!-- devto:start -->"
const END = "<!-- devto:end -->"

const esc = (s = "") =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")

const fmtDate = (iso) => {
  const d = new Date(iso)
  return isNaN(d) ? "" : d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}

function row(a, i, total) {
  const num = String(total - i).padStart(2, "0")
  const date = fmtDate(a.published_at)
  const tags = (a.tag_list ?? [])
    .slice(0, MAX_TAGS)
    .map((t) => `<span class="pc-tag">${esc(t)}</span>`)
    .join(" ")
  const reactions = SHOW_REACTIONS ? `${a.public_reactions_count ?? 0} ❤` : ""
  const meta = [date ? `<time>${date}</time>` : "", tags, reactions]
    .filter(Boolean)
    .join(' <span class="pc-dot">·</span> ')
  return (
    `  <li><a href="${a.url}" target="_blank" rel="noopener" data-num="${num}">` +
    `<span class="pc-feed-title">${esc(a.title)} <span class="pc-ext">↗</span></span>` +
    (meta ? `<span class="pc-feed-meta">${meta}</span>` : "") +
    `</a></li>`
  )
}

async function main() {
  let articles
  try {
    const res = await fetch(
      `https://dev.to/api/articles?username=${USERNAME}&per_page=${LIMIT}`,
      { headers: { Accept: "application/vnd.forem.api-v1+json" } },
    )
    if (!res.ok) throw new Error(`dev.to API ${res.status}`)
    articles = await res.json()
  } catch (err) {
    console.warn(`[devto] fetch failed (${err.message}) — keeping existing list.`)
    process.exit(0)
  }

  if (!Array.isArray(articles) || articles.length === 0) {
    console.warn("[devto] no articles returned — keeping existing list.")
    process.exit(0)
  }

  const block = `${START}\n<ol class="pc-feed">\n${articles.map((a, i) => row(a, i, articles.length)).join("\n")}\n</ol>\n${END}`

  const md = await readFile(INDEX_PATH, "utf8")
  const re = new RegExp(`${START}[\\s\\S]*?${END}`)
  if (!re.test(md)) {
    console.warn(`[devto] markers not found in index.md — add ${START} / ${END}. Skipping.`)
    process.exit(0)
  }
  const next = md.replace(re, block)
  if (next !== md) {
    await writeFile(INDEX_PATH, next, "utf8")
    console.log(`[devto] wrote ${articles.length} posts (date + tags) into index.md`)
  } else {
    console.log("[devto] list already up to date")
  }
}

main()
