import Game from "./Game";
import "./style.css";

const games = [
  {
    id: 1,
    title: "Fast-Parity",
    backgroundColor: "#FF6969",
    timeDuration: "3mins",
  },
  {
    id: 2,
    title: "Parity",
    backgroundColor: "#713ABE",
    timeDuration: "30sec",
  },
  {
    id: 3,
    title: "Com-Parity",
    backgroundColor: "#E9B824",
    timeDuration: "1mins",
  },
  {
    id: 4,
    title: "Safe-Parity",
    backgroundColor: "#219C90",
    timeDuration: "3mins",
  },
];

export default function Games() {
  return (
    <div className="games">
      {games.map(({ id, title, backgroundColor, timeDuration }) => (
        <Game
          key={id}
          id={id}
          title={title}
          backgroundColor={backgroundColor}
          timeDuration={timeDuration}
        />
      ))}
    </div>
  );
}
