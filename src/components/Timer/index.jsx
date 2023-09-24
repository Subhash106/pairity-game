import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecord } from "../../store/record";
import { COLOR_MAP } from "../constant";
import "./style.css";

let timeoutId;
export default function Timer() {
  const { durationInSeconds, id } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  // Your moment at midnight
  const mmtMidnight = moment().clone().startOf("day");
  // Difference in seconds
  const diffSeconds = moment().diff(mmtMidnight, "seconds");
  const diffSecondsCount = parseInt(diffSeconds / durationInSeconds);
  const diffSecondsModulo = diffSeconds % durationInSeconds;

  const [count, setCount] = useState({
    period: "",
    minutes: 0,
    seconds: 0,
    remainingSeconds: durationInSeconds - diffSecondsModulo,
  });
  const { period, minutes, seconds, remainingSeconds } = count;

  useEffect(() => {
    setCount({
      ...count,
      seconds: remainingSeconds % 60,
      minutes: parseInt(remainingSeconds / 60),
      period: `${moment().format("YYYYMMDD")}${diffSecondsCount}`,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    timeoutId = setInterval(() => {
      if (remainingSeconds === 1 && seconds >= 1) {
        setCount({
          ...count,
          remainingSeconds: durationInSeconds - 1,
          minutes: parseInt((durationInSeconds - 1) / 60),
          seconds: durationInSeconds === 30 ? 29 : 59,
          period: `${moment().format("YYYYMMDD")}${diffSecondsCount}`,
        });

        dispatch(
          setRecord({
            data: {
              id: diffSecondsCount,
              color: COLOR_MAP["red"],
              number: 9,
            },
            gameId: id,
          })
        );
      } else if (seconds === 0 && remainingSeconds) {
        setCount({
          ...count,
          minutes: parseInt(remainingSeconds / 60),
          remainingSeconds: remainingSeconds - 1,
          seconds: remainingSeconds % 60,
        });
      } else if (seconds >= 1) {
        setCount({
          ...count,
          minutes: parseInt(remainingSeconds / 60),
          remainingSeconds: remainingSeconds - 1,
          seconds: seconds - 1,
        });
      }
    }, 1000);

    return () => clearInterval(timeoutId);
  }, [
    id,
    count,
    seconds,
    remainingSeconds,
    diffSecondsCount,
    durationInSeconds,
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
