/**
 * Performance metrics
 */
 module.exports = function($u) {
/**
 * @method annreturn
 * @summary Annualized Return
 * @description Average annualized returns over a period, convenient when comparing returns.
 * It can be an Arithmetic or Geometric (default) average return: if compounded with itself the
 * geometric average will be equal to the cumulative return
 * 
 * @param  {array|matrix} x asset/portfolio returns
 * @param  {number} scale frequencey of data. 1: yearly, 4: quarterly, 12: monthly, 52: weekly, 252: daily
 * @param  {string} type 'geometric' or 'simple' (def: 'geometric')
 * @return {number|array|matrix}   
 *
 * @example
 * var x = [0.003,0.026,0.015,-0.009,0.014,0.024,0.015,0.066,-0.014,0.039];
 * var y = [-0.005,0.081,0.04,-0.037,-0.061,0.058,-0.049,-0.021,0.062,0.058];
 * var cat = ubique.cat;
 * 
 * ubique.annreturn(x,12);
 * // 0.233815
 *
 * ubique.annreturn(cat(1,x,y),12);
 * // [ [ 0.233815, 0.14509 ] ]
 */
 $u.annreturn = function(x,scale,type,dim) {
 	if (arguments.length === 0) {
 		throw new Error('not enough input arguments');
 	}
 	var scale = scale || 252,
  type = type || 'geometric',
  dim = dim || 1;

  var _annreturn = function(arr,scale,type) {
    var n = arr.length;
    if (type === 'geometric') {
      return $u.power($u.prod($u.plus(1,arr)),(scale/n)) - 1;
    } else
    if (type === 'simple') {
      return $u.mean(arr) * scale;
    } else {
      throw new Error('unknown type');
    }
  }
 	 if ($u.isnumber(x)) {
    return NaN;
  }
  if ($u.isarray(x)) {
    return  _annreturn(x,scale,type);
  }
  return $u.vectorfun(x,function(val){return _annreturn(val,scale,type);},dim);
 }

}
