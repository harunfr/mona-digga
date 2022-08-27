import React from "react";

import Axe from "./Axe";

const axesData = [
  { axeType: "lead" },
  { axeType: "gold" },
  { axeType: "silver" },
  { axeType: "copper" },
  { axeType: "iron" },
  { axeType: "steel" },
];

function Axes(props) {
  const { buyAxeHandler } = props;

  return (
    <div className="axes flex-wrapper">
      {axesData.map((axe, idx) => {
        return (
          <Axe
            key={idx}
            axeType={axe.axeType}
            buyAxeHandler={buyAxeHandler}
            idx={idx}
          />
        );
      })}
    </div>
  );
}

export default Axes;
