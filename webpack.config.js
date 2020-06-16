const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

const PRISMA_GENERATED_CODE_PATH = path.dirname(require.resolve('.prisma/client'))

const OUTPUT_PATH = path.resolve(__dirname, 'dist')

module.exports = {
  mode: process.env.NODE_ENV === 'production' ? 'development' : 'production',
  target: 'node',
  entry: './main.js',
  output: {
    filename: 'main.js',
    path: OUTPUT_PATH,
    libraryTarget: 'commonjs',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        // copy prisma binary
        { from: path.join(PRISMA_GENERATED_CODE_PATH, 'query-engine-*'), to: 'prisma/bin', flatten: true },
        // copy prisma schema
        { from: path.join(PRISMA_GENERATED_CODE_PATH, 'schema.prisma'), to: 'prisma', flatten: true },
      ],
    }),
  ],
}
