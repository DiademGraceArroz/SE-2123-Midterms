"use strict";
exports.__esModule = true;
exports.hexToRGB = exports.getDiffInHours = void 0;
/**
 * difference of two dates in hours.
 * The function allows specifying whole hours (3) or fractional (3.25)
 */
function getDiffInHours(date1, date2) {
    var difference = Math.abs(date2.getTime() - date1.getTime());
    return difference / (1000 * 60 * 60);
}
exports.getDiffInHours = getDiffInHours;
function hexToRGB(color1) {
    var hex = color1.split('');
    var result = (parseInt(hex[0], 16) * 16) + parseInt(hex[1], 16);
    return result;
}
exports.hexToRGB = hexToRGB;
