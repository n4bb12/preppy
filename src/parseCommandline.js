import meow from "meow"

export default function parseCommandline() {
  return meow(
    `
  Usage
    $ preppy

  Options
    --entry-lib        Entry file for Library target [auto]
    --entry-browser    Entry file for Browser target [auto]
    --entry-node       Entry file for NodeJS target [auto]
    --entry-cli        Entry file for CLI target [auto]

    --root             The root folder of your project [auto]
    --output           Overrides output folder (and package.json entries) [auto]
    --watch            Keeps running and rebuilds on any change [false]
    --limit            Limits the current build scope to files matching [null]
    --exec             Executes the generated binary after creation [false]
    --notify           Enables notifications (useful when used in watch mode) [false]

    --no-sourcemap     Disables creation of a source map file during processing [false]

    -v, --verbose      Verbose output mode [false]
    -q, --quiet        Quiet output mode [false]
`,
    {
      flags: {
        entryLib: {
          type: "string",
          default: null
        },

        entryBrowser: {
          type: "string",
          default: null
        },

        entryNode: {
          type: "string",
          default: null
        },

        entryCli: {
          type: "string",
          default: null
        },

        root: {
          type: "string",
          default: null
        },

        output: {
          type: "string",
          default: null
        },

        watch: {
          type: "boolean",
          default: false
        },

        limit: {
          type: "string",
          default: null
        },

        exec: {
          type: "boolean",
          default: false
        },

        sourcemap: {
          type: "boolean",
          default: true
        },

        notify: {
          type: "boolean",
          default: false
        },

        verbose: {
          type: "boolean",
          alias: "v",
          default: false
        },

        quiet: {
          type: "boolean",
          alias: "q",
          default: false
        }
      }
    }
  )
}
