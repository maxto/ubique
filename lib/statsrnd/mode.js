/**
 * Descriptive Statistic
 */
 module.exports = function($u) {
/**
 * @method mode
 * @summary Most frequent value in an array of elements 
 * @description Unimodal mode
 * 
 * @param  {array} x array of values
 * @return {number}   
 *
 * @example
 * mode([1,3,2,3,4,4,5,6]);
 * //  3
 * 
 */
 $u.mode = function(x) {
  var counter = {},
  mode = [],
  max = 0;
  _x = ubique.sort(x);
  for (var i = 0; i < x.length; i++) {
    if (!(_x[i] in counter)) {
      counter[_x[i]] = 0;
    } else {
      counter[_x[i]]++;
    }
    if (counter[_x[i]] === max) {
      mode.push(_x[i]);
    } else 
    if (counter[_x[i]] > max) {
      max = counter[_x[i]];
      mode = [_x[i]];
    }
  }
  return mode[0];
}

}