import artSrc from "../images/mona-lisa.webp";
import { rowCount } from "../Game/Gameboard";
let count = 0;
export const artStyle = { backgroundImage: `url("${artSrc}")` };

export function getShuffledArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

export function idGenerator() {
  count += 1;
  return count;
}

export const randomBgs = [];

for (let i = 0; i < rowCount * rowCount; i++) {
  randomBgs.push(
    "#000000".replace(/0/g, () => (~~(Math.random() * 16)).toString(16)),
  );
}

export function formatToReadable(input, decimal = 1) {
  const isInt = Number.isInteger(input);
  if (isInt) {
    return input;
  } else {
    // initial number conversion to deal with html input's string type data emission.
    return Number(Number(input).toFixed(decimal));
  }
}

export function getCapitalizedString(string) {
  let capitalized = "";
  if (string) {
    capitalized = string.slice(0, 1).toUpperCase() + string.slice(1);
  }
  return capitalized;
}

export const axeTypeToStyleMap = {
  /* background-position: <X> 0;   */
  quicksilver: "0 0",
  lead: "20.65% 0",
  gold: "41.3% 0",
  silver: "61.95% 0",
  copper: "101% 0",
  iron: "20.65% 0",
  steel: "82.6% 0",
};

export const durabilityMap = {
  quicksilver: 99,
  lead: 15,
  gold: 25,
  silver: 35,
  copper: 45,
  iron: 55,
  steel: 65,
};
