const fs = require("fs");
const { createCanvas, loadImage } = require("canvas");
const {Roll100} = require("./roll100");
const { cleanOptions } = require("./cleanOptions");

const RollAccessory = async (_folder) => {
    let options, index, image, name = null;
    let roll = Roll100();
    let folder = `${_folder}/ACCSESSORIES`;
    if (roll > 98) {
        folder = `${folder}/SR`;
        options = cleanOptions(fs.readdirSync(`${folder}`));
        index = Math.floor(Math.random() * options.length);
        image = await loadImage(`${folder}/${options[index]}`);
        name = options[index];
  }
  if (roll <= 98 && roll > 94) {
    folder = `${folder}/R`;
    options = cleanOptions(fs.readdirSync(`${folder}`));
    index = Math.floor(Math.random() * options.length);
    image = await loadImage(`${folder}/${options[index]}`);
    name = options[index];
  }
  if (roll <= 94 && roll > 80) {
    folder = `${folder}/UC`;
    options = cleanOptions(fs.readdirSync(`${folder}`));
    index = Math.floor(Math.random() * options.length);
    image = await loadImage(`${folder}/${options[index]}`);
    name = options[index];
  }
  if (roll <= 80 && roll > 60) {
    folder = `${folder}/C`;
    options = cleanOptions(fs.readdirSync(`${folder}`));
    index = Math.floor(Math.random() * options.length);
    image = await loadImage(`${folder}/${options[index]}`);
    name = options[index];
  }
  if (roll <= 60) {
    folder = `${folder}/MC`;
    options = cleanOptions(fs.readdirSync(`${folder}`));
    index = Math.floor(Math.random() * options.length);
    image = await loadImage(`${folder}/${options[index]}`);
    name = options[index];
  }
  return { image, name };
};

module.exports = { RollAccessory };
