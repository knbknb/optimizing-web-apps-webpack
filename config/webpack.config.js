//import webpack from '../javascript-development-environment/webpack.config.dev'

const baseConfig = env => {
    return require("./config/webpack.base.js")(env);
};
const extraConfig = env => {
  return require(`./config/webpack.${Object.keys(env)[0]}.js`)(env);
};
const config = baseConfig();
if(true){

  config.plugins.push(extraConfig.plugins[0]);
}
module.exports = config;
