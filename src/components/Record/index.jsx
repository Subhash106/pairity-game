import Circle from "../Circle";
import Divider from "../Divider";
import "./style.css";

export default function Record() {
  const records = [
    {
      id: 1,
      number: 1,
      color: "#bb2525",
    },
    {
      id: 2,
      number: 2,
      color: "#793fdf",
    },
    {
      id: 3,
      number: "?",
      color: "#98eecc",
    },
    {
      id: 4,
      number: 1,
      color: "#bb2525",
    },
    {
      id: 5,
      number: 1,
      color: "#bb2525",
    },
    {
      id: 6,
      number: 2,
      color: "#793fdf",
    },
    {
      id: 7,
      number: 1,
      color: "#bb2525",
    },
    {
      id: 8,
      number: 2,
      color: "#793fdf",
    },
    {
      id: 9,
      number: "?",
      color: "#98eecc",
    },
    {
      id: 10,
      number: 1,
      color: "#bb2525",
    },
    {
      id: 11,
      number: 2,
      color: "#793fdf",
    },
    {
      id: 12,
      number: "?",
      color: "#98eecc",
    },
    {
      id: 13,
      number: 1,
      color: "#bb2525",
    },
    {
      id: 14,
      number: 1,
      color: "#bb2525",
    },
    {
      id: 15,
      number: 2,
      color: "#793fdf",
    },
    {
      id: 16,
      number: 1,
      color: "#bb2525",
    },
    {
      id: 17,
      number: 2,
      color: "#793fdf",
    },
    {
      id: 18,
      number: "?",
      color: "#98eecc",
    },
  ];

  return (
    <div className="record p-xs mb-sm">
      <h2 className="heading-secondary text-center">Record</h2>
      <Divider />
      <div className="circles">
        {records.map(({ id, number, color }) => (
          <Circle key={id} color={color} number={number} />
        ))}
      </div>
    </div>
  );
}
