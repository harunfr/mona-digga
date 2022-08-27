import React from "react";

function CoinMinePerSecond(props) {
  const { coins, minePerSecond, coinPerSecond } = props;

  return (
    <div className="cps-mps-coin flex-wrapper">
      <div>
        You have:
        <span className="coins-value">{coins}</span>
        coins.
      </div>

      <div>
        <span className="mine-coin-value">{coinPerSecond}&#32;</span>
        coins/s
      </div>

      <div>
        <span className="mine-coin-value">{minePerSecond}&#32;</span>
        mine/s
      </div>
    </div>
  );
}

export default CoinMinePerSecond;
