import { returnStatement } from "@babel/types";

/**
 * difference of two dates in hours.
 * The function allows specifying whole hours (3) or fractional (3.25)
 */
export function getDiffInHours(date1: Date, date2: Date) {
  const difference = Math.abs(date2.getTime() - date1.getTime());
  return difference / (1000 * 60 * 60);
}

export function hexToRGB(color: string): number {
    const hex = color.split('');
    const result = (parseInt(hex[0], 16) * 16) + parseInt(hex[1], 16);
    return result;
}

export function hexToRGB2(color1: string) {
    const hex = color1.match(/.{1,2}/g);
    const rgb = [
        parseInt(hex![0], 16),
        parseInt(hex![1], 16),
        parseInt(hex![2], 16),
    ];

    let result = ((rgb[0] * 0.299) + (rgb[1] * 0.587) + (rgb[2] * 0.114));

    if (result > 186) {
        return '#000000'
    } else {
        return '#ffffff'
    }
}