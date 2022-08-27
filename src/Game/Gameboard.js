export const rowCount = 10;

class Gameboard {
  constructor() {
    this.undugs = [];
  }

  process(miners, sliderFactor) {
    let cellsDug = 0;

    for (let index = 0; index < this.undugs.length; index++) {
      // refactor this.undugs[index].undug to more readable version
      if (this.undugs[index].undug > 0) {
        this.undugs[index].isActive = true;
        const digAmount = miners[cellsDug].minePerSecond * (2 - sliderFactor);
        this.undugs[index].undug -= digAmount;
        miners[cellsDug].useAxe();
        cellsDug += 1;
        if (cellsDug === miners.length) {
          break;
        }
      } else {
        this.undugs[index].isActive = false;
      }
    }
  }

  prepareCells() {
    const orderedIndexes = [];
    const undugs = [];

    for (let i = 0; i < rowCount * rowCount; i++) {
      undugs.push({ undug: 1 });
      orderedIndexes.push(i);
    }

    // will use this later
    const digOrder = getShuffledArray(orderedIndexes);

    function getShuffledArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }
    this.undugs = undugs;
  }
}

export default Gameboard;
