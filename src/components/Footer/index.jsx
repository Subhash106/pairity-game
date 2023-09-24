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
    <div className="footer p-xs">
      <nav>
        <ul>
          <li>
            <NavLink to="/home">
              <span>
                <Home />
                <p>Home</p>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/invite">
              <span>
                <PersonAdd />
                <p>Invite</p>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/recharge">
              <span>
                <AccountBalanceWallet />
                <p>Recharge</p>
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile">
              <span>
                <Person />
                <p>Profile</p>
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
