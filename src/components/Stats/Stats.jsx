/* eslint-disable react/prop-types */
import { BuildingIcon } from "../../assets/icons/BuildingIcon";
import { PhoneIcon } from "../../assets/icons/PhoneIcon";
import { ConnectionIcon } from "../../assets/icons/ConnectionIcon";
import { MoneyIcon } from "../../assets/icons/MoneyIcon";
import "./Stats.scss";

const Stat = ({ Icon, number, text, background }) => (
  <div className="stats">
    <div className="stats_position">
      <div style={{ background }} className="icon-container">
          <Icon />
      </div>
      <div className="stats_text">
        <h2>{number}</h2>
        <p>{text}</p>
      </div>
    </div>
  </div>
);

// Data Array
const statsData = [
  { Icon: BuildingIcon, number: "650+", text: "COMPANIES IN OUR NETWORK", background: "linear-gradient(180deg, #0C2726 0%, #194845 100%)" },
  { Icon: PhoneIcon, number: "500+", text: "ALPHA CALL CHANNELS", background: "linear-gradient(180deg, #241445 0%, #392366 100%)" },
  { Icon: ConnectionIcon, number: "150+", text: "INFLUENCERS CONNECTIONS", background: "linear-gradient(180deg, #4A2A20 0%, #643E32 100%)" },
  { Icon: MoneyIcon, number: "15 mln", text: "IN BLOCKCHAIN SALES", background: "linear-gradient(180deg, #521468 0%, #72228E 100%)" },
];

export const Stats = () => (
  <div className="stats-container">
    {statsData.map((stat, index) => (
      <Stat
        key={index}
        Icon={stat.Icon}
        number={stat.number}
        text={stat.text}
        background={stat.background}
      />
    ))}
  </div>
);