var webpack = require('webpack');

var compiler = webpack({
  cache: true,
  entry: './ubique',
  output: {
    library: 'ubique',
    libraryTarget: 'umd',
    path: './dist',
    filename: 'ubique.js'
  }
});

compiler.run(function(err,stats) {
  if (err) {
    console.log(err);
  }
  console.log('built ubique');
});