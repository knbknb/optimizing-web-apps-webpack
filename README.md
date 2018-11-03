
## Course Details

- [Initial code](https://github.com/g0t4/optimizing-web-apps-webpack/tree/webpack-javascript-start)
- branches with intermediate results exist
- [Final code](https://github.com/g0t4/optimizing-web-apps-webpack/tree/webpack-javascript-end)


**Course contents**

- Course #1 (this repo) is bundling and transpiling JavaScript with **Webpack v3**.
- Course #2 *Webpack: Beyond JavaScript* will be about bundling and transpiling/compiling everything else in a front end app: styles, layouts, images, webassembly, etc.
- Course #3 *Webpack: Bundle Optimization* will be about optimizing the bundles!

## Updates concerning Webpack v4

- Webpack v4 ([based on commit bb4c2d1](https://github.com/webpack/webpack/commit/bb4c2d18f7d62524b15c2b67cceca201832aee28))
    - **Nothing has fundamentally changed in webpack v4 that obviates what was covered in Course #1.**
    - CLI extracted to new `webpack-cli` package
        - Just **`npm install webpack-cli` instead of `npm install webpack`**
        - `webpack` package will only provide the API
        - See redirection in webpack package's [`bin\webpack.js`](https://github.com/webpack/webpack/blob/master/lib/webpack.js#L59)
    - [`entry` defaults to `./src`](https://github.com/webpack/webpack/bblob/master/lib/WebpackOptionsDefaulter.js#L34)
    - [`output.path` defaults to absolute path to `./dist`](https://github.com/webpack/webpack/blob/master/lib/WebpackOptionsDefaulter.js#L152)
    - New, required `mode` config adds common 'optimization plugins'
        - **This is simply a new configuration style!**
        - Matching `--mode` CLI argument
        - Intended to be `production` or `development` to optimize accordingly
        - Coarse `mode` maps to new, granular `optimization.*` settings. Most of these are flags to enable/disable a plugin.
            - See `mode` => `optimization.*` mapping in [`WebpackOptionsDefaulter.js`](https://github.com/webpack/webpack/blob/master/lib/WebpackOptionsDefaulter.js#L203-L322) (search for `mode`)
            - See `optimization.*` => plugins mapping in [`WebpackOptionsApply.js`](https://github.com/webpack/webpack/blob/master/lib/WebpackOptionsApply.js#L341-L448) (search for `optimization`)
        - **To use webpack v4 with Course #1 set `mode: "none"`** to disable this new configuration style.
            - All you're doing is turning off some webpack features, notably bundle optimization. Doing this is helpful to learn what is going on under the hood. You can incrementally add back optimizations and look at the bundle impact one at a time.
            - This is likely how I will teach going forward even with v4.
        - **Most of the optimization plugins won't be covered until Course #3 (Optimization and Packaging) so this is largely irrelevant.** The following new flags relate to topics covered in Course #1 `if mode == 'development'`:
            - [`optimization.namedModules` adds NamedModulesPlugin](https://github.com/webpack/webpack/blob/master/lib/WebpackOptionsDefaulter.js#L275)
            - [`devtool` defaults to `eval`](https://github.com/webpack/webpack/blob/master/lib/WebpackOptionsDefaulter.js#L36-L40)
            - [`output.pathinfo` defaults to `make` in development mode](https://github.com/webpack/webpack/blob/master/lib/WebpackOptionsDefaulter.js#L154)
        - This new `mode` compliments techniques shown in Course #1's `Dev Isn't Prod` module.


