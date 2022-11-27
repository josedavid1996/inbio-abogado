import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  debug: true,
  verbose: true,
  overwrite: true,
  schema: 'https://inbio.almacenrivera.com/public/graphql',
  documents: 'src/**/*.graphql',
  generates: {
    'src/generated/graphql.ts': {
      config: { withHooks: true },
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo'
      ]
    }
  }
}

export default config
