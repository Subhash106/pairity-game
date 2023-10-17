import { Button } from "@mui/base";
import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../../services/constant";
import { setRecordForGame } from "../../store/record";
import getDiffCount from "../../utils/getDiffCount";
import Circle from "../Circle";
import { COLOR_MAP } from "../constant";
import Divider from "../Divider";
import "./style.css";

export default function Record() {
  const dispatch = useDispatch();
  const records = useSelector((state) => state.record.records);
  const { title, id, durationInSeconds } = useSelector((state) => state.game);
  const { diffSecondsCount } = getDiffCount(durationInSeconds);

  useEffect(() => {
    getRecords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRecords = async () => {
    const res = await fetch(
      `${baseUrl}/results.json?orderBy="day"&equalTo="${moment().format(
        "YYYYMMDD"
      )}"`
    );

    const responseData = await res.json();

    dispatch(
      setRecordForGame({
        gameId: id,
        data: Object.entries(responseData)
          .map(([id, { time, winColor }]) => ({
            time,
            id: id,
            color: winColor,
            number: time,
          }))
          .concat([
            {
              time: diffSecondsCount,
              id: diffSecondsCount,
              color: COLOR_MAP["wait"],
              number: "?",
            },
          ])
          .sort((a, b) => a.number - b.number),
      })
    );
  };

  return (
    <div className="record p-xs mb-sm">
      <h2 className="heading-secondary text-center">Record</h2>
      <Divider />
      <div className="record-info">
        <p>{title} Record(s)</p>
        <Button>More</Button>
      </div>
      <div className="circles">
        {records[id].slice(-24).map(({ id, number, color, time }) => (
          <div className="circle-container" key={id}>
            <Circle color={color} number={number} />
            <p>{time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
