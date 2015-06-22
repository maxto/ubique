/**
 * Array Creation and Concatenation
 */
 module.exports = function($u) {
/**
 * @method matrix
 * @summary Create a matrix object
 * @description Create a matrix object with minimum 1 argument, max 3 arguments. The first arg can be a number or array, the last one is the value to
 * replicate in the matrix. Default value is NULL. Example: a matrix(2) returns an array of array with dimension 2x2, a matrix(2,3) or matrix([2,3]) a matrix 
 * with dimension 2x3 and values equal to NULL.
 * 
 * @param  {number|string|boolean|array|...} args variable input arguments (max 3)
 * @return {matrix}       
 *
 * @example
 * ubique.matrix(0);
 * // [ [] ]
 *
 * ubique.matrix([0,0]);
 * // [ [] ]
 * 
 * ubique.matrix(2);
 * // [ [ null, null ], [ null, null ] ]
 * 
 * ubique.matrix([2,3]);
 * // [ [ null, null, null ], [ null, null, null ] ]
 * 
 * ubique.matrix(2,3);
 * // [ [ null, null, null ], [ null, null, null ] ]
 * 
 * ubique.matrix([2,3],-1);
 * // [ [ -1, -1, -1 ], [ -1, -1, -1 ] ]
 * 
 *
 * ubique.matrix(3,1,'matrix');
 * // [ [ 'matrix' ], [ 'matrix' ], [ 'matrix' ] ]
 *
 * ubique.matrix(0,5,true);
 * // [ [] ]
 */
 $u.matrix = function() {
 	if (arguments.length === 0 ) {
 		throw new Error('not enough input arguments');
 	}
  var args = $u.argsarray.apply(null,arguments);
  var nargs = args.length;

  var _matrix = function(x,y,val) {
    var mat = [];
    for (var i = 0; i < x; i++) {
      mat[i] = [];
      for (var j = 0; j < y; j++) {
        mat[i][j] = val;
      }
    }
    return mat;
  }
  if ($u.isempty(args)) {
    return [[]];
  }
  if (nargs === 1) {
    if ($u.isnumber(args[0])) {
      if (args[0] === 0) {
        return [[]];
      }
      return _matrix(args[0],args[0],null);
    } else
    if ($u.isarray(args[0])) {
      if (args[0].length === 1) {
        if (args[0][0] === 0) {
          return [[]];
        } else {
          return _matrix(args[0][0],args[0][0],null);
        }
      }
      if (args[0][0] === 0 || args[0][1] === 0) {
        return [[]];
      }
      return _matrix(args[0][0],args[0][1],null);
    } else {
      throw new Error('unknwon input type');
    }
  } else
  if (nargs === 2) {
    if ($u.isnumber(args[0]) && $u.isnumber(args[1])) {
      return _matrix(args[0],args[1],null);
    }
    return _matrix(args[0][0],args[0][1],args[1]);
  } else
  if (nargs === 3) {
    if (args[0] === 0 || args[1] === 0) {
      return [[]];
    }
    return _matrix(args[0],args[1],args[2]);
  } else {
    throw new Error('too manny input arguments');
  }
}

}
