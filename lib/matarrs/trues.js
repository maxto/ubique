/**
 * Array Creation and Concatenation
 */
 module.exports = function($u) {
/**
 * @method trues
 * @summary Create array of all trues
 * @description Create array of all trues
 * 
 * @param  {number|array|...} args  variable input arguments (max 2)
 * @return {number|matrix}     
 *
 * @example
 * ubique.trues(); // trues
 * ubique.trues(0); // []
 * ubique.trues(1); / [[trues]]
 * ubique.trues(2); // [[trues, trues], [trues, trues]]
 * ubique.trues([2,1]); // [[trues], [trues]]
 * ubique.trues(1,2); // [[trues, trues]]
 * ubique.trues(2,3); // [[trues, trues, trues], [trues, trues, trues]]
 */
 $u.trues = function() {
  if ($u.isundefined(arguments[0]) || $u.isempty(arguments[0])) {
    return true;
  }
  var _args = [];
  for (var i = 0;i < arguments.length; i++) {
    _args.push(arguments[i]);
  }
  if ($u.ismatrix(_args)) {_args = _args[0];}
  if (_args.length === 1) {_args = [_args[0],_args[0]];}
  return $u.matrix(_args,true);
}

}