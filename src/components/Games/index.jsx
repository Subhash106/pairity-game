import Game from "./Game";
import "./style.css";

const games = [
  {
    id: "game1",
    title: "Fast-Parity",
    backgroundColor: "#FF6969",
    timeDuration: "30sec",
    durationInSeconds: 30,
  },
  {
    id: "game2",
    title: "Parity",
    backgroundColor: "#713ABE",
    timeDuration: "1min",
    durationInSeconds: 60,
  },
  {
    id: "game3",
    title: "Com-Parity",
    backgroundColor: "#E9B824",
    timeDuration: "2mins",
    durationInSeconds: 120,
  },
  {
    id: "game4",
    title: "Safe-Parity",
    backgroundColor: "#219C90",
    timeDuration: "3mins",
    durationInSeconds: 180,
  },
];

export default function Games() {
  return (
    <div className="games">
      {games.map((game) => (
        <Game key={game.id} game={game} />
      ))}
    </div>
  );
}
