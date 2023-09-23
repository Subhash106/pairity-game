import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import { string } from "prop-types";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { setModal } from "../../store/modal";
import "./style.css";

export default function NavHeader({ title }) {
  const dispatch = useDispatch();

  return (
    <div className="nav-header p-xs">
      <NavLink to="/home">
        <ArrowBack />
      </NavLink>
      <div>{title}</div>
      <div>
        <Button onClick={() => dispatch(setModal({ open: true }))}>Rule</Button>
      </div>
    </div>
  );
}

NavHeader.propTypes = {
  title: string.isRequired,
};
