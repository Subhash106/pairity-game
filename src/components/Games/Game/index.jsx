import { Chip } from "@mui/material";
import { shape, string } from "prop-types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setGame } from "../../../store/game";
import "./style.css";

export default function Game({ game }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id, title, backgroundColor, timeDuration } = game;

  const gameHandler = () => {
    dispatch(setGame(game));
    navigate(`/game/${id}`);
  };

  return (
    <div onClick={gameHandler} className="game" style={{ backgroundColor }}>
      <div className="game-duration mb-sm">
        <Chip label={timeDuration} color="success" variant="filled" />
      </div>
      <div className="game-title">{title}</div>
    </div>
  );
}

Game.propTypes = {
  game: shape({
    id: string.isRequired,
    title: string.isRequired,
    timeDuration: string.isRequired,
    backgroundColor: string.isRequired,
  }).isRequired,
};
