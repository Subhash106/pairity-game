import { Chip } from "@mui/material";
import { string } from "prop-types";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function Game({ id, title, backgroundColor, timeDuration }) {
  return (
    <NavLink to={`/game/${id}`}>
      <div className="game" style={{ backgroundColor }}>
        <div className="game-duration mb-sm">
          <Chip label={timeDuration} color="success" variant="filled" />
        </div>
        <div className="game-title">{title}</div>
      </div>
    </NavLink>
  );
}

Game.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  timeDuration: string.isRequired,
  backgroundColor: string.isRequired,
};
