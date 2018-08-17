

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jp?g|gif)$/,
        use: [
          {
              loader: 'url-loader',
              options: {
              limit: 8192,
              mime-type: 'image/jpg',
              fallback: 'responsive-loader'
            },

          }
        ]
      }
    ]
  }
}
