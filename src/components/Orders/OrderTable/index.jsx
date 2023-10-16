import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { baseUrl } from "../../../services/constant";
import moment from "moment";

export default function CustomTable() {
  const [plays, setPlays] = useState([]);

  useEffect(() => {
    async function fetchMyPlays() {
      const res = await fetch(`${baseUrl}/plays.json`);
      const responseData = await res.json();

      setPlays(
        Object.entries(responseData).map(
          ([id, { color, time, userId, amount }]) => ({
            id,
            color,
            userId,
            time,
            amount,
          })
        )
      );
    }

    fetchMyPlays();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Selection</TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {plays.map(({ id, time, color, amount }) => (
            <TableRow
              key={id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {`${moment().format("YYYYMMDD")}${time}`}
              </TableCell>
              <TableCell>{color}</TableCell>
              <TableCell align="right">{amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
