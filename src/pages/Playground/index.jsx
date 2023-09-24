import Board from "../../components/Board";
import NavHeader from "../../components/NavHeader";
import Orders from "../../components/Orders";
import Record from "../../components/Record";
import "./style.css";

export default function Plaground() {
  return (
    <div className="playground">
      <NavHeader title="Fast-Pairity" />
      <Board />
      <Record />
      <Orders />
    </div>
  );
}
