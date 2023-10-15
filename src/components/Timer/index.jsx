import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../../services/constant";
import { updateGame } from "../../store/game";
import { setRecord } from "../../store/record";
import getDiffCount from "../../utils/getDiffCount";
import { COLOR_MAP } from "../constant";
import "./style.css";

let timeoutId;
export default function Timer() {
  const { durationInSeconds, id } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const { diffSeconds, diffSecondsCount } = getDiffCount(durationInSeconds);
  const diffSecondsModulo = diffSeconds % durationInSeconds;

  //console.log("diffSecondsCount", diffSecondsCount);

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

        getResult();

        dispatch(updateGame({ key: "disablePlay", value: false }));
      } else if (seconds === 0 && remainingSeconds) {
        setCount({
          ...count,
          minutes: parseInt(remainingSeconds / 60),
          remainingSeconds: remainingSeconds - 1,
          seconds: remainingSeconds % 60,
        });
      } else if (seconds >= 1) {
        console.log("remainingSeconds", remainingSeconds);
        if (remainingSeconds === 10) {
          dispatch(updateGame({ key: "disablePlay", value: true }));
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
      `${baseUrl}/plays.json?orderBy="time"&equalTo=${diffSecondsCount}`
    );
    const responseData = await res.json();

    const responseDataArr = Object.entries(responseData).map(([id, data]) => ({
      ...data,
      id,
    }));
    console.log("responseDataArr", responseDataArr);

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
        console.log("current", current, currentObject);
        return { ...acc, [currentObject?.[0]]: currentObject?.[1] };
      }, {});

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
      colorCounts["violet"] < colorCounts["greed"]
    ) {
      colorWin = "violet";
    } else if (
      colorCounts["red"] === colorCounts["green"] &&
      colorCounts["green"] === colorCounts["violet"] &&
      colorCounts["violet"] === colorCounts["red"]
    ) {
      colorWin = ["violet", "red", "green"];
    } else if (colorCounts["red"] === colorCounts["green"]) {
      colorWin = ["red", "green"];
    } else if (colorCounts["green"] === colorCounts["violet"]) {
      colorWin = ["green", "violet"];
    } else if (colorCounts["violet"] === colorCounts["red"]) {
      colorWin = ["violet", "red"];
    }
    console.log("colorCounts", colorWin, colorCounts);
    dispatch(
      setRecord({
        data: {
          id: diffSecondsCount,
          color: COLOR_MAP[colorWin],
          number: 9,
        },
        gameId: id,
      })
    );
    saveResult(diffSecondsCount - 1, id, colorWin);
  };

  const saveResult = async (time, gameId, winColor) => {
    fetch(`${baseUrl}/results.json`, {
      method: "POST",
      body: JSON.stringify({ time, gameId, winColor }),
    });
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
