import Board from "../../components/Board";
import NavHeader from "../../components/NavHeader";
import "./style.css";

export default function Plaground() {
  return (
    <div className="playground">
      <NavHeader title="Fast-Pairity" />
      <Board />
    </div>
  );
}
