module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-react',
    '@emotion/babel-preset-css-prop',
  ],
  plugins: [
    "@babel/plugin-proposal-class-properties"
  ]
};
