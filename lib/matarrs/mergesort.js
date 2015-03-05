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
 * @param  {array} x array of elements
 * @param  {string} mode sorting direction, "ascend" (default) or "descend"
 * @return {array}   
 *
 * @example
 * var x = [3,1,-1,0,5];
 * 
 * ubique.mergesort([3,1,-1,5],"ascend");
 * // [-1, 1, 3, 5]
 * ubique.mergesort(x,"descend");
 * // [5, 3, 1, 0, -1]
 */
 $u.mergesort = function(x,mode) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	if (arguments.length === 1) {
 		mode = 'ascend';
 	}
 	if (!$u.isarray(x)) {
 		throw new Error('input must be an array');
 	}
 	var len = x.length;
 	if (len < 2) {
 		return x;
 	}
 	var cx = parseInt(len / 2),
 	sx = x.slice(0, cx),
 	dx  = x.slice(cx, len);

 	var merge = function(sx,dx,mode) {
 		var out = [];
 		while (sx.length && dx.length) {
 			if (mode === 'ascend') {
 				var compare = sx[0] <= dx[0];
 			} else 
 			if (mode === 'descend') {
 				var compare = sx[0] >= dx[0];
 			} else {
 				throw new Error('sorting must be "ascend" or "descend"');
 			}
 			if (compare) {
 				out.push(sx.shift());
 			} else {
 				out.push(dx.shift());
 			}
 		}
 		while (sx.length) {
 			out.push(sx.shift());
 		}
 		while (dx.length) {
 			out.push(dx.shift());
 		}
 		return out;
 	}
 	return merge($u.mergesort(sx,mode),$u.mergesort(dx,mode),mode);
 }
}
