// ESM 
// commonJS

// import autoprefixer from 'autoprefixer'
// const autoprefixer = require('autoprefixer')

// export {
//   plugins: [
//     autoprefixer
//   ]
// }
// module.exports = {
//   plugins: [
//     autoprefixer
//   ]
// }

const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  // 진입점 설정
  entry: './js/main.js',

  // 결과물 반환 설정
  output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.s?css$/,
        // use는 밑부분부터 실행됨
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      },
    ]
  },

  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}