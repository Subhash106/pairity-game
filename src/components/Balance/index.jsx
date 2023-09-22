import "./style.css";
import { Refresh } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function Footer() {
  return (
    <div className="balance mb-sm">
      <div className="balance-amount">
        <p>Balance</p>
        <p>
          8.40{" "}
          <a href="#">
            <Refresh />
          </a>
        </p>
        <p>ID:123456</p>
      </div>
      <div className="balance-cta">
        <Button variant="contained" color="primary">
          Recharge
        </Button>
        <Button variant="text" color="success">
          Withdraw
        </Button>
      </div>
    </div>
  );
}
