const mode = import.meta.env.MODE;
const cdn =
  mode === "development"
    ? import.meta.env.VITE_COLORS
    : import.meta.env.VITE_COLORS_PROD;

const getImgs = (name) => {
  return Array(9)
    .fill(0)
    .map((item, index) => {
      return `${cdn}/${name}${index + 1}.png`;
    });
};
const blackImgs = getImgs("black");
const pinkImgs = getImgs("pink");
const purpleImgs = getImgs("purple");
const redImgs = getImgs("red");
const whiteImgs = getImgs("white");
const yellowImgs = getImgs("yellow");
const greenImgs = getImgs("green");
const orangeImgs = getImgs("orange");
const blueImgs = getImgs("blue");

export default {
  blackImgs,
  pinkImgs,
  purpleImgs,
  redImgs,
  whiteImgs,
  yellowImgs,
  greenImgs,
  orangeImgs,
  blueImgs,
};
