import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript2';
import scss from 'rollup-plugin-scss';

const extensions = ['.js', '.ts', '.vue'];

const plugins = [
  alias({
    entries: {
      vue: 'vue/dist/vue.runtime.common.prod.js',
    },
  }),
  resolve({ extensions, browser: true }),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
  }),
  commonjs({ extensions, exclude: 'src/**' }),
  vue({ css: true, isWebComponent: false, template: { isProduction: true } }),
  scss({
    output: 'dist/v-github-icon.css',
  }),
  typescript({
    include: [/\.tsx?$/, /\.vue\?.*?lang=ts/],
    useTsconfigDeclarationDir: true,
  }),
];

const external = ['@vue/composition-api'];

export default [
  // ESM build to be used with webpack/rollup.
  {
    input: 'src/index.js',
    output: {
      format: 'esm',
      name: 'VGithubIcon',
      file: 'dist/v-github-icon.esm.js',
    },
    plugins,
    external,
  },
  // CommonJS build
  {
    input: 'src/index.js',
    output: {
      format: 'cjs',
      name: 'VGithubIcon',
      file: 'dist/v-github-icon.cjs.js',
    },
    plugins,
    external,
  },
  // UMD build.
  {
    input: 'src/index.js',
    output: {
      format: 'umd',
      name: 'VGithubIcon',
      file: 'dist/v-github-icon.js',
      globals: {
        '@vue/composition-api': 'vueCompositionApi',
      },
    },
    plugins,
    external,
  },
];
