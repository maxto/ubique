/**
 * Array Creation and Concatenation
 */
 module.exports = function($u) {
/**
 * @method cat
 * @summary Concatenate arrays and matrices
 * @description Concatenate arrays and matrices along specified dimension as first argument.
 * Number size 1x1, Array size 1xN, Matrix size MxN
 *              
 * @param  {number|array|matrix...} args variable arguments (0:rows, 1:columns)
 * @return {array|matrix}     
 *
 * @example
 * var a = [[5,6,5],[7,8,-1]];
 * var b = [[-1,3,-1],[4,5,9]];
 * var c = [5,6,3];
 * var d = [0.5,-3,2.3];
 * var f = [[3, 2], [5, 2]];
 *
 * // Vertical Concatenation (DIM = 0)
 * 
 * ubique.cat(0,1,2,3,4);
 * // [ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]
 *
 * ubique.cat(0,1,2,[3],4);
 * // [ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]
 *
 * ubique.cat(0,1,2,[[3],[4]]);
 * // [ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]
 *
 * ubique.cat(0,[1],2,3,[4]);
 * // [ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]
 *
 * ubique.cat(0,c,d);
 * // [ [ 5, 6, 3 ], [ 0.5, -3, 2.3 ] ]
 *
 * ubique.cat(0,c,d,a);
 * // [ [ 5, 6, 3 ], [ 0.5, -3, 2.3 ], [ 5, 6, 5 ], [ 7, 8, -1 ] ]
 *
 * ubique.cat(0,[[1]],[2],3,4);
 * // [ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]
 *
 * ubique.cat(0,a,c);
 * // [ [ 5, 6, 5 ], [ 7, 8, -1 ], [ 5, 6, 3 ] ]
 *
 * // Horizontal Concatenation (DIM = 1)
 *
 * ubique.cat(1,1,2,3,4);
 * // [ [ 1, 2, 3, 4 ] ]
 *
 * ubique.cat(1,1,2,[3],4);
 * // [ [ 1, 2, 3, 4 ] ]
 *
 * ubique.cat(1,1,2,[3,4]);
 * // [ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]
 *
 * ubique.cat(1,[1],2,3,4);
 * // [ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]
 * 
 * ubique.cat(1,[[1]],2,3,4);
 * // [ [ 1 ], [ 2 ], [ 3 ], [ 4 ] ]
 * 
 * ubique.cat(1,c,5);
 * // [ [ 5, 6, 3, 5 ] ]
 * 
 * ubique.cat(1,c,d);
 * // [ [ 5, 6, 3, 0.5, -3, 2.3 ] ]
 * 
 * ubique.cat(1,[[2,3,4,5]],c,d);
 * // [ [ 2, 3, 4, 5, 5, 6, 3, 0.5, -3, 2.3 ] ]
 */
 $u.cat = function() {
 	var _args = arguments;
 	var nargs = arguments.length;
  var out = [];
  if (nargs < 2) {
    throw new Error('not enough input arguments');
  }
  var dim = _args[0];
  if (dim !== 0 && dim !== 1) {
    throw new Error('dimension must be 0 (rows) or 1 (columns)');
  }

  if (dim === 0) {
    for (var i = 1;i < nargs - 1;i++) {
     var tmp = _args[i + 1];
     if ($u.isnumber(_args[1])) {  // number
      if (i === 1) {
        out = [[_args[1]]];
      }
      if ($u.isnumber(tmp)) {
        out.push([tmp]);
      } else
      if ($u.isarray(tmp) && $u.ncols(tmp) === 1) {
        out.push(tmp);
      } else
      if ($u.ismatrix(tmp) && $u.ncols(tmp) === 1) {
        out = out.concat(tmp);
      } else {
        throw new Error('concatenation dimension mismatch');
      }
    } else 
    if ($u.isarray(_args[1])) { // array
      if (i === 1) {
        out = [_args[1]]; 
      }
      if ($u.isnumber(tmp) && $u.ncols(out) === 1) {
        out.push([tmp]);
      } else
      if ($u.isarray(tmp) && $u.ncols(tmp) === $u.ncols(out)) {
        out.push(tmp);
      } else
      if ($u.ismatrix(tmp) && $u.ncols(tmp) === $u.ncols(out)) {
        out = out.concat(tmp);
      } else {
        throw new Error('concatenation dimension mismatch');
      }
    } else 
    if ($u.ismatrix(_args[1])) { // matrix
      if (i === 1) {
        out = _args[1]; 
      }
      if ($u.isnumber(tmp) && $u.ncols(out) === 1) {
        out.push([tmp]);
      } else
      if ($u.isarray(tmp) && $u.ncols(tmp) === $u.ncols(out)) {
        out.push(tmp);
      } else
      if ($u.ismatrix(tmp) && $u.ncols(tmp) === $u.ncols(out)) {
        out = out.concat(tmp);
      } else {
        throw new Error('concatenation dimension mismatch');
      }
    } else {
      throw new Error('unknown input arguments');
    }
  }
  return out;
}

if (dim === 1) {
  var out = [];
  for (var i = 0;i < nargs - 1;i++) {
    var tmp = _args[i + 1];
    if ($u.isnumber(tmp)) {
      tmp = [[tmp]];
    }
    if ($u.isarray(tmp)) {
      tmp = [tmp];
    }
    if (i === 0) {
      out = $u.clone(tmp);
    } else {
      for (var j = 0;j < $u.nrows(out);j++) {
        var row = out[j];
        row = row.concat(tmp[j]);
        out[j] = row;
      }
    }
  }
  return out;
}
}

}