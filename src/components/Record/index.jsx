import { Button } from "@mui/base";
import { useSelector } from "react-redux";
import Circle from "../Circle";
import Divider from "../Divider";
import "./style.css";

export default function Record() {
  const records = useSelector((state) => state.record.records);
  const { title, id } = useSelector((state) => state.game);

  console.log("records", id, typeof id, records);

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
            <p>{id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
