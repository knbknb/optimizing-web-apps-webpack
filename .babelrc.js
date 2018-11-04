module.exports = {
    presets: [
      ["@babel/preset-env",
        {
          debug: true,
          modules: false,
          targets: ["> 0.3%", "not IE < 12"],
        },
      ],
    ],

  }