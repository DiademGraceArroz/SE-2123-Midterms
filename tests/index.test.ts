import { getDiffInHours, hexToRGB, hexToRGB2 } from "../src/index";
import { Player, modify } from "../src/player";

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

describe("testing pure functions", () => {
  test.todo("determining the foreground/text color"),
    () => {
      let color1 = "#96ff32";
      expect(hexToRGB2(color1)).toBe("#000000");
    };
});

// describe("Player", () => {
//   it("modifies the first name", () => {
//     const originalPlayers: Player[] = [
//       {
//         firstName: "Lebron",
//         lastName: "James",
//         number: 6,
//         age: 37,
//       },
//       {
//         firstName: "Anthony",
//         lastName: "Davis",
//         number: 3,
//         age: 29,
//       },
//     ];

//     const newPlayers = modify(originalPlayers, 6, "Lebron Raymone Sr.");

//     expect(newPlayers).toStrictEqual([
//       {
//         firstName: "Lebron Raymone",
//         lastName: "James",
//         number: 6,
//         age: 37,
//       },
//       {
//         firstName: "Anthony",
//         lastName: "Davis",
//         number: 3,
//         age: 29,
//       },
//     ]);
//   });
// });