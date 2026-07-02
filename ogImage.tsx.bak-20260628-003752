/**
 * The Purple Cloud — custom social/OG card
 * Renders via Satori at build time in the autumn-deep palette.
 *
 * Wire it in quartz.config.ts (already done in the provided config):
 *   import { pcOgImage } from "./ogImage"
 *   ...
 *   generateSocialImages: {
 *     colorScheme: "lightMode",
 *     width: 1200,
 *     height: 630,
 *     excludeRoot: false,
 *     imageStructure: pcOgImage,
 *   }
 *
 * Note: Satori needs explicit `display:flex` on any element with >1 child and
 * cannot read CSS variables, so the palette is inlined below. If your Quartz
 * version's imageStructure signature differs, only the argument list changes —
 * the returned JSX stays the same.
 */

const PAPER = "#faf4ee"
const INK = "#2c2230"
const PLUM = "#6e2b63"
const MUTED = "#a9968c"
const WINE = "#9e2b50"
const AMBER = "#c4762f"
const GOLD = "#e7b65f"

const CLOUD = "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"

export const pcOgImage = (
  _cfg: any,
  _userOpts: any,
  title: string,
  description: string,
  _fonts: any,
  _fileData: any,
) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "70px 80px",
        backgroundColor: PAPER,
        fontFamily: "Source Sans 3, sans-serif",
      }}
    >
      {/* brand row */}
      <div style={{ display: "flex", alignItems: "center", gap: "22px" }}>
        <svg
          width="72"
          height="72"
          viewBox="0 0 24 24"
          fill="none"
          stroke={PLUM}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d={CLOUD} />
        </svg>
        <div
          style={{
            display: "flex",
            fontSize: "28px",
            color: MUTED,
            fontFamily: "IBM Plex Mono, monospace",
            letterSpacing: "2px",
          }}
        >
          the purple cloud · esck.dev
        </div>
      </div>

      {/* title + description */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: "70px",
            fontWeight: 700,
            color: INK,
            lineHeight: 1.08,
            letterSpacing: "-2px",
          }}
        >
          {title}
        </div>
        {description ? (
          <div
            style={{
              display: "flex",
              marginTop: "22px",
              fontSize: "32px",
              fontWeight: 300,
              color: MUTED,
              lineHeight: 1.4,
            }}
          >
            {description}
          </div>
        ) : (
          <div style={{ display: "flex" }}></div>
        )}
      </div>

      {/* palette bar */}
      <div style={{ display: "flex", gap: "12px" }}>
        {[PLUM, WINE, AMBER, GOLD, INK].map((c) => (
          <div
            key={c}
            style={{
              display: "flex",
              width: "40px",
              height: "40px",
              borderRadius: "9px",
              backgroundColor: c,
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default pcOgImage
