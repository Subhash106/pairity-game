import { string } from "prop-types";
import "./style.css";

export default function Game({ title }) {
  return <div className="game">{title}</div>;
}

Game.propTypes = {
  title: string.isRequired,
};
