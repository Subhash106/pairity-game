import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../../services/constant";
import { updateGame } from "../../store/game";
import { setRecord, updateRecord } from "../../store/record";
import getDiffCount from "../../utils/getDiffCount";
import { COLOR_MAP } from "../constant";
import "./style.css";

let timeoutId;
export default function Timer() {
  const { durationInSeconds, id } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const { diffSeconds, diffSecondsCount } = getDiffCount(durationInSeconds);
  const diffSecondsModulo = diffSeconds % durationInSeconds;

  const [count, setCount] = useState({
    period: "",
    minutes: 0,
    seconds: 0,
    remainingSeconds: durationInSeconds - diffSecondsModulo,
  });
  const { period, minutes, seconds, remainingSeconds } = count;

  useEffect(() => {
    dispatch(updateGame({ diffSecondsCount }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

        dispatch(updateGame({ key: "disablePlay", value: false }));
        dispatch(
          setRecord({
            data: {
              id: diffSecondsCount,
              color: COLOR_MAP["wait"],
              number: "?",
              time: diffSecondsCount,
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
        if (remainingSeconds === 10) {
          dispatch(updateGame({ key: "disablePlay", value: true }));
          getResult();
        }
        setCount({
          ...count,
          minutes: parseInt(remainingSeconds / 60),
          remainingSeconds: remainingSeconds - 1,
          seconds: seconds - 1,
        });
      }
    }, 1000);

    return () => clearInterval(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    id,
    count,
    seconds,
    remainingSeconds,
    diffSecondsCount,
    durationInSeconds,
    dispatch,
  ]);

  const getResult = async () => {
    const res = await fetch(
      `${baseUrl}/plays.json?orderBy="timestamp"&equalTo="${moment().format(
        "YYYYMMDD"
      )}${diffSecondsCount}"`
    );
    const responseData = await res.json();

    const responseDataArr = Object.entries(responseData).map(([id, data]) => ({
      ...data,
      id,
    }));

    if (!responseDataArr.length) {
      console.log("No one played the game!");
      return;
    }

    const colorCounts = ["red", "green", "violet"]
      .map((el) => ({
        [el]: responseDataArr.filter((data) => data.color === el).length || 0,
      }))
      .reduce((acc, current) => {
        const currentObject = Object.entries(current)[0];

        return { ...acc, [currentObject?.[0]]: currentObject?.[1] };
      }, {});

    const colorWin = await getColorWin(colorCounts);

    dispatch(
      updateRecord({
        data: {
          time: diffSecondsCount,
          id: diffSecondsCount,
          color: COLOR_MAP[colorWin],
          number: 9,
        },
        gameId: id,
      })
    );
    saveResult(diffSecondsCount, id, colorWin);
  };

  const saveResult = async (time, gameId, winColor) => {
    fetch(`${baseUrl}/results.json`, {
      method: "POST",
      body: JSON.stringify({
        day: `${moment().format("YYYYMMDD")}`,
        time,
        gameId,
        winColor,
      }),
    });
  };

  const getColorWin = async (colorCounts) => {
    let colorWin = "";

    if (
      colorCounts["red"] < colorCounts["green"] &&
      colorCounts["red"] < colorCounts["violet"]
    ) {
      colorWin = "red";
    } else if (
      colorCounts["green"] < colorCounts["violet"] &&
      colorCounts["green"] < colorCounts["red"]
    ) {
      colorWin = "green";
    } else if (
      colorCounts["violet"] < colorCounts["red"] &&
      colorCounts["violet"] < colorCounts["green"]
    ) {
      colorWin = "violet";
    } else if (colorCounts["red"] === colorCounts["green"]) {
      colorWin = ["red", "green"];
    } else if (colorCounts["green"] === colorCounts["violet"]) {
      colorWin = ["green", "violet"];
    } else {
      colorWin = ["violet", "red"];
    }

    return colorWin;
  };

  // const saveUsersResult = () => async () => {};

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
