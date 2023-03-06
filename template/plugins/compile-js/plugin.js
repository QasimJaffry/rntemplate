const { execSync } = require('child_process');

module.exports = {
  async apply(value, previousValues) {
    return new Promise(async resolve => {
      console.log('\n');
      console.log('📦 Installing TypeScript');

      resolve();
    });
  },
};
