import "./style.css";
import { Refresh, CurrencyRupee } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";

export default function Footer() {
  const { balance, id: userId } = useSelector((state) => state.account);

  return (
    <div className="balance mb-sm">
      <div className="balance-amount">
        <p>Balance</p>
        <p className="balance-display">
          <CurrencyRupee /> <span>{balance}</span> <Refresh />
        </p>
        <p>ID:{userId}</p>
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
