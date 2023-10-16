import { Button } from "@mui/base";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseUrl } from "../../services/constant";
import { setRecordForGame } from "../../store/record";
import Circle from "../Circle";
import Divider from "../Divider";
import "./style.css";

export default function Record() {
  const dispatch = useDispatch();
  const records = useSelector((state) => state.record.records);
  const { title, id } = useSelector((state) => state.game);

  console.log("records", records);

  useEffect(() => {
    getRecords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRecords = async () => {
    const res = await fetch(
      `${baseUrl}/results.json?orderBy="gameId"&equalTo="${id}"`
    );

    const responseData = await res.json();

    console.log("responseData", responseData);

    dispatch(
      setRecordForGame({
        gameId: id,
        data: Object.entries(responseData)
          .map(([id, { time, winColor }]) => ({
            id: id,
            color: winColor,
            number: time,
          }))
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
        {records[id].slice(-24).map(({ id, number, color }) => (
          <div className="circle-container" key={id}>
            <Circle color={color} number={number} />
            <p>{number}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
