/**
 * Numeric Types
 */
 module.exports = function($u) {
/**
 * @method nan
 * @summary Create array of all NaN
 * @description Create array of all NaN
 * 
 * @param  {number|array|...} args  variable input arguments (max 2)
 * @return {number|matrix}     
 *
 * @example
 * ubique.NaN(); // NaN
 * ubique.NaN(0); // []
 * ubique.NaN(1); / [[NaN]]
 * ubique.NaN(2); // [[NaN, NaN], [NaN, NaN]]
 * ubique.NaN([2,1]); // [[NaN], [NaN]]
 * ubique.NaN(1,2); // [[NaN, NaN]]
 * ubique.NaN(2,3); // [[NaN, NaN, NaN], [NaN, NaN, NaN]]
 */
 $u.nan = function() {
  if ($u.isundefined(arguments[0]) || $u.isempty(arguments[0])) {
    return NaN;
  }
  var _args = [];
  for (var i = 0;i < arguments.length; i++) {
    _args.push(arguments[i]);
  }
  if ($u.ismatrix(_args)) {_args = _args[0];}
  if (_args.length === 1) {_args = [_args[0],_args[0]];}
  return $u.matrix(_args,NaN);
}

}