import { extname } from "path"
import { statSync } from "fs"

/* eslint-disable id-length */
let ts
try {
  ts = require("typescript")
} catch(importError) {}

const resolveHost = {
  directoryExists(dirPath) {
    try {
      return statSync(dirPath).isDirectory()
    } catch (err) {
      /* istanbul ignore next */
      return false
    }
  },

  fileExists(filePath) {
    try {
      return statSync(filePath).isFile()
    } catch (err) {
      /* istanbul ignore next */
      return false
    }
  }
}

const extensions = [ ".ts", ".tsx" ]
const compilerOptions = {}

export default () => {
  return {
    name: "typescript-resolve",

    resolveId(importee, importer) {
      if (!importer) {
        return null
      }

      // Only help resolving requests from inside TypeScript sources
      if (!extensions.includes(extname(importer))) {
        /* istanbul ignore next */
        return null
      }

      importer = importer.split("\\").join("/")

      const result = ts.nodeModuleNameResolver(
        importee,
        importer,
        compilerOptions,
        resolveHost
      )

      if (result.resolvedModule && result.resolvedModule.resolvedFileName) {
        if (result.resolvedModule.resolvedFileName.endsWith(".d.ts")) {
          /* istanbul ignore next */
          return null
        }

        return result.resolvedModule.resolvedFileName
      }

      /* istanbul ignore next */
      return null
    }
  }
}
