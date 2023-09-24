import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setRecord } from "../../store/record";
import { COLOR_MAP } from "../constant";
import "./style.css";

let timeoutId;
export default function Timer() {
  const dispatch = useDispatch();

  const [count, setCount] = useState({ period: "", minutes: 0, seconds: 0 });
  const { period, minutes, seconds } = count;
  // Your moment at midnight
  const mmtMidnight = moment().clone().startOf("day");
  // Difference in minutes
  const diffSeconds = moment().diff(mmtMidnight, "seconds");
  const diffSecondsCount = parseInt(diffSeconds / 30);
  const diffSecondsModulo = diffSeconds % 30;

  useEffect(() => {
    setCount({
      ...count,
      minutes: parseInt(diffSecondsModulo / 60),
      seconds: diffSecondsModulo,
      period: `${moment().format("YYYYMMDD")}${diffSecondsCount}`,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <div className="timer">
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
    </div>
  );
}
