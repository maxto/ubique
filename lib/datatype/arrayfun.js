/**
 * Structures
 */
 module.exports = function($u) {
/**
 * @method arrayfun
 * @summary Apply function to each element of an array or matrix
 * @description Apply function to each element of an array or matrix. First arg is input element, the second one the function to apply, 
 * then the parameters of the function.
 * 
 * @param  {number|string|boolean|...} args variable input arguments
 * @return {number|string|boolean|...}     
 *
 * @example
 * ubique.arrayfun([1.4,2.3,3],Math.log);
 * // [ 0.336472, 0.832909, 1.098612 ]
 * 
 * ubique.arrayfun([1.4,0,-10],ubique.sign);
 * // [ 1, 0, -1 ]
 * 
 * ubique.arrayfun([[5,6],[1,3]],Math.pow,3);
 * // [ [ 125, 216 ], [ 1, 27 ] ]
 *
 * ubique.arrayfun([['cat','concat'],['cattle','catch the catfish']],ubique.strfind,'cat');
 * // [ [ [ 0 ], [ 3 ] ], [ [ 0 ], [ 0, 10 ] ] ]
 *
 * ubique.arrayfun([null,true,'hello',5,NaN],ubique.isnull);
 * // [ true, false, false, false, false ]
 *
 * ubique.arrayfun([null,true,'hello',5,NaN],ubique.islogical);
 * // [ false, true, false, false, false ]
 *
 * ubique.arrayfun([null,true,'hello',5,NaN],ubique.isstring);
 * // [ false, false, true, false, false ]
 *
 * ubique.arrayfun([null,true,'hello',5,NaN],ubique.isnumber);
 * // [ false, false, false, true, true ]
 *
 * ubique.arrayfun([null,true,'hello',5,{},undefined,'NaN',NaN],ubique.isnan);
 * // [ false, false, false, false, false, false, false, true ]
 */
 $u.arrayfun = function() {
  if (arguments.length < 2) {
    throw new Error('not enough input arguments');
  }
  var args = $u.argsarray.apply(null,arguments);
  var x = args[0];
  var fun = args[1];
  if (!$u.isfunction(fun)) {
    throw new Error('second input argument must be a function');
  }
  if ($u.isarray(x)) {
    return x.map(function(a) {
      return fun.apply(null,[].concat(a,args.slice(2,args.length)));
    });
  }
  if ($u.ismatrix(x)) {
    return x.map(function(a) {
      return a.map(function(b) {
        return fun.apply(null,[].concat(b,args.slice(2,args.length)));
      });
    });
  }
  return fun.apply(null,[].concat(x,args.slice(2,args.length)));
}

}