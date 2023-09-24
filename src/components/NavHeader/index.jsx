import { ArrowBack } from "@mui/icons-material";
import { Button } from "@mui/material";
import { string } from "prop-types";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import CustomModal from "../CustomModal";
import Rule from "../Rule";
import "./style.css";

export default function NavHeader({ title }) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="nav-header p-xs">
      <NavLink to="/home">
        <ArrowBack />
      </NavLink>
      <div>{title}</div>
      <div>
        <Button onClick={() => setOpen(true)}>Rule</Button>
      </div>

      <CustomModal handleClose={handleClose} open={open}>
        <Rule />
      </CustomModal>
    </div>
  );
}

NavHeader.propTypes = {
  title: string.isRequired,
};
