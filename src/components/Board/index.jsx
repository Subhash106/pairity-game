import moment from "moment";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setRecord } from "../../store/record";
import { COLOR_MAP } from "../constant";
import "./style.css";

let timeoutId;

export default function Board() {
  const dispatch = useDispatch();
  const [count, setCount] = useState({ period: "", minutes: 0, seconds: 0 });
  const { period, minutes, seconds } = count;
  // Your moment at midnight
  const mmtMidnight = moment().clone().startOf("day");
  // Difference in minutes
  const diffSeconds = moment().diff(mmtMidnight, "seconds");
  const diffSecondsCount = parseInt(diffSeconds / 30);
  const diffSecondsModulo = diffSeconds % 30;

  console.log("diffMinutes", diffSeconds);

  useEffect(() => {
    setCount({
      ...count,
      minutes: parseInt(diffSecondsModulo / 60),
      seconds: diffSecondsModulo,
      period: `${moment().format("YYYYMMDD")}${diffSecondsCount}`,
    });
  }, []);

  useEffect(() => {
    timeoutId = setInterval(() => {
      if (seconds >= 1) {
        setCount({
          ...count,
          seconds: seconds - 1,
        });
      } else {
        setCount({
          ...count,
          minutes: parseInt(diffSecondsModulo / 60),
          period: `${moment().format("YYYYMMDD")}${diffSecondsCount}`,
          seconds: 30,
        });

        dispatch(
          setRecord({
            id: diffSecondsCount,
            color: COLOR_MAP["red"],
            number: 9,
          })
        );
      }
    }, 1000);

    return () => clearInterval(timeoutId);
  }, [
    count,
    seconds,
    diffSeconds,
    diffSecondsCount,
    diffSecondsModulo,
    dispatch,
  ]);

  return (
    <div className="board mb-sm p-xs">
      <div className="board-period">
        <p>Period</p>
        <p className="board-period--number">{period}</p>
      </div>
      <div className="board-count_down">
        <p>Count Down</p>
        <p>
          <span>{parseInt(minutes / 10)}</span>
          <span>{minutes % 10}</span>:<span>{parseInt(seconds / 10)}</span>
          <span>{seconds % 10}</span>
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
