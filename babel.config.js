module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    ["babel-plugin-styled-components", {
      "minify": true,
      "transpileTemplateLiterals": true
    }],
    ["@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ]
  ]
};