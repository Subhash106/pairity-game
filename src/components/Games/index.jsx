import Game from "./Game";
import "./style.css";

export default function Games() {
  return (
    <div className="games">
      <Game title="Game 1" />
      <Game title="Game 2" />
      <Game title="Game 3" />
      <Game title="Game 4" />
    </div>
  );
}
