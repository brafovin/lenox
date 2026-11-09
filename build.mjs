import * as esbuild from 'esbuild';
const watch = process.argv.includes('--watch');
const opts = { entryPoints: ['src/main.js'], bundle: true, outfile: 'dist/game.js', format: 'iife', target: 'es2020', minify: !watch, sourcemap: false, logLevel: 'info' };
if (watch) { const ctx = await esbuild.context(opts); await ctx.watch(); } else await esbuild.build(opts);
