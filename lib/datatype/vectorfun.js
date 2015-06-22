/**
 * Structures
 */
 module.exports = function($u) {
/**
 * @method  vectorfun
 * @summary Apply a function to each vector column or row of a matrix 
 * @description Apply a function to each vector column or row of a matrix. The syntax is:
 * 
 * vectorfun(dim,x,func,arg1,arg2....)
 * 
 * @param  {number|string|boolean|...} args variable input arguments
 * @return {number|string|boolean|...}  
 *
 * @example
 * var testfun = function(a,b,c){return ubique.mean(a)*b+c;};
 * 
 * ubique.vectorfun(0,[[5,6,5],[7,8,-1]],testfun,5,10)
 * // [ [ 36.666667 ], [ 33.333333 ] ]
 * 
 * ubique.vectorfun(1,[[5,6,5],[7,8,-1]],testfun,5,10)
 * // [ [ 40, 45, 20 ] ]
 */
 $u.vectorfun = function() {
 	if (arguments.length < 3) {
 		throw new Error('not enough input arguments');
 	}
  var args = $u.argsarray.apply(null,arguments);
  var argslen = args.length;
  var dim = args[0];
  var x = args[1];
  var fun = args[2];
  var varargin = args.slice(3,args.length);
  if (dim !== 0 && dim !== 1) {
    throw new Error('dimension must be 0 (rows) or 1 (columns)');
  }
  if (!$u.isfunction(fun)) {
    throw new Error('third input argument must be a function');
  }
  if (dim === 1) {
    var ndim = $u.ncols(x);
    var narray = $u.getcol;
  }
  if (dim === 0) {
    var ndim = $u.nrows(x);
    var narray = $u.getrow;
  }
  if ($u.isarray(x)) {
    if ($u.isempty(varargin)) {
      return fun.apply(null,[x]);
    } 
    return fun.apply(null,[].concat([x]).concat(varargin));
  }
  var v = [];
  if ($u.ismatrix(x)) {
    for (var i = 0; i < ndim; i++) {
      var d = narray(x,i);
      var temp = fun.apply(null,[].concat([d]).concat(varargin));
      v.push(temp);
    }
  }
  if (dim === 1) {
    if ($u.isarray(v)) {
      return [v];
    }
    return $u.squeeze($u.transpose(v));
  }
  if (dim === 0) {
    if ($u.isarray(v)) {
      return $u.transpose(v);
    }
  }
  return $u.squeeze(v);
}
}