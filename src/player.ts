export type Player = Readonly<{
  firstName: string;
  lastName: string;
  jerseyNumber: number; // actually string because of "00"
  age: number;
}>;

const player: Player = {
  firstName: "LeBron",
  lastName: "James",
  jerseyNumber: 23,
  age: 35,
};

export const modifyFirstName = (
  players: Readonly<Player[]>,
  jerseyNumber: number,
  firstName: string
): Readonly<Player[]> =>
  players.map((player) =>
    player.jerseyNumber === jerseyNumber ? { ...player, firstName } : player
  );
