/**
 * Special Functions
 */
 module.exports = function($u) {
/**
 * @method  erfcinv
 * @summary Inverse complementary error function
 * @description Inverse complementary error function
 * 
 * It satisfies y = erfc(x) for 2 >= y >= 0 with -Inf <= x <= Inf
 * 
 * @param  {number} y real value in range [2,0]
 * @return {number}   
 *
 * @example
 * ubique.erfcinv(1.5);  // -0.476936236121904
 */
 $u.erfcinv = function(y) {
    if (y >= 2) {return -Infinity;}
    if (y <= 0) {return Infinity;}
    var z = 0,
    _y = (y < 1) ? y : 2 - y,
    t = Math.sqrt(-2 * Math.log(_y / 2));
    x = -0.70711 * ((2.30753 + t * 0.27061) / (1 + t * (0.99229 + t * 0.04481)) - t);
    for (var i = 0; i < 2; i++) {
        z = $u.erfc(x) - _y;
        x += z / (1.12837916709551257 * Math.exp(-x * x) - x * z);
    }
    return (y < 1) ? x : -x;
}

}