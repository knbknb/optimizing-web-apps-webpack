// import webpack from '../javascript-development-environment/webpack.config.dev'
const webpack = require("webpack"); // needed for loading plugins
const path = require("path");
const merge = require("webpack-merge");
const StatsGraphPlugin = require("./StatsGraphPlugin");

// eslint no-unexpected-unnamed-function: 0
module.exports = (env) => {
  const isDevelopment = env.NODE_ENV === "development";
  console.info(`This will be a ${env.NODE_ENV} build`);

  const baseConfig = {
    entry: ["./app/app.js"],
    output: {
      // must be an absolute path
      path: path.resolve(__dirname, "app/dist"),
      filename: "app.bundle.js",
      publicPath: "/dist/",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env", { debug: true, modules: false }],
              ],

            },
          },
        }],
    },
    devServer: {
      contentBase: [
        path.resolve(__dirname, "app"),
        path.resolve(__dirname, "app", "klondike")],
      publicPath: "/dist/",
    },
    plugins: [
      new StatsGraphPlugin(),
      new webpack.DefinePlugin({
        ENV_IS_DEVELOPMENT: isDevelopment,
        "process.env.NODE_ENV": JSON.stringify(isDevelopment ? "development" : "production"),

      }),
    ],
  };
  if (isDevelopment) {
    return merge(baseConfig, {
      plugins: [new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
      ],
      devServer: {
        hotOnly: true,
        watchContentBase: false,
      },
    });
  }

  return baseConfig;
};
