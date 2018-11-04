## Extra Commands and Notes

`npm run start` watches `webpack.config.js` via `nodemon`, and performs hot module replacement via `webpack-dev-server`.

#### Command to generate app.bundle.js with webpack 4:

```{sh}
npx webpack --mode=none --output-path=./dist app/app.js -o dist/app.bundle.js --verbose
```

#### Command to generate app.bundle.js with webpack 4:

First, create a JS bundle but neither compress nor obfuscate it:

```{sh}
npx webpack-cli --mode=none --output-path=./dist app/app.js -o dist/app.bundle.js --verbose
```

(`--verbose` is optional)

#### Command to generate graphics

Second, create a webpage with embedded svg, using package [webpack-stats-graph](https://www.npmjs.com/package/webpack-stats-graph)

1. `cd ~/code/git/_my/js-stuff/pluralsight-webpack-optimizing-apps`
1. `npm install webpack-stats-graph` (run once)
1. Generate a `stats.json` file with webpack v3:
   `npx webpack app/app.js --json --output-filename app.bundle.js > stats.json`.
1. Alternatively, generate a `stats.json` file with webpack v4:
   `npx webpack-cli --mode=none --entry $(pwd)/app/app --json > stats.json`
1. `npx webpack-stats-graph`
1. `cp -vr statsgraph statsgraph-my-run` (save it to protect from being overwritten)

#### npx Documentation:

https://github.com/npm/npm/releases/tag/v5.2.0

Introducing npx: an npm package runner:

https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b

#### Note

Output of `webpack-dev-server --help` is intermingled with `webpack --help`.
