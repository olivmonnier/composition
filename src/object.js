const matches = (obj, props) => Object.keys(props).every((key) => obj[key] === props[key]);

module.exports = {
  matches
}
