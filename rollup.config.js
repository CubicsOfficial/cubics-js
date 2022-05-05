import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const extensions = ['.js', '.ts'];

export default  {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/bundles/cubics.esm.js',
      format: 'esm',
      sourcemap: true
    },
    {
      file: 'dist/bundles/cubics.esm.min.js',
      format: 'esm',
      plugins: [terser()],
      sourcemap: true,
    },
    {
      file: 'dist/bundles/cubics.umd.js',
      format: 'umd',
      name: 'Cubics',
      sourcemap: true
    },
    {
      file: 'dist/bundles/cubics.umd.min.js',
      format: 'umd',
      name: 'Cubics',
      plugins: [terser()],
      sourcemap: true
    }
  ],
  plugins: [
    resolve({ extensions }),
    babel({babelHelpers: 'runtime', include: ['src/**/*.ts'], extensions, exclude: './node_modules/**'}),
    commonjs({
      include: 'node_modules/**',
      namedExports: {
        'node_modules/scrypt-js/scrypt.js': ['syncScrypt']
      }
    }),
  ]
}