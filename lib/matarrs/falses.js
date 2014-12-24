/**
 * Array Creation and Concatenation
 */
 module.exports = function($u) {
/**
 * @method falses
 * @summary Create array of all falses
 * @description Create array of all falses
 * 
 * @param  {number|array|...} args  variable input arguments (max 2)
 * @return {number|matrix}     
 *
 * @example
 * ubique.falses(); // falses
 * ubique.falses(0); // []
 * ubique.falses(1); / [[falses]]
 * ubique.falses(2); // [[falses, falses], [falses, falses]]
 * ubique.falses([2,1]); // [[falses], [falses]]
 * ubique.falses(1,2); // [[falses, falses]]
 * ubique.falses(2,3); // [[falses, falses, falses], [falses, falses, falses]]
 */
 $u.falses = function() {
  if ($u.isundefined(arguments[0]) || $u.isempty(arguments[0])) {
    return false;
  }
  var _args = [];
  for (var i = 0;i < arguments.length; i++) {
    _args.push(arguments[i]);
  }
  if ($u.ismatrix(_args)) {_args = _args[0];}
  if (_args.length === 1) {_args = [_args[0],_args[0]];}
  return $u.matrix(_args,false);
}

}