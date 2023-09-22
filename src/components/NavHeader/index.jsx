import { ArrowBack } from "@mui/icons-material";
import { string } from "prop-types";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function NavHeader({ title }) {
  return (
    <div className="nav-header p-sm">
      <NavLink to="/home">
        <ArrowBack />
      </NavLink>
      <div>{title}</div>
      <div>Rule</div>
    </div>
  );
}

NavHeader.propTypes = {
  title: string.isRequired,
};
