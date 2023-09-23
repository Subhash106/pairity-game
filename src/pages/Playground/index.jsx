import { useDispatch, useSelector } from "react-redux";
import Board from "../../components/Board";
import Modal from "../../components/Modal";
import NavHeader from "../../components/NavHeader";
import Orders from "../../components/Orders";
import Play from "../../components/Play";
import Record from "../../components/Record";
import Rule from "../../components/Rule";
import { setModal } from "../../store/modal";
import "./style.css";

export default function Plaground() {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setModal({ open: false }));
  };

  const open = useSelector((state) => state.modal.open);

  return (
    <div className="playground">
      <NavHeader title="Fast-Pairity" />
      <Board />
      <Record />
      <Orders />
      <Modal handleClose={handleClose} open={open}>
        {!open ? <Rule /> : <Play title="Join Violet" color="red" />}
      </Modal>
    </div>
  );
}
