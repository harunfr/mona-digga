const minePerSecondMap = {
  quicksilver: 0.05,
  lead: 0.1,
  gold: 0.15,
  silver: 0.2,
  copper: 0.25,
  iron: 0.3,
  steel: 0.35,
};

const durabilityMap = {
  quicksilver: 99,
  lead: 15,
  gold: 25,
  silver: 35,
  copper: 45,
  iron: 55,
  steel: 65,
};

class Pickaxe {
  constructor(axeType) {
    this.axeType = axeType;
    this.minePerSecond = minePerSecondMap[this.axeType];
    this.durability = durabilityMap[this.axeType];
  }

  get price() {
    let axePrice = 0;
    if (this.axeType !== "quicksilver") {
      axePrice = Number(
        ((this.minePerSecond * this.durability) / 0.85).toFixed(2),
      );
    }
    return axePrice;
  }

  wear() {
    this.durability -= 1;
  }
}

export default Pickaxe;
