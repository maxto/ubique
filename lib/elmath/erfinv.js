/**
 * Special Functions
 */
 module.exports = function($u) {
/**
 * @method  erfinv
 * @summary Inverse error function
 * @description Inverse error function
 * 
 * The inverse error function satisfies y = erf(x), for -1 <= y <= 1 and -inf <= x <= inf
 * 
 * @param  {number} y real value in range [-1,1]
 * @return {number}   
 *
 * @example
 * ubique.erfinv(0.1);
 * // 0.08885596505119535
 */
 $u.erfinv = function(y) {
    if (arguments.length === 0) {
        throw new Error('not enough input arguments');
    }
    var x,x1,x2,x3,x4,x5,x6,x7,x8,x9,z,z1,z2,z3
    if (y <= -1) {x = -Infinity;return x;}
    else if (y >= 1) {x = Infinity;return x;}
    else if (y < -0.7) {
        z1 = (1 + y) / 2;
        z2 = Math.log(z1) / Math.log(Math.E);
        z3 = Math.sqrt(-z2);
        z = z3;
        x1 = 1.641345311 * z + 3.429567803;
        x2 = x1 * z + -1.624906493;
        x3 = x2 * z + -1.970840454;
        x4 = 1.637067800 * z + 3.543889200;
        x5 = x4 * z + 1;
        x6 = -x3 / x5;
        x = x6;
    } else if (y < 0.7) {
        z = y * y;
        x1 = -0.140543331 * z + 0.914624893;
        x2 = x1 * z + -1.645349621;
        x3 = x2 * z + 0.886226899;
        x4 = 0.012229801 * z + -0.329097515;
        x5 = x4 * z + -0.329097515;
        x6 = x5 * z + 1.442710462;
        x7 = x6 * z + -2.118377725;
        x8 = x7 * z + 1;
        x9 = y * x3 / x8;
        x = x9;
    } else {
        z1 = (1 + y) / 2;
        z2 = Math.log(z1);
        z3 = Math.sqrt(-z2);
        z = z3;
        x1 = 1.641345311 * z + 3.429567803;
        x2 = x1 * z + -1.624906493;
        x3 = x2 * z + -1.970840454;
        x4 = 1.637067800 * z +  3.543889200;
        x5 = x4 * z + 1;
        x6 = x3 / x5;
        x = x6;
    }
    x = x - ($u.erf(x) - y) / (2/Math.sqrt(Math.PI) * Math.exp(-x*x));
    x = x - ($u.erf(x) - y) / (2/Math.sqrt(Math.PI) * Math.exp(-x*x));

    return x;
}

}