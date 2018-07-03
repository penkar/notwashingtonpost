var path = require('path');
module.exports = {
  context:__dirname,
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },
  module:{
    rules:[{
      exclude:/node_modules/,
      test:/\.scss$/,
      use:["style-loader","css-loader","sass-loader"]
    },{
      test:/\.ttf/,
      exclude:/node_modules/,
      use:{ loader:'url-loader' }
    },{
      test:/\.js$/,
      exclude:/node_modules/,
      use: {
        loader:'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
      }
    }]
  },
  devtool:'source-map'
}
