import Gameboard from "../Game/Gameboard";
/**
 * Properties: minePerSecond, coinPerSecond, slider, miner, cells, unDugcells[[?]],
 * Methods: initialize, ...rest
 *
 * Miner mines, pickaxe digs
 */

/** # Gameboard Tests
 *  Properties: cells, activeCell(cells being dug currently)
 *  Behaviors: process (handle where to dig),
 *
 *  General Notes
 * (there will be undug and/or dug cells?),
 */

describe("Gameboard", () => {
  test("processes cells", () => {
    const gameboard = new Gameboard();
    gameboard.prepareCells();
    gameboard.process([0.1, 0.3]);

    const lastCellIdx = gameboard.undugs.length - 1;

    const firstCell = gameboard.undugs[lastCellIdx];
    const secondCell = gameboard.undugs[lastCellIdx - 1];

    const firstCellValue = firstCell.undug;
    const secondCellValue = secondCell.undug;

    expect(firstCellValue).toBe(0.9);
    expect(secondCellValue).toBe(0.7);
  });
  test("processes cells repeatedly", () => {
    const gameboard = new Gameboard();
    gameboard.prepareCells();
    // console.log(gameboard);
    gameboard.process([0.1, 0.1]);
    gameboard.process([0.1, 0.1]);
    gameboard.process([0.1, 0.1]);

    const lastCellIdx = gameboard.undugs.length - 1;

    const lastCell = gameboard.undugs[lastCellIdx];
    const secondToLastCell = gameboard.undugs[lastCellIdx - 1];

    const lastCellValue = lastCell.undug;
    const secondToLastCellValue = secondToLastCell.undug;

    expect(Number(lastCellValue.toFixed(2))).toBe(0.7);
    expect(Number(secondToLastCellValue.toFixed(2))).toBe(0.7);
  });
  test("processes last cell with more than 1 miner", () => {
    const gameboard = new Gameboard();
    gameboard.undugs.length = 0;
    gameboard.undugs.push({ undug: 1 });

    gameboard.process([0.1, 0.2, 0.3]);

    const length = gameboard.undugs.length;
    const firstCell = gameboard.undugs[length - 1];
    const firstCellValue = firstCell.undug;

    expect(firstCellValue).toBe(0.9);
  });
});
