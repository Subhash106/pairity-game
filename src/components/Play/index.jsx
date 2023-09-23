import { CurrencyRupee } from "@mui/icons-material";
import { Button } from "@mui/material";
import { string } from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { COLOR_MAP } from "../constant";
import "./style.css";

export default function Play({ title, color }) {
  const { accountBalance } = useSelector((state) => state.account.balance);
  const [total, setTotal] = useState({
    contractMoney: 10,
    totalMoney: 10,
    number: 1,
  });
  const { totalMoney, number, contractMoney } = total;

  const numberHandler = (e, modifier) => {
    e.stopPropagation();
    setTotal({
      ...total,
      number: number + modifier,
      totalMoney: (number + modifier) * contractMoney,
    });
  };

  const contractMoneyHandler = (e, modifier) => {
    e.stopPropagation();
    setTotal({ ...total, contractMoney: modifier });
  };

  useEffect(() => {
    setTotal({ ...total, totalMoney: number * contractMoney });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number, contractMoney]);

  return (
    <div className="play">
      <h2
        className="heading-secondary text-center"
        style={{ color: COLOR_MAP[color] }}
      >
        {title}
      </h2>
      <div className="play-balance">
        <CurrencyRupee />
        <span>{accountBalance}</span>
        <Button variant="contained" color="primary">
          Recharge
        </Button>
      </div>
      <div className="play-contract_money">
        <p>Contract Money</p>
        <div>
          <button
            onClick={(e) => contractMoneyHandler(e, 10)}
            className="custom-button"
          >
            10
          </button>
          <button
            onClick={(e) => contractMoneyHandler(e, 100)}
            className="custom-button"
          >
            100
          </button>
          <button
            onClick={(e) => contractMoneyHandler(e, 1000)}
            className="custom-button"
          >
            1000
          </button>
          <button
            onClick={(e) => contractMoneyHandler(e, 10000)}
            className="custom-button"
          >
            10000
          </button>
        </div>
      </div>
      <div className="play-control">
        <p>Number</p>
        <div className="play-actions">
          <button
            onClick={(e) => numberHandler(e, -5)}
            className="custom-button"
          >
            -5
          </button>
          <button
            onClick={(e) => numberHandler(e, -1)}
            className="custom-button"
          >
            -1
          </button>
          <p>{number}</p>
          <button
            onClick={(e) => numberHandler(e, 1)}
            className="custom-button"
          >
            +1
          </button>

          <button
            onClick={(e) => numberHandler(e, 5)}
            className="custom-button"
          >
            +5
          </button>
        </div>
        <p>{`Total contract money is ${totalMoney}`}</p>
      </div>
      <Button variant="contained" fullWidth>
        Confirm
      </Button>
    </div>
  );
}

Play.propTypes = {
  title: string.isRequired,
  color: string.isRequired,
};
