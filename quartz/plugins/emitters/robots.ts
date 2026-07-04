import { FilePath, joinSegments } from "../../util/path"
import { QuartzEmitterPlugin } from "../types"
import fs from "fs"
import chalk from "chalk"
import DepGraph from "../../depgraph"

export const Robots: QuartzEmitterPlugin = () => ({
  name: "Robots",
  getQuartzComponents() {
    return []
  },
  async getDependencyGraph(_ctx, _content, _resources) {
    return new DepGraph<FilePath>()
  },
  async emit({ argv, cfg }, _content, _resources): Promise<FilePath[]> {
    if (!cfg.configuration.baseUrl) {
      console.warn(chalk.yellow("Robots emitter requires `baseUrl` to be set in your configuration"))
      return []
    }
    const path = joinSegments(argv.output, "robots.txt") as FilePath
    const content = [
      "User-agent: *",
      "Allow: /",
      "",
      `Sitemap: https://${cfg.configuration.baseUrl}/sitemap.xml`,
      "",
    ].join("\n")
    fs.writeFileSync(path, content)
    return [path]
  },
})
