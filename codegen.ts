import { CodegenConfig } from '@graphql-codegen/cli'
import { CONFIG } from './global-config'

const config: CodegenConfig = {
  // NOTE: this file seems to be unable to read the env, you have to use string of api url straight up
  // like so:
  // schema: "http://localhost:4000/query",
  schema: CONFIG.site.apiUrl,
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
}

export default config
