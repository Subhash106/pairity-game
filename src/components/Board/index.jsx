import "./style.css";

export default function Board() {
  return (
    <div className="board mb-sm">
      <div className="board-period">
        <p>Period</p>
        <p>1234567890</p>
      </div>
      <div className="board-count_down">
        <p>Count Down</p>
        <p>
          <span>1</span>
          <span>1</span>:<span>1</span>
          <span>1</span>
        </p>
      </div>
      <div className="board-join--green">Join Green</div>
      <div className="board-join--violet">Join Violet</div>
      <div className="board-join--red">Join Red</div>
      <div className="board-number--1">1</div>
      <div className="board-number--2">2</div>
      <div className="board-number--3">3</div>
      <div className="board-number--4">4</div>
      <div className="board-number--5">5</div>
      <div className="board-number--6">6</div>
      <div className="board-number--7">7</div>
      <div className="board-number--8">8</div>
      <div className="board-number--9">9</div>
      <div className="board-number--0">0</div>
    </div>
  );
}
