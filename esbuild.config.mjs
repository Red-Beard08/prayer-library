import esbuild from 'esbuild';
import { readFileSync } from 'fs';
const prod = process.argv.includes('production');
const manifest = JSON.parse(readFileSync('manifest.json','utf8'));
await esbuild.build({entryPoints:['src/main.ts'],bundle:true,external:['obsidian'],format:'cjs',platform:'node',target:'es2018',outfile:'main.js',sourcemap:prod?false:'inline',minify:prod});
console.log(`Built Prayer Library ${manifest.version}`);
