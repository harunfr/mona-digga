/* eslint-disable no-undef */
import Miner from "../Game/Miner";
import Pickaxe from "../Game/Pickaxe";
/** # Miner Tests */
/**
 * Miner has level, strength, axe, minePerSecond (combined with his/her strength, axe, level, ...others)
 * Has axe methods ([crud]add, remove, update, delete)
 * Has levelup, levelup str, int
 * If miner's pickaxe is broken he/she replaces it with default frozen quicsilver pickaxe
 *
 */

//  const quicksilver = new Pickaxe("quicksilver", 0.05, 5)
//  const lead = new Pickaxe("lead", 0.1, 25)
//  const gold = new Pickaxe("gold", 0.15, 35)
//  const silver = new Pickaxe("silver", 0.2, 45)
//  const copper = new Pickaxe("copper", 0.25, 55)
//  const iron = new Pickaxe("iron", 0.3, 65)
//  const steel = new Pickaxe("steel", 0.35, 75)

describe("Miner - Mine per Second", () => {
  test("initial mine/s", () => {
    const miner = new Miner();
    const expectedMinePerSecond = 0.1;

    expect(miner.minePerSecond).toBe(expectedMinePerSecond);
  });
  test("mine/s changes with leveling up his/her level", () => {
    const miner = new Miner();
    miner.levelUp();
    // Floating point correction 0.1 + 0.02 ?= 0.12000000000000001
    const expectedMinePerSecond = 0.12;

    expect(miner.minePerSecond).toBe(expectedMinePerSecond);
  });
  test("mine/s changes with strength level", () => {
    const miner = new Miner();
    miner.levelUpStr();
    const expectedMinePerSecond = 0.11;

    // Floating point correction 0.1 + 0.01 ?= 0.11000000000000001
    expect(Number(miner.minePerSecond.toFixed(2))).toBe(expectedMinePerSecond);
  });
  test("mine/s changes with intelligence level", () => {
    const miner = new Miner();
    miner.levelUpInt();
    const expectedMinePerSecond = 0.11;

    expect(Number(miner.minePerSecond.toFixed(2))).toBe(expectedMinePerSecond);
  });
  test("mine/s changes with agility level", () => {
    const miner = new Miner();
    miner.levelUpAgi();
    const expectedMinePerSecond = 0.11;

    expect(Number(miner.minePerSecond.toFixed(2))).toBe(expectedMinePerSecond);
  });
  test("mine/s changes with different pickaxe", () => {
    /** All Available Pickaxes */
    const quicksilver = new Pickaxe("quicksilver", 0.05, 5);
    const lead = new Pickaxe("lead", 0.1, 25);
    const gold = new Pickaxe("gold", 0.15, 35);
    const silver = new Pickaxe("silver", 0.2, 45);
    const copper = new Pickaxe("copper", 0.25, 55);
    const iron = new Pickaxe("iron", 0.3, 65);
    const steel = new Pickaxe("steel", 0.35, 75);

    /** Different miners */
    const miner1 = new Miner();
    const miner2 = new Miner();
    const miner3 = new Miner();
    const miner4 = new Miner();
    const miner5 = new Miner();
    const miner6 = new Miner();
    const miner7 = new Miner();

    miner1.pickaxe = quicksilver;
    const expectedMinePerSecond1 = 0.1;
    expect(miner1.minePerSecond).toBe(expectedMinePerSecond1);

    miner2.pickaxe = lead;
    const expectedMinePerSecond2 = 0.15;
    expect(miner2.minePerSecond).toBe(expectedMinePerSecond2);

    miner3.pickaxe = gold;
    const expectedMinePerSecond3 = 0.2;
    expect(miner3.minePerSecond).toBe(expectedMinePerSecond3);

    miner4.pickaxe = silver;
    const expectedMinePerSecond4 = 0.25;
    expect(miner4.minePerSecond).toBe(expectedMinePerSecond4);

    miner5.pickaxe = copper;
    const expectedMinePerSecond5 = 0.3;
    expect(miner5.minePerSecond).toBe(expectedMinePerSecond5);

    miner6.pickaxe = iron;
    const expectedMinePerSecond6 = 0.35;
    expect(miner6.minePerSecond).toBe(expectedMinePerSecond6);

    miner7.pickaxe = steel;
    const expectedMinePerSecond7 = 0.4;
    expect(miner7.minePerSecond).toBe(expectedMinePerSecond7);
  });
  //
  test("miner has default frozen quicksilver axe", () => {
    const miner = new Miner();
    const minerAxe = miner.pickaxe;
    const minerAxeType = minerAxe.axeType; /** or axeType? */
    const expectedType = "quicksilver";

    expect(minerAxeType).toBe(expectedType);
  });

  test("miner changes his/her axe from lead to silver", () => {
    const miner = new Miner();
    miner.changeAxe("lead");
    miner.changeAxe("silver");

    expect(miner.pickaxe.axeType).toBe("silver");
  });
});
