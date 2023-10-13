import { useState } from "react";
import CustomModal from "../CustomModal";
import Play from "../Play";
import Timer from "../Timer";
import "./style.css";

export default function Board() {
  const [open, setOpen] = useState(false);
  const [play, setPlay] = useState({ title: "", color: "" });

  const handleClose = () => {
    setOpen(false);
  };

  const openPlay = (title, color = "default") => {
    setPlay({ title, color });
    setOpen(true);
  };

  return (
    <>
      <div className="board mb-sm p-xs">
        <Timer />
        <div className="board-join_color">
          <div
            className="board-join--green"
            onClick={() => openPlay("Join Green", "green")}
          >
            Join Green
          </div>
          <div
            className="board-join--violet"
            onClick={() => openPlay("Join Violet", "violet")}
          >
            Join Violet
          </div>
          <div
            className="board-join--red"
            onClick={() => openPlay("Join Red", "red")}
          >
            Join Red
          </div>
        </div>
        <div className="board-select_number">
          <div
            className="board-number--1"
            onClick={() => openPlay("Select 1", "1")}
          >
            1
          </div>
          <div
            className="board-number--2"
            onClick={() => openPlay("Select 2", "2")}
          >
            2
          </div>
          <div
            className="board-number--3"
            onClick={() => openPlay("Select 3", "3")}
          >
            3
          </div>
          <div
            className="board-number--4"
            onClick={() => openPlay("Select 4", "4")}
          >
            4
          </div>
          <div
            className="board-number--5"
            onClick={() => openPlay("Select 5", "5")}
          >
            5
          </div>
          <div
            className="board-number--6"
            onClick={() => openPlay("Select 6", "6")}
          >
            6
          </div>
          <div
            className="board-number--7"
            onClick={() => openPlay("Select 7", "7")}
          >
            7
          </div>
          <div
            className="board-number--8"
            onClick={() => openPlay("Select 8", "8")}
          >
            8
          </div>
          <div
            className="board-number--9"
            onClick={() => openPlay("Select 9", "9")}
          >
            9
          </div>
          <div
            className="board-number--0"
            onClick={() => openPlay("Select 0", "0")}
          >
            0
          </div>
        </div>
      </div>
      <CustomModal handleClose={handleClose} open={open}>
        <Play {...play} handleClose={handleClose} />
      </CustomModal>
    </>
  );
}
