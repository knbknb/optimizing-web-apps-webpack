## Extra Commands and Notes

#### Command to generate app.bundle.js with webpack 4:

```{sh}
npx webpack-cli --mode=none --output-path=./dist app/app.js -o dist/app.bundle.js --verbose
```

Creates a bundle but does neither compress nor obfuscate it.

`--verbose` is optional

#### Command to generate graphics

Use package [webpack-stats-graph](https://www.npmjs.com/package/webpack-stats-graph)

1. `cd ~/code/git/_my/js-stuff/pluralsight-webpack-optimizing-apps`
1. `npm install webpack-stats-graph`
1. Generate a `stats.json` file:
   `npx webpack-cli --mode=none --entry $(pwd)/app/app --json > stats.json`
1. `mkdir statsgraph-01; mv stats.json statsgraph-01; cd statsgraph-01`
1. `webpack-stats-graph`

#### npx Documentation:

https://github.com/npm/npm/releases/tag/v5.2.0

Introducing npx: an npm package runner:

https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b
