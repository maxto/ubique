var webpack = require('webpack');

var wpcompile = webpack({
  cache: true,
  entry: './index.js',
  output: {
    library: 'ubique',
    libraryTarget: 'umd',
    path: './dist',
    filename: 'ubique.js'
  }
});

wpcompile.run(function(err,stats) {
  if (err) {
    console.log(err);
  }
  console.log('done!');
});