import Game from "../Game/Game";
/** # Game Tests */
/**
 * Properties: minePerSecond, coinPerSecond, slider, miner, coords, unDugCoords[[?]],
 * Methods: initialize, buyAxe, updateAxe, ..., ...rest
 *
 * Miner mines, pickaxe digs
 *
 */

describe("Game", () => {
  test("has total minePerSecond", () => {
    const game = new Game();
    game.startNewGame();
    const expectedMinePerSecond = 0.1;

    expect(game.minersTotalPower).toBe(expectedMinePerSecond);
  });
  test("total minePerSecond changes if new miner added", () => {
    const game = new Game();
    game.startNewGame();
    game.addMiner();
    const expectedMinePerSecond = 0.2;

    expect(game.minersTotalPower).toBe(expectedMinePerSecond);
  });
  test("total minePerSecond changes if new axe changes", () => {
    const game = new Game();
    game.startNewGame();
    game.coins = 50; /* to be able to buy axe */
    // id for selecting related miner
    // id zero is first miner
    const id = 0;
    game.buyAxe("silver", id);
    const expectedMinePerSecond = 0.25;

    expect(game.minersTotalPower).toBe(expectedMinePerSecond);
  });
  test("buys new axe", () => {
    const game = new Game();
    game.startNewGame();
    game.coins = 50;
    // id for selecting related miner
    const id = 0;
    game.buyAxe("silver", id);
    const expectedCoins = 50 - 8.24; /**? */

    expect(game.coins).toBe(expectedCoins);
  });
  test("buys new miner", () => {
    const game = new Game();
    game.startNewGame();
    game.coins = 50;
    // id for selecting related miner
    game.buyMiner();
    const expectedCoins = 50 - 1; /**? */

    expect(game.coins).toBe(expectedCoins);
  });
});
