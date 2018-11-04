## Course Details

- [Initial code](https://github.com/g0t4/optimizing-web-apps-webpack/tree/webpack-javascript-start)
- branches with intermediate results exist
- [Final code](https://github.com/g0t4/optimizing-web-apps-webpack/tree/webpack-javascript-end)

**Course contents**

- Course #1 (this repo) is bundling and transpiling JavaScript with **Webpack v3**.
- Course #2 _Webpack: Beyond JavaScript_ will be about bundling and transpiling/compiling everything else in a front end app: styles, layouts, images, webassembly, etc.
- Course #3 _Webpack: Bundle Optimization_ will be about optimizing the bundles!

## Updates concerning Webpack v4

**Nothing has fundamentally changed in webpack v4 that obviates what was covered in Course #1 (webpack v3).**

**However do NOT upgrade to webpack 4 unless you have a deep understanding of the structure of this repo.**

(Links below are based on commit bb4c2d1 from Sept 2018, in [master branch](https://github.com/webpack/webpack/tree/bb4c2d18f7d62524b15c2b67cceca201832aee28), in particular, the line numbers the links are referring to).

- **Important new features in Webpack v4**:
  - CLI extracted to new [`webpack-cli`](https://github.com/webpack/webpack-cli/) package
    - Just `npm install webpack-cli` instead of `npm install webpack`
    - `webpack` package will only provide the API, and [optionally install](https://github.com/webpack/webpack/blob/master/bin/webpack.js#L59-L69) `webpack-cli`
  - `webpack.config.js` option `entry` [defaults to `./src`](https://github.com/webpack/webpack/blob/master/lib/WebpackOptionsDefaulter.js#L34), must be changed to `./app` for this repo to work.
  - `webpack.config.js` option [`output.path` defaults to absolute path to `./dist`](https://github.com/webpack/webpack/blob/master/lib/WebpackOptionsDefaulter.js#L152)
  - New, required `mode` config option adds common 'optimization plugins'.
    - **This is simply a new configuration style!** All you're doing is turning off some webpack features, notably bundle optimization.
    - Most of the optimization plugins **won't be covered** until Course #3 (Optimization and Packaging), however:
      - This new `mode` compliments techniques shown in Course #1's `Dev Isn't Prod` module.
      - It is necessary that flag `mode=development` is set (not `mode=none`)
      - Then, the following new flags relate to topics covered in Course #1:
        - [`optimization.namedModules` adds NamedModulesPlugin](https://github.com/webpack/webpack/blob/master/lib/WebpackOptionsDefaulter.js#L275) (on its way out in Webpack v5)
        - [`devtool` defaults to `eval`](https://github.com/webpack/webpack/blob/master/lib/WebpackOptionsDefaulter.js#L36-L40)
        - [`output.pathinfo` defaults to `make` in development mode](https://github.com/webpack/webpack/blob/master/lib/WebpackOptionsDefaulter.js#L154)
      - See `mode` => `optimization.*` mapping in [`WebpackOptionsDefaulter.js`](https://github.com/webpack/webpack/blob/master/lib/WebpackOptionsDefaulter.js#L203-L322) (search for `mode`)
      - See `optimization.*` => plugins mapping in [`WebpackOptionsApply.js`](https://github.com/webpack/webpack/blob/master/lib/WebpackOptionsApply.js#L341-L448) (search for `optimization`)
    - **To use webpack v4 with this Course set `mode: "none"`** to disable this new configuration style.
      - You can still incrementally add back optimizations and look at the bundle impact one at a time. Doing this is helpful to learn what is going on under the hood.
