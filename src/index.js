"use strict";
exports.__esModule = true;
exports.hexToRGB2 = exports.hexToRGB = exports.getDiffInHours = void 0;
/**
 * difference of two dates in hours.
 * The function allows specifying whole hours (3) or fractional (3.25)
 */
function getDiffInHours(date1, date2) {
    var difference = Math.abs(date2.getTime() - date1.getTime());
    return difference / (1000 * 60 * 60);
}
exports.getDiffInHours = getDiffInHours;
function hexToRGB(color) {
    var hex = color.split("");
    var result = parseInt(hex[0], 16) * 16 + parseInt(hex[1], 16);
    return result;
}
exports.hexToRGB = hexToRGB;
function hexToRGB2(color) {
    var hex = color.match(/.{1,2}/g);
    var rgb = [
        parseInt(hex[0], 16),
        parseInt(hex[1], 16),
        parseInt(hex[2], 16), //hex to B
    ];
    var result = ((rgb[0] * 0.299) + (rgb[1] * 0.587) + (rgb[2] * 0.114));
    if (result > 186) {
        return "#000000";
    }
    else {
        return "#ffffff";
    }
}
exports.hexToRGB2 = hexToRGB2;
