import Gameboard from "./Gameboard"
import Miner from "./Miner"
import Pickaxe from "./Pickaxe"

class Game {
  constructor() {
    this.miners = [new Miner()]
    this.gameboard = new Gameboard()
    this.undugs = []
    this.coins = 0
    this.baseMinerPrice = 2
    // factor for coin/s
    this.slider = 1
  }

  get minersTotalPower() {
    const totalPower = this.miners.reduce((total, curr) => {
      total += curr.minePerSecond
      return total
    }, 0)
    return totalPower
  }

  get coinPerSecond() {
    return this.slider * this.minersTotalPower
  }

  get minePerSecond() {
    return (2 - this.slider) * this.minersTotalPower
  }

  addMiner() {
    this.miners.push(new Miner())
  }

  buyMiner() {
    const moneyLeft = this.coins - this.baseMinerPrice
    const hasEnoughMoney = moneyLeft > 0
    if (hasEnoughMoney) {
      this.coins -= this.baseMinerPrice
      this.addMiner()
      this.baseMinerPrice = this.baseMinerPrice ** 2
    }
  }

  buyAxe(axeType, minerId) {
    const axePrice = new Pickaxe(axeType).price
    const moneyLeft = this.coins - axePrice
    const hasEnoughMoney = moneyLeft > 0
    if (hasEnoughMoney) {
      this.coins -= axePrice
      this.miners[minerId].changeAxe(axeType)
    }
  }

  earnCoin() {
    this.coins += this.minersTotalPower * this.slider
  }

  levelUp(id) {
    const miner = this.miners[id]
    const levelUpPrice = miner.levelUpPrice
    console.log({ levelUpPrice, minerLevel: this.miners[id].levels.level })
    const moneyLeft = this.coins - levelUpPrice
    const hasEnoughMoney = moneyLeft > 0

    if (hasEnoughMoney) {
      this.miners[id].levelUp()
      this.coins -= levelUpPrice
    }
  }

  levelUpAgi(id) {
    const miner = this.miners[id]
    const levelUpPrice = miner.levelUpAgiPrice
    const moneyLeft = this.coins - levelUpPrice
    const hasEnoughMoney = moneyLeft > 0

    if (hasEnoughMoney) {
      this.miners[id].levelUpAgi()
      this.coins -= levelUpPrice
    }
  }

  levelUpInt(id) {
    const miner = this.miners[id]
    const levelUpPrice = miner.levelUpIntPrice
    const moneyLeft = this.coins - levelUpPrice
    const hasEnoughMoney = moneyLeft > 0

    if (hasEnoughMoney) {
      this.miners[id].levelUpInt()
      this.coins -= levelUpPrice
    }
  }

  levelUpStr(id) {
    const miner = this.miners[id]
    const levelUpPrice = miner.levelUpStrPrice
    const moneyLeft = this.coins - levelUpPrice
    const hasEnoughMoney = moneyLeft > 0

    if (hasEnoughMoney) {
      this.miners[id].levelUpStr()
      this.coins -= levelUpPrice
    }
  }

  playOneTurn() {
    this.earnCoin()
    this.gameboard.process(this.miners, this.slider)
  }

  startNewGame() {
    this.gameboard.prepareCells()
    this.undugs = this.gameboard.undugs
  }
}

export default Game
