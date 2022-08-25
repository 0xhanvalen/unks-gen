const cleanOptions = (_options) => {
  if (_options[0] === ".DS_Store") {
    _options.splice(0, 1);
  }
  return _options;
};

module.exports = { cleanOptions };
