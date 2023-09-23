import { useDispatch, useSelector } from "react-redux";
import Board from "../../components/Board";
import Modal from "../../components/Modal";
import NavHeader from "../../components/NavHeader";
import Orders from "../../components/Orders";
import Record from "../../components/Record";
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
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          aperiam accusamus quibusdam nostrum, quae consectetur? Reiciendis
          veritatis in ullam placeat fuga tempora consequatur ipsam perferendis
          tempore soluta. Ipsa, hic quae.
        </p>
      </Modal>
    </div>
  );
}
