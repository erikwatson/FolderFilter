module.exports = {
  entry: {
    electronMain: './src/main/main.js',
    electronRender: './src/renderer/main.js'
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },

      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },

  output: {
    filename: '[name].js'
  },

  target: 'electron-main'
}