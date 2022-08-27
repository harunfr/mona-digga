import React from "react";

import axesSrc from "../../images/pickaxes.webp";
import { axeTypeToStyleMap } from "../../helpers";

function Axe(props) {
  const { idx, axeType, buyAxeHandler } = props;

  return (
    <div
      onClick={() => buyAxeHandler(axeType)}
      className={`axe axe-${idx}`}
      style={{
        backgroundImage: `url("${axesSrc}")`,
        backgroundPosition: axeTypeToStyleMap[axeType],
      }}
    ></div>
  );
}

export default Axe;
