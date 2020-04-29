import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  plugins: [
    resolve(),
    babel({
      runtimeHelpers: true,
      presets: ['@babel/preset-env']
    })
  ],
  context: 'null',
  moduleContext: 'null',
  output: {
    file: '_index.js',
    format: 'iife',
    name: 'wots'
  }
};
