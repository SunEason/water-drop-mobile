import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true, // 每次生成会覆盖原有的文件
  schema: 'http://localhost:3000/graphql',
  documents: 'src/graphql/*.ts',
  generates: {
    'src/generated/index.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      hooks: {
        afterOneFileWrite: 'prettier --write',
      },
    },
  },
}

export default config
