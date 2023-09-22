import { string } from "prop-types";
import "./style.css";

export default function Circle({ number, color }) {
  return (
    <div className="circle" style={{ background: color }}>
      {number}
    </div>
  );
}

Circle.propTypes = {
  number: string.isRequired,
  color: string.isRequired,
};
