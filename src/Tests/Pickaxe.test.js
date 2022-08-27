import Pickaxe from "../Game/Pickaxe";

/** # Pickaxe Tests */
/**
 * AxeTypes: Frozen Quicksilver | Lead | Gold | Silver | Copper | Iron | Steel
 * digPerSecond: 0.05/s | 0.1/s | 0.15/s |  0.20/s |  0.25/s |  0.30/s |  0.35/s |
 * durability: 5 | 25 | 35 | 45 | 55 | 65 | 75 |
 * price: digPerSecond * durability * 0.85
 * decreaseDurability, ...methods
 * ...otherProperties
 */

describe("Pickaxe", () => {
  test("different axe types has different prices", () => {
    const quicksilver = new Pickaxe("quicksilver", 0.05, 5);
    const lead = new Pickaxe("lead", 0.1, 25);
    const gold = new Pickaxe("gold", 0.15, 35);
    const silver = new Pickaxe("silver", 0.2, 45);
    const copper = new Pickaxe("copper", 0.25, 55);
    const iron = new Pickaxe("iron", 0.3, 65);
    const steel = new Pickaxe("steel", 0.35, 75);

    const quicksilverPrice = 0;
    const leadPrice = ((0.1 * 25) / 0.85).toFixed(2);
    const goldPrice = ((0.15 * 35) / 0.85).toFixed(2);
    const silverPrice = ((0.2 * 45) / 0.85).toFixed(2);
    const copperPrice = ((0.25 * 55) / 0.85).toFixed(2);
    const ironPrice = ((0.3 * 65) / 0.85).toFixed(2);
    const steelPrice = ((0.35 * 75) / 0.85).toFixed(2);

    expect(quicksilver.price).toBe(quicksilverPrice);
    expect(lead.price).toBe(leadPrice);
    expect(gold.price).toBe(goldPrice);
    expect(silver.price).toBe(silverPrice);
    expect(copper.price).toBe(copperPrice);
    expect(iron.price).toBe(ironPrice);
    expect(steel.price).toBe(steelPrice);
  });
  test("axes wear over time", () => {
    const silver = new Pickaxe("silver", 0.2, 45);
    silver.dig();
    silver.dig();
    silver.dig();
    silver.dig();
    const durabilityAfter4Hits = 41;

    expect(silver.durability).toBe(durabilityAfter4Hits);
  });
});
