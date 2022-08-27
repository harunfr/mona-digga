import Pickaxe from "./Pickaxe";

let currentId = -1;

function generateId() {
  // starts with zero so it syncs with the index
  currentId += 1;
  return currentId;
}

class Miner {
  constructor() {
    this.id = generateId();
    this.baseMinePerSecond = 0.05;
    this.pickaxe = new Pickaxe("quicksilver");
    this.levelUpPrice = 2;
    this.levelUpAgiPrice = 2;
    this.levelUpIntPrice = 2;
    this.levelUpStrPrice = 2;
    // attributes
    this.levels = {
      level: 1,
      agility: 1,
      strength: 1,
      intelligence: 1,
    };
  }

  levelUp() {
    this.baseMinePerSecond += 0.02;
    this.levels.level += 1;
    this.levelUpPrice = this.levelUpPrice ** 2;
  }

  levelUpAgi() {
    this.baseMinePerSecond += 0.01;
    this.levels.agility += 1;
    this.levelUpAgiPrice = this.levelUpAgiPrice ** 2;
  }

  levelUpInt() {
    this.baseMinePerSecond += 0.01;
    this.levels.intelligence += 1;
    this.levelUpIntPrice = this.levelUpIntPrice ** 2;
  }

  levelUpStr() {
    this.baseMinePerSecond += 0.01;
    this.levels.strength += 1;
    this.levelUpStrPrice = this.levelUpStrPrice ** 2;
  }

  changeAxe(axeType) {
    this.pickaxe = new Pickaxe(axeType);
  }

  useAxe() {
    this.pickaxe.wear();
    const isPickaxeBroken = this.pickaxe.durability < 0;
    if (isPickaxeBroken) {
      this.pickaxe = new Pickaxe("quicksilver");
    }
  }

  get minePerSecond() {
    return Number(
      (this.baseMinePerSecond + this.pickaxe.minePerSecond).toFixed(2),
    );
  }
}

export default Miner;
