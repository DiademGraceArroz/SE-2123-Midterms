export type Player = Readonly<{
  firstName: string;
  lastName: string;
  number: number;
  age: number;
}>;

const player: Player = {
  firstName: "Lebron",
  lastName: "James",
  number: 6,
  age: 37,
};

export const modify = (
  players: Readonly<Player[]>,
  number: number,
  firstName: string
): Readonly<Player[]> =>
  players.map((player) =>
    player.number === number ? { ...player, firstName } : player
  );
