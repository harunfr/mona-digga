import React from "react";

import Miner from "./Miner";

function Miners(props) {
  const {
    miners,
    hireHandler,
    selectMinerHandler,
    selectedMinerId,
    levelUpHandler,
  } = props;

  return (
    <div className="miners flex-wrapper">
      {miners.map((miner) => {
        return (
          <Miner
            selectMinerHandler={selectMinerHandler}
            id={miner.id}
            pickaxe={miner.pickaxe}
            key={miner.id}
            isSelected={miner.id === selectedMinerId}
            levelUpHandler={levelUpHandler}
            levels={miner.levels}
          />
        );
      })}

      <button onClick={hireHandler} className="hire-btn">
        Hire New Miner
      </button>
    </div>
  );
}

export default Miners;
