const mode = import.meta.env.MODE;
const cdn =
  mode === "development"
    ? import.meta.env.VITE_COLORS
    : import.meta.env.VITE_COLORS_PROD;

const getImgs = (name, nums) => {
  return Array(nums)
    .fill(0)
    .map((item, index) => {
      return `${cdn}/${name}${index + 1}.png`;
    });
};
const blackImgs = getImgs("black", 9);
const pinkImgs = getImgs("pink", 9);
const purpleImgs = getImgs("purple", 9);
const redImgs = getImgs("red", 9);
const whiteImgs = getImgs("white", 9);
const yellowImgs = getImgs("yellow", 9);
const greenImgs = getImgs("green", 9);
const orangeImgs = getImgs("orange", 9);
const blueImgs = getImgs("blue", 9);

const waterBlue = getImgs("水藍", 7);
const whilte = getImgs("白", 7);
const yellowWhite = getImgs("米黃", 7);
const red = getImgs("紅字", 7);
const pink = getImgs("粉紅", 7);
const grass = getImgs("草綠", 7);
const purple = getImgs("紫", 7);
const yellow = getImgs("黃", 7);
const black = getImgs("黑", 7);
const green = getImgs("綠", 7);
const orange = getImgs("橘字", 7);
const blue = getImgs("藍", 7);

export default {
  waterBlue,
  whilte,
  yellowWhite,
  red,
  pink,
  grass,
  purple,
  yellow,
  black,
  green,
  orange,
  blue,
};
