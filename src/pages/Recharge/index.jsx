import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";

import "./style.css";

export default function Recharge() {
  const { balance } = useSelector((state) => state.account);
  const [rechargeAmount, setRechargeAmount] = useState("");

  const rechargeHandler = () => {
    console.log("clicked!");
  };

  const denominationHandler = (e, amount) => {
    e.preventDefault();
    setRechargeAmount(amount);
  };

  const rechargeAmountChangeHandler = (e) => {
    setRechargeAmount(e.target.value);
  };

  return (
    <div className="recharge">
      <div className="recharge-balance mb-md">
        <p>Balance</p>
        <p className="recharge-balance_amount">{balance}</p>
      </div>
      <form className="recharge-form">
        <TextField
          fullWidth
          type="text"
          title="Enter amount"
          placeholder="200-10000"
          value={rechargeAmount}
          onChange={rechargeAmountChangeHandler}
        />
        <div className="recharge-denominations mt-sm mb-sm">
          <button onClick={(e) => denominationHandler(e, 500)}>500</button>
          <button onClick={(e) => denominationHandler(e, 1000)}>1000</button>
          <button onClick={(e) => denominationHandler(e, 2000)}>2000</button>
          <button onClick={(e) => denominationHandler(e, 5000)}>5000</button>
          <button onClick={(e) => denominationHandler(e, 8000)}>8000</button>
          <button onClick={(e) => denominationHandler(e, 10000)}>10000</button>
        </div>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={rechargeHandler}
        >
          Recharge
        </Button>
      </form>
    </div>
  );
}
