# webpack-obfuscator-source-map-generation-repro

This repo reproduces the bug of [webpack-obfuscator@0.18.7](https://github.com/javascript-obfuscator/webpack-obfuscator), 
which is reported and fixed by pull request [Fix source maps generation](https://github.com/javascript-obfuscator/webpack-obfuscator/pull/59).

This bug occurs only when you try to generate source map with input source maps.
The obfuscator passes the code rather than the source map to SourceMapConsumer.

## Steps to reproduce 

Assuming you are using [yarn](https://yarnpkg.com/)

1. `yarn install`
2. `yarn build`

