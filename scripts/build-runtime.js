#!/usr/bin/env node
const {build} = require('esbuild');
const {mkdirSync} = require('fs');
const {resolve} = require('path');

const args = process.argv.slice(2);
let outdir = 'public';
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--outdir' && args[i + 1]) {
    outdir = args[i + 1];
    i++;
  }
}

const outfile = resolve(process.cwd(), outdir, 'numbr.js');
mkdirSync(resolve(process.cwd(), outdir), {recursive: true});

build({
  entryPoints: ['web/runtime-client.ts'],
  bundle: true,
  format: 'iife',
  globalName: 'NumbrBundle',
  platform: 'browser',
  sourcemap: true,
  outfile,
  loader: {
    '.json': 'json',
  },
}).then(() => {
  console.log(`Built runtime bundle -> ${outfile}`);
}).catch(error => {
  console.error(error);
  process.exit(1);
});
