/**
 * Sorting and Reshaping Arrays
 */
 module.exports = function($u) {
/**
 * @method mergesort
 * @summary Sort array in ascending/descending order
 * @description  Mergesort is a divide and conquer algorithm that was invented by John von Neumann.
 * A merge sort works as follows:
 * 
 * 1 - Divide the unsorted list into n sublists, each containing 1 element (a list of 1 element is considered sorted).
 * 2 - Repeatedly merge sublists to produce new sorted sublists until there is only 1 sublist remaining. This will be the sorted list.
 * 
 * Source: [Merge sort](http://en.wikipedia.org/wiki/Merge_sort)
 *
 * Returns sorted values with sorted indexes as array of array (matrix)
 * 
 * @param  {array} x array of elements
 * @param  {string} mode sorting direction, "ascend" (default) or "descend"
 * @return {matrix}   
 *
 * @example
 * // mergesort with input values and indexes
 * ubique.mergesort([[9,-3,2,-12,0,1],[0,1,2,3,4,5]]);
 * // [ [ -12, -3, 0, 1, 2, 9 ], [ 3, 1, 4, 5, 2, 0 ] ]
 *
 * // with only an array of input values
 * ubique.mergesort([9,-3,2,-12,0,1]);
 * // [ [ -12, -3, 0, 1, 2, 9 ], [ 3, 1, 4, 5, 2, 0 ] ]
 * 
 * ubique.mergesort([9,-3,2,-12,0,1],'descend');
 * // [ [ 9, 2, 1, 0, -3, -12 ], [ 0, 2, 5, 4, 1, 3 ] ]
 */
 $u.mergesort = function(x,mode) {
  var self = this;
  if (arguments.length === 0) {
    throw new Error('not enough input arguments');
  }
  if ($u.isarray(x)) {
    x = [x,$u.colon(0,x.length-1)];
  }
  var len = x[0].length;
  mode = mode || 'ascend';
  if (len < 2) {
    return x;
  }
  var cx = parseInt(len / 2);
  var sx = x[0].slice(0, cx);
  var sxi = x[1].slice(0,cx);
  var dx  = x[0].slice(cx, len);
  var dxi = x[1].slice(cx,len);
  var _sx = [sx,sxi];
  var _dx = [dx,dxi];

  var merge = function(sxarr,dxarr,mode) {
    var sorted = [];
    var idx = [];
    while (sxarr[0].length && dxarr[0].length) {
      if (mode === 'ascend') {
        var compare = sxarr[0][0] <= dxarr[0][0];
      } else 
      if (mode === 'descend') {
        var compare = sxarr[0][0] >= dxarr[0][0];
      } else {
        throw new Error('sorting must be "ascend" or "descend"');
      }
      if (compare) {
        sorted.push(sxarr[0].shift());
        idx.push(sxarr[1].shift());
      } else {
        sorted.push(dxarr[0].shift());
        idx.push(dxarr[1].shift());
      }
    }
    while (sxarr[0].length) {
      sorted.push(sxarr[0].shift());
      idx.push(sxarr[1].shift());
    }
    while (dxarr[0].length) {
      sorted.push(dxarr[0].shift());
      idx.push(dxarr[1].shift());
    }
    return [sorted,idx];
  }
  return merge(self.mergesort(_sx,mode),self.mergesort(_dx,mode),mode);
}
}
