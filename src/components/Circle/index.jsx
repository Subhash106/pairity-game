import { number, string } from "prop-types";
import "./style.css";

export default function Circle({ number, color }) {
  let circleColor = "";
  let firstCircleColor = "";
  let secondCircleColor = "";
  if (typeof color === "object") {
    firstCircleColor = color[0];
    secondCircleColor = color[1];
  } else {
    circleColor = color;
  }

  return (
    <>
      {typeof color === "string" && (
        <div className="circle" style={{ background: circleColor }}>
          {number}
        </div>
      )}

      {typeof color === "object" && (
        <div className="half-circle-container">
          <div
            className="circle-helf circle-helf-left"
            style={{ background: firstCircleColor }}
          ></div>
          <span className="half-circle-content">{number}</span>
          <div
            className="circle-helf circle-helf-right"
            style={{ background: secondCircleColor }}
          ></div>
        </div>
      )}
    </>
  );
}

Circle.propTypes = {
  number: number.isRequired,
  color: string.isRequired,
};
