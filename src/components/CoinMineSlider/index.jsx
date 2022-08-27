import React from "react";

import { formatToReadable } from "../../helpers";

function CoinMineSlider(props) {
  const { coinMultiplier, onChangeHandler } = props;

  return (
    <div className="coin-mps-section">
      <div className="slider-container flex-wrapper">
        <label htmlFor="multiplier">
          Mine/s multiplier:{" "}
          <span className="multiplier">
            {formatToReadable(2 - coinMultiplier)}
          </span>
        </label>
        <input
          className="multiplier-slider"
          value={coinMultiplier}
          onChange={onChangeHandler}
          type="range"
          id="multiplier"
          name="multiplier"
          min="0"
          max="2"
          step="0.2"
        />
        <label htmlFor="multiplier">
          Coin/s multiplier:{" "}
          <span className="multiplier">{formatToReadable(coinMultiplier)}</span>
        </label>
      </div>
    </div>
  );
}

export default CoinMineSlider;
