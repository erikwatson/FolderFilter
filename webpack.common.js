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
      }
    ]
  },

  output: {
    filename: '[name].js'
  },

  target: 'electron-main'
}