import { getDiffInHours } from "../src/index";
import { hexToRGB } from "../src/index";
import { Player, modifyFirstName } from "../src/player";

describe("testing pure functions", () => {
  test("difference of two dates in hours", () => {
    let date1 = new Date("August 16, 2022 10:30:00");
    let date2 = new Date("August 17, 2022 00:00:00");
    expect(getDiffInHours(date1, date2)).toBe(13.5);
  });
});

describe("testing pure functions", () => {
  test("converting hex to RGB", () => {
    let color = "9E";
    expect(hexToRGB(color)).toBe(158);
  });
});

// describe('testing pure functions', () => {
//     test('determining the foreground/text color'), () => {
//         let color1 = '3A3B3C'
//         expect(hexToRGB2(color1)).toBe('#000000');
//     }
// })