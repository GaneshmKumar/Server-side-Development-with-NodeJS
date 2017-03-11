/*
* @Author: GaNeShKuMaRm
* @Date:   2017-02-24 17:59:08
* @Last Modified by:   GaNeShKuMaRm
* @Last Modified time: 2017-02-24 20:47:33
*/

'use strict';
module.exports = function(x, y, callback) {
    try {
        if(x < 0 || y < 0) {
            throw new Error("Rectangle dimensions should be greater than zero: l = " + x + ", and b = " + y);
        }
        else {
            callback(null, {
                perimeter: function() {
                    return (2 * (x + y));
                },
                area: function() {
                    return (x * y);
                }
            });
        }
    }
    catch(error) {
        callback(error, null);
    }
}
