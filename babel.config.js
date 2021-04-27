module.exports = (api) => {
  api.cache(false)
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: 'entry',
          corejs: '3',
          "modules": "commonjs",
          loose: true,
          // debug: true
        }
      ],
      "@babel/preset-react"
    ],
    plugins: [
      /* [
        'import',
        {
          "libraryName": "antd",
          "style": true, // css
        }
      ], */
      [
        "@babel/plugin-transform-runtime",
        {
          // "absoluteRuntime": false,
          "corejs": false,
          "helpers": true,
          "regenerator": false,
        }
      ],
      ["@babel/plugin-proposal-class-properties", {
        loose: true
      }]
    ],
  };
};
