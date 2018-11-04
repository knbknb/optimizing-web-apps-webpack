module.exports = {
    "extends": ["airbnb-base",
    // "eslint:recommended",
    // 'plugin:import/errors',
    // 'plugin:import/warnings'
  ],   
        "root": true,
        "globals": {
          "angular": false,
          "_": false,
          "process": false,
          "module": false,
          "ENV_IS": false,
          "ENV_IS_DEVELOPMENT": false
        },
        "parserOptions": {
          "ecmaVersion": 7,
          "sourceType": "module"
        },
        "rules": {
          "no-console": 0,
          "no-use-before-define": [
            2,
            "nofunc"
          ],
          "quotes": ["error", "double"],
        }    
};