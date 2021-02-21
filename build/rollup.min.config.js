import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import alias from '@rollup/plugin-alias';
import resolve from '@rollup/plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import typescript from 'rollup-plugin-typescript2';
import scss from 'rollup-plugin-scss';

const extensions = ['.js', '.ts', '.vue'];

export default {
  input: 'src/index.js',
  output: {
    format: 'umd',
    name: 'VGithubIcon',
    file: 'dist/v-github-icon.min.js',
    globals: {
      '@vue/composition-api': 'vueCompositionApi',
    },
  },
  plugins: [
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
    vue({
      css: true,
      isWebComponent: false,
      template: { isProduction: true },
    }),
    scss({
      output: 'dist/v-github-icon.min.css',
      outputStyle: 'compressed',
    }),
    typescript({
      include: [/\.tsx?$/, /\.vue\?.*?lang=ts/],
      useTsconfigDeclarationDir: true,
    }),
    terser(),
  ],
  external: ['@vue/composition-api'],
};
