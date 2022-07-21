const getComponentPath = (component) => `./src/components/${component}/index.js`;

module.exports = {
  avatar: getComponentPath('avatar'),
  box: getComponentPath('box'),
  button: getComponentPath('button'),
};
