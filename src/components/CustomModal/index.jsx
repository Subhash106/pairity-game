import { Backdrop } from "@mui/material";
import { func, node, bool } from "prop-types";
import "./style.css";

export default function CustomModal({ children, open, handleClose }) {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClose}
    >
      <div className="custom-modal">{children}</div>
    </Backdrop>
  );
}

CustomModal.propTypes = {
  children: node.isRequired,
  open: bool.isRequired,
  handleClose: func.isRequired,
};
