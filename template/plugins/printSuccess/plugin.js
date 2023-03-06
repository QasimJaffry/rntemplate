const { green, blue, yellow, red } = require('kleur');

module.exports = {
  async apply(value, previousValues) {
    return new Promise(resolve => {
      console.log('\n');

      console.log(blue('  TYPESCRIPT '));

      console.log('\n');

      resolve();
    });
  },
};
