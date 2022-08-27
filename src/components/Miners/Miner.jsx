import React from "react";

import testSrc from "../../images/miner-profile-1.png";
import axeSrc from "../../images/pickaxes.webp";
import levelUpSrc from "../../images/plus.webp";
import { getCapitalizedString } from "../../helpers";
import { axeTypeToStyleMap, durabilityMap } from "../../helpers";

function Miner(props) {
  const {
    id,
    selectMinerHandler,
    isSelected,
    pickaxe,
    levelUpHandler,
    levels,
  } = props;

  return (
    <div
      onClick={() => selectMinerHandler(id)}
      className="miner-container flex-wrapper"
    >
      {/* Miner Profile */}
      <div className="miner-profile flex-wrapper">
        {/* Profile Picture */}

        <div className="miner-img-and-selection flex-wrapper">
          {/* add onChange to supress warning */}
          <input
            onChange={() => function () {}}
            type="radio"
            name="miner"
            checked={isSelected}
          />
          <div
            className="miner-img"
            style={{
              backgroundImage: `url("${testSrc}")`,
            }}
          ></div>
        </div>

        <div className="attributes flex-wrapper">
          <div
            onClick={() => levelUpHandler("general", id)}
            className="attribute flex-wrapper"
          >
            <img
              src={levelUpSrc}
              alt="level-up-icon"
              className="level-up-icon"
            />
            <span>
              Level:&nbsp;
              <span className="attribute-value">{levels.level}</span>
            </span>
          </div>

          <div
            onClick={() => levelUpHandler("agi", id)}
            className="attribute flex-wrapper"
          >
            <img
              src={levelUpSrc}
              alt="level-up-icon"
              className="level-up-icon"
            />
            Agility:&nbsp;
            <span className="attribute-value">{levels.agility}</span>
          </div>

          <div
            onClick={() => levelUpHandler("str", id)}
            className="attribute flex-wrapper"
          >
            <img
              src={levelUpSrc}
              alt="level-up-icon"
              className="level-up-icon"
            />
            Strength:&nbsp;
            <span className="attribute-value">{levels.strength}</span>
          </div>

          <div
            onClick={() => levelUpHandler("int", id)}
            className="attribute flex-wrapper"
          >
            <img
              src={levelUpSrc}
              alt="level-up-icon"
              className="level-up-icon"
            />
            Intelligence:&nbsp;
            <span className="attribute-value">{levels.intelligence}</span>
          </div>
        </div>
      </div>

      {/* Miner's Axe Profile */}
      <div className="miners-axe flex-wrapper">
        <div
          className="axe-img axe axe-1"
          /** change to correct axe |^ */ style={{
            backgroundImage: `url("${axeSrc}")`,
            backgroundPosition: axeTypeToStyleMap[pickaxe.axeType],
          }}
        ></div>
        <div className="axe-properties flex-wrapper">
          <div className="material">
            {getCapitalizedString(pickaxe.axeType)}
          </div>
          <div
            className="durability-wrapper"
          >
            <div
              className="durability-gauge"
              style={{
                width: `${
                  (pickaxe.durability / durabilityMap[pickaxe.axeType]) * 100
                }%`,
                color: "green" /** long ternary  */,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Miner;
