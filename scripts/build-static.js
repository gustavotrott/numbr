#!/usr/bin/env node
const {build} = require('esbuild');
const {cpSync, mkdirSync, readdirSync, rmSync} = require('fs');
const {resolve, join} = require('path');

const distDir = resolve('dist');
const publicDir = resolve('public');

rmSync(distDir, {recursive: true, force: true});
mkdirSync(distDir, {recursive: true});

for (const entry of readdirSync(publicDir)) {
  const source = join(publicDir, entry);
  const target = join(distDir, entry);
  cpSync(source, target, {recursive: true});
}

build({
  entryPoints: ['web/runtime-client.ts'],
  bundle: true,
  format: 'iife',
  globalName: 'NumbrBundle',
  platform: 'browser',
  sourcemap: false,
  minify: true,
  outfile: resolve(distDir, 'numbr.js'),
  loader: {
    '.json': 'json',
  },
}).then(() => {
  console.log(`Static build ready at ${distDir}`);
}).catch(error => {
  console.error(error);
  process.exit(1);
});
