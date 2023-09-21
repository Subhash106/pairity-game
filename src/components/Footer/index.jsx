import "./style.css";

import {
  Home,
  Person,
  PersonAdd,
  AccountBalanceWallet,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <nav>
        <ul>
          <li>
            <NavLink to="/home">
              <Home />
            </NavLink>
          </li>
          <li>
            <NavLink to="/invite">
              <PersonAdd />
            </NavLink>
          </li>
          <li>
            <NavLink to="/recharge">
              <AccountBalanceWallet />
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile">
              <Person />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
