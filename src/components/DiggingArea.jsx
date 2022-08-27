import React from "react";

import minerSrc from "../images/miner-1.gif";

function DigArea(props) {
  const { digLeft, index, isActive, backgroundColor } = props;

  return (
    <div
      className="dig-area"
      style={{
        border: index === 99 ? "3px solid red" : null,
      }}
    >
      <div
        className="miner"
        style={{
          backgroundImage: isActive ? `url("${minerSrc}")` : null,
        }}
      ></div>
      <div
        className="area-bg"
        style={{
          backgroundColor: backgroundColor,
          opacity: `${digLeft}`,
        }}
      ></div>
    </div>
  );
}

export default DigArea;
