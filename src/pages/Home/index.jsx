import "./style.css";

import Balance from "../../components/Balance";
import ReferNow from "../../components/ReferNow";
import Games from "../../components/Games";

export default function Home() {
  return (
    <div className="home">
      <Balance />
      <ReferNow />
      <Games />
    </div>
  );
}
