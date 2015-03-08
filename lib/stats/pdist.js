/**
 * Distance metrics
 */
module.exports = function($u) {
/**
 * @method pdist
 * @summary Pairwise distance between two sets of observations
 * @description  Compute distance between two array with differente methods:
 * euclidean, manhattan, chebycheb, hamming
 * 
 * @param  {array} x array of values in X
 * @param  {array} y array of values in Y
 * @param  {string} mode methods: 'euclidean','manhattan','chebychev','hamming' (def: 'euclidean')
 * @return {number}
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * 
 * ubique.pdist(x,y,'euclidean');
 * // 0.170532
 * ubique.pdist(x,y,'manhattan');
 * // 0.471
 * ubique.pdist(x,y,'chebychev');
 * // 0.087
 * ubique.pdist(x,y,'hamming');
 * // 10
 */
$u.pdist = function(x,y,mode) {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  if (arguments.length === 2) {
    mode = 'euclidean';
  }
  var len = x.length,
    out = 0;
  switch (mode) {
    case "euclidean":
      out = $u.sqrt($u.sum($u.power($u.minus(x,y),2)));
      return out;
      break;
    case "manhattan": 
      out = $u.sum($u.abs($u.minus(x,y)));
      return out;
      break;
    case "chebychev": 
      out = $u.max($u.abs($u.minus(x,y)));
      return out;
      break;
    case "hamming": 
      for (var i=0;i<len;i++) {
        if (x[i] !== y[i]) {
          out++;
        }
      }
      return out;
      break;
    default:
      throw new Error('Invalid method');
    }
}

}