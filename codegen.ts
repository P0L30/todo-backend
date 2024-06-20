import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: './src/graphql/schemas/**/*.graphql',
  documents: './src/**/*.graphql',
  generates: {
    './src/generated/index.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
  },
  config: {
    useIndexSignature: true,
  },
};

export default config;
