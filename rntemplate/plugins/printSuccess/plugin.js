const {green, blue, yellow, red} = require('kleur');

module.exports = {
  async apply(value, previousValues) {
    return new Promise(resolve => {
      console.log('\n');
      console.log(
        'TheCodingMachine React-Native Boilerplate initialized with success ! 🚀\n',
      );

      if (previousValues.typescript) {
        console.log(blue('  THE TYPESCRIPT VERSION 📘'));
      } else {
        console.log(yellow('  THE JAVASCRIPT VERSION 📒'));
      }
      console.log('\n');

      console.log(
        '- 📚 If you need to read more about this boilerplate : https://thecodingmachine.github.io/react-native-boilerplate/',
      );
      console.log(
        '- 🤕 If you have some troubles : https://github.com/thecodingmachine/react-native-boilerplate/issues',
      );
      console.log(
        '- ⭐ If you love this boilerplate, give us a star, you will be a ray of sunshine in our lives :) https://github.com/thecodingmachine/react-native-boilerplate',
      );

      if (!previousValues.typescript) {
        console.log('\n');
        console.log(
          red(
            '🚨 You choose the javascript version, don\'t forget to run "yarn lint --fix" after the installation 🚨',
          ),
        );
        console.log('\n');
      }

      resolve();
    });
  },
};
